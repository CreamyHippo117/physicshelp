// AI tutor panel. Talks to the Cloudflare Worker in /worker (which holds the API key). No key ever lives in the browser.
(function(){
"use strict";
var cfg=window.PH_CONFIG||{}, H=null, cur=null, busy=false, panel=null, hintN={};
function ts(){ if(!H)return {}; var s=H.S(); return s.settings.tutor||(s.settings.tutor={}) }
function url(){ return String(ts().url||cfg.tutorUrl||"").trim() }
function code(){ return String(ts().code||"").trim() }
function enabled(){ return !cfg.noNetwork && !!url() && !!code() }
function usage(){ var t=ts(),u=t.usage||(t.usage={turns:0,in:0,out:0,day:"",dayTurns:0}),d=new Date().toISOString().slice(0,10); if(u.day!==d){u.day=d;u.dayTurns=0} return u }
function cap(){ return cfg.dailyTurns||80 }
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function txt(html){ var d=document.createElement("div"); d.innerHTML=String(html||""); d.querySelectorAll("svg,script,style").forEach(function(n){n.remove()}); return d.textContent.replace(/\n{3,}/g,"\n\n").trim() }

/* tiny markdown: paragraphs, - lists, **bold**, `code`; math spans are protected and rendered by KaTeX */
function fmt(s){
  var m=[]; s=String(s).replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g,function(x){m.push(x);return "@@M"+(m.length-1)+"@@"});
  s=esc(s).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>");
  var li=/^\s*([-*]|\d+[.)])\s+/;
  var out=s.split(/\n{2,}/).map(function(b){ var L=b.split("\n");
    if(L.every(function(l){return li.test(l)})){var o=/^\s*\d/.test(L[0]);return (o?"<ol>":"<ul>")+L.map(function(l){return "<li>"+l.replace(li,"")+"</li>"}).join("")+(o?"</ol>":"</ul>")}
    return "<p>"+L.join("<br>")+"</p>"}).join("");
  return out.replace(/@@M(\d+)@@/g,function(_,i){return esc(m[+i])});
}

function build(){
  if(panel)return;
  panel=document.createElement("div"); panel.id="tutor"; panel.className="tutor"; panel.hidden=true; panel.setAttribute("role","dialog"); panel.setAttribute("aria-label","Tutor");
  panel.innerHTML='<div class="tutor-head"><b>Tutor</b><span id="tctx" class="mut"></span><span style="flex:1"></span><button class="sec" id="tclr">New chat</button><button class="sec" id="tx" aria-label="Close tutor">&times;</button></div>'
   +'<div id="tlist" class="tutor-list" aria-live="polite"></div>'
   +'<div class="tutor-foot"><textarea id="tin" rows="2" placeholder="Ask about this material. Enter to send, Shift+Enter for a new line."></textarea>'
   +'<div class="row"><label class="mut"><input type="checkbox" id="tq"> Quick answers (cheaper)</label><span id="tuse" class="mut"></span><button id="tsend">Send</button></div></div>';
  document.body.appendChild(panel);
  var fab=document.createElement("button"); fab.id="tutorBtn"; fab.className="tutor-fab"; fab.textContent="Ask tutor"; fab.hidden=true; document.body.appendChild(fab);
  fab.onclick=function(){ var r=H.route(); open({key:r.key,title:r.title,context:r.context,freeMode:"chat"}) };
  panel.querySelector("#tx").onclick=function(){panel.hidden=true};
  panel.querySelector("#tclr").onclick=function(){ if(cur){cur.msgs=[];hintN[cur.key]=0} list().innerHTML=""; intro() };
  panel.querySelector("#tsend").onclick=sendFree;
  panel.querySelector("#tin").addEventListener("keydown",function(e){ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendFree()} });
  panel.querySelector("#tq").onchange=function(){ ts().quick=this.checked; H.save() };
}
function list(){ return panel.querySelector("#tlist") }
function intro(){ var d=document.createElement("div"); d.className="tmsg a mut";
  d.textContent=(cur&&cur.freeMode==="hint")?"I'll give hints before answers. Ask for another hint if you're still stuck.":"Ask me anything about this material. I stick to what the AP tests.";
  list().appendChild(d) }
function bubble(role,html){ var d=document.createElement("div"); d.className="tmsg "+role; d.innerHTML=html; list().appendChild(d); list().scrollTop=list().scrollHeight; return d }
function refreshUse(){ var u=usage(); panel.querySelector("#tuse").textContent="Today: "+u.dayTurns+"/"+cap()+" questions" }

function open(o){ if(!enabled()||!H)return; build();
  if(!cur||cur.key!==o.key){ cur={key:o.key,title:o.title||"",context:o.context||{},msgs:[],freeMode:o.freeMode||"chat"}; list().innerHTML=""; intro() }
  else { cur.context=o.context||cur.context; if(o.freeMode)cur.freeMode=o.freeMode }
  panel.querySelector("#tctx").textContent=cur.title?" · "+cur.title:"";
  panel.querySelector("#tq").checked=!!ts().quick; refreshUse(); panel.hidden=false; panel.querySelector("#tin").focus();
}
function sendFree(){ var ta=panel.querySelector("#tin"), v=ta.value.trim(); if(!v||busy||!cur)return; ta.value="";
  ask({key:cur.key,title:cur.title,context:cur.context,mode:(cur.freeMode==="hint"&&ts().hintFirst!==false)?"hint":"chat",text:v,freeMode:cur.freeMode}) }

function ask(o){ if(!enabled()||!H||busy)return; open(o);
  var mode=o.mode||"chat"; if(mode==="hint")hintN[cur.key]=(hintN[cur.key]||0)+1;
  var u=usage(); if(u.dayTurns>=cap()){ bubble("e","You've used today's "+cap()+" tutor questions on this device. It resets tomorrow. (Your tutor can raise it in js/config.js.)"); return }
  cur.msgs.push({role:"user",content:o.text}); bubble("u",esc(o.text).replace(/\n/g,"<br>"));
  var msgs=cur.msgs.slice(-12); while(msgs.length&&msgs[0].role!=="user")msgs.shift();
  var el=bubble("a mut","Thinking&hellip;"), acc="", got=false; busy=true; panel.querySelector("#tsend").disabled=true;
  var over=false;
  function fin(){ over=true; busy=false; panel.querySelector("#tsend").disabled=false; refreshUse() }
  function fail(m){ el.className="tmsg e"; el.textContent=m; cur.msgs.pop(); fin() }
  var ctl=new AbortController(), to=null;
  function arm(){ clearTimeout(to); to=setTimeout(function(){ctl.abort()},60000) } arm(); /* idle timer: resets on every chunk, including server heartbeats */
  fetch(url(),{method:"POST",signal:ctl.signal,headers:{"content-type":"application/json","x-access-code":code()},
    body:JSON.stringify({mode:mode,quick:!!ts().quick,hints:hintN[cur.key]||1,context:o.context||cur.context,messages:msgs})})
  .then(function(res){
    if(!res.ok||!res.body){ return res.json().catch(function(){return {}}).then(function(j){ clearTimeout(to); fail(j.error||("The tutor server answered with an error ("+res.status+").")) }) }
    var rd=res.body.getReader(), dec=new TextDecoder(), buf="";
    function pump(){ return rd.read().then(function(r){
      if(r.done){ clearTimeout(to); if(!over&&!got&&!acc){fail("The tutor stopped without answering. Try again.")} return }
      arm(); buf+=dec.decode(r.value,{stream:true}); var parts=buf.split("\n\n"); buf=parts.pop();
      parts.forEach(function(p){ var m=/^data: (.*)$/m.exec(p); if(!m)return; var e; try{e=JSON.parse(m[1])}catch(_){return}
        if(e.t==="text"){ got=true; acc+=e.v; el.className="tmsg a"; el.innerHTML=fmt(acc); list().scrollTop=list().scrollHeight }
        else if(e.t==="done"){ clearTimeout(to); el.className="tmsg a"; el.innerHTML=fmt(acc); H.math(el);
          cur.msgs.push({role:"assistant",content:acc}); var us=usage(); us.turns++; us.dayTurns++; us.in+=e.in||0; us.out+=e.out||0; H.save();
          var f=document.createElement("div"); f.className="mut tmeta"; f.textContent=(e.model||"").indexOf("sonnet")>=0?"quick answer":"full answer"; el.appendChild(f); fin() }
        else if(e.t==="error"){ clearTimeout(to); fail(e.v||"The tutor had a problem.") } });
      return pump() }) }
    return pump();
  }).catch(function(err){ clearTimeout(to); fail(err&&err.name==="AbortError"?"The tutor took too long. Try again.":"Could not reach the tutor server. Check the URL in Settings and your connection.") });
}

function refresh(){ build(); var f=document.getElementById("tutorBtn"); if(f)f.hidden=!enabled(); if(!enabled())panel.hidden=true }
function init(h){ H=h; build(); refresh() }

function settingsHtml(){ if(cfg.noNetwork)return '<div class="card"><b>AI tutor</b><p class="mut">The tutor needs a server connection, which this hosted page cannot make. Use the downloaded copy of the app to turn it on.</p></div>';
  var t=ts(), u=usage();
  return '<div class="card"><b>AI tutor</b><p class="mut">Answers questions, gives hints and checks free-response work. It runs through a small server your tutor sets up (see <code>worker/README.md</code>); the API key never reaches this browser.</p>'
   +'<p><label>Tutor server URL<br><input id="tu" style="width:100%" placeholder="https://physics-coach-tutor.your-name.workers.dev" value="'+esc(t.url||cfg.tutorUrl||"")+'"></label></p>'
   +'<p><label>Access code<br><input id="tc" type="password" autocomplete="off" value="'+esc(t.code||"")+'"></label></p>'
   +'<p><label><input type="checkbox" id="th" '+(t.hintFirst===false?"":"checked")+'> Hint-first: typing in the tutor on an unanswered question gets hints, not answers</label></p>'
   +'<p><button id="tt" class="sec">Test connection</button> <span id="tm" class="mut"></span></p>'
   +'<p class="mut">On this device: '+u.turns+' tutor questions in total, about '+Math.round((u.in+u.out)/1000)+'k tokens.</p></div>';
}
function bindSettings(){ if(cfg.noNetwork)return; var $=function(i){return document.getElementById(i)};
  $("tu").onchange=function(){ts().url=this.value.trim();H.save();refresh()};
  $("tc").onchange=function(){ts().code=this.value.trim();H.save();refresh()};
  $("th").onchange=function(){ts().hintFirst=this.checked;H.save()};
  $("tt").onclick=function(){ ts().url=$("tu").value.trim(); ts().code=$("tc").value.trim(); H.save(); refresh(); var m=$("tm");
    if(!url()||!code()){m.textContent="Enter the URL and access code first.";return} m.textContent="Testing…";
    fetch(url(),{method:"POST",headers:{"content-type":"application/json","x-access-code":code()},body:JSON.stringify({mode:"ping"})})
     .then(function(r){return r.json().then(function(j){ m.textContent=r.ok&&j.ok?("Connected. Daily limit "+j.dailyTurnCap+(j.capEnforced?" (enforced by the server).":" (not enforced: no KV set up).")):(j.error||"Server said no ("+r.status+").") })})
     .catch(function(){m.textContent="Could not reach that URL."}) };
}
function hinted(key){ return (hintN[key]||0)>0 }
window.PH_TUTOR={hinted:hinted,init:init,enabled:enabled,ask:ask,open:open,refresh:refresh,txt:txt,fmt:fmt,settingsHtml:settingsHtml,bindSettings:bindSettings};
})();
