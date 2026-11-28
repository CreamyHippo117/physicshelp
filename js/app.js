(function(){
"use strict";
var KEY="physhelp.v1", DAY=864e5;
var COURSES={prereq:"Prerequisites",mech:"AP Physics C: Mechanics",em:"AP Physics C: E&M",skills:"Exam skills"};
var $app=document.getElementById("app");
var curCtx={key:"general",title:"General",context:{}};
function T(){return window.PH_TUTOR&&PH_TUTOR.enabled()}
function tx(h){return PH_TUTOR.txt(h)}
var units=PH.units.slice().sort(function(a,b){return (a.order||0)-(b.order||0)});
var byId={};units.forEach(function(u){byId[u.id]=u});

/* ---------- state ---------- */
var mem=null;
function blank(){return {settings:{examDate:PH_EXAM.examDate,hpw:5},lessons:{},q:{},frq:{},log:[],exams:[]}}
function load(){ if(mem) return mem; var s=null; try{s=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  mem=s||blank(); var b=blank(); for(var k in b) if(!(k in mem)) mem[k]=b[k]; return mem }
function save(){ try{localStorage.setItem(KEY,JSON.stringify(mem))}catch(e){} badge() }
var S=load();

/* ---------- helpers ---------- */
function el(h){var d=document.createElement("div");d.innerHTML=h;return d}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function math(node){ try{ renderMathInElement(node||$app,{delimiters:[{left:"$$",right:"$$",display:true},{left:"\\[",right:"\\]",display:true},{left:"$",right:"$",display:false},{left:"\\(",right:"\\)",display:false}],throwOnError:false,errorColor:"#b3261e"}) }catch(e){console.error(e)} }
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function now(){return Date.now()}
function fmt(d){return new Date(d).toLocaleDateString(undefined,{month:"short",day:"numeric"})}
function allMcq(){var r=[];units.forEach(function(u){(u.mcq||[]).forEach(function(q){r.push({u:u,q:q})})});return r}
function qkey(u,q){return u.id+":"+q.id}
function pct(a,b){return b?Math.round(100*a/b):0}

/* ---------- progress ---------- */
var BOX=[0,1,3,7,16,35];
function recordQ(key,ok){ var r=S.q[key]||(S.q[key]={att:0,cor:0,box:0,ok:false});
  r.att++; if(ok)r.cor++; r.ok=ok; r.box=ok?Math.min(5,r.box+1):0; r.due=now()+BOX[r.box]*DAY; r.last=now(); save() }
function unitStats(u){
  var L=(u.lessons||[]), lDone=L.filter(function(l){return S.lessons[u.id+":"+l.id]}).length;
  var Q=(u.mcq||[]), qOk=Q.filter(function(q){var r=S.q[qkey(u,q)];return r&&r.ok}).length, qTried=Q.filter(function(q){return S.q[qkey(u,q)]}).length;
  var F=(u.frq||[]), fDone=F.filter(function(f){return S.frq[u.id+":"+f.id]}).length;
  var parts=[],tot=0;
  if(L.length)parts.push(lDone/L.length); if(Q.length)parts.push(qOk/Q.length); if(F.length)parts.push(fDone/F.length);
  var p=parts.length?parts.reduce(function(a,b){return a+b},0)/parts.length:0;
  var mastered=L.length>0&&lDone===L.length&&Q.length>0&&qOk/Q.length>=0.8;
  return {lDone:lDone,lN:L.length,qOk:qOk,qTried:qTried,qN:Q.length,fDone:fDone,fN:F.length,p:p,mastered:mastered}
}
function dueList(){var t=now(),r=[];allMcq().forEach(function(x){var s=S.q[qkey(x.u,x.q)];if(s&&s.due<=t)r.push(x)});return r}
function badge(){var n=dueList().length,b=document.getElementById("dueBadge");if(b)b.textContent=n?"("+n+")":""}

/* ---------- router ---------- */
function route(hh){
  var h=(hh||location.hash).replace(/^#\/?/,"").split("/"), v=h[0]||"home";
  window.scrollTo(0,0); curCtx={key:"general",title:"General",context:{}};
  try{ ({home:home,unit:unitView,review:review,mixed:mixed,exam:exam,resources:resources,settings:settings}[v]||home)(h); }
  catch(e){ $app.innerHTML="<p>Something broke: "+esc(e.message)+"</p>"; console.error(e) }
  math(); badge(); if(window.PH_TUTOR)PH_TUTOR.refresh();
}
var lastH="";
window.addEventListener("hashchange",function(){if(location.hash!==lastH){lastH=location.hash;route()}});
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="#/"],a[href="#/"]');if(!a)return;e.preventDefault();var h=a.getAttribute("href");lastH=h;try{location.hash=h}catch(_){}route(h)});

/* ---------- home / plan ---------- */
function home(){
  var exam=new Date(S.settings.examDate+"T12:00:00"), left=Math.ceil((exam-now())/DAY), wks=Math.max(0,left/7);
  var hpw=+S.settings.hpw||5, reserve=4; // weeks reserved for timed practice
  var logged=S.log.reduce(function(a,b){return a+b.h},0);
  var remainH=0; units.forEach(function(u){remainH+=(u.hours||6)*(1-unitStats(u).p)});
  var avail=Math.max(0,(wks-reserve))*hpw, ok=avail>=remainH;
  var h='<h1>Your plan</h1><div class="card"><div class="row"><div><b>'+left+' days</b> to the first exam ('+esc(S.settings.examDate)+'; E&amp;M is '+PH_EXAM.dates.em+') &middot; '+wks.toFixed(1)+' weeks</div>'
   +'<div class="mut">Hours logged: '+logged.toFixed(1)+' &middot; <a href="#" id="logh">log hours</a></div></div>'
   +'<p class="'+(ok?'':'')+'">Content left: ~<b>'+remainH.toFixed(0)+' h</b>. At '+hpw+' h/week you have ~<b>'+avail.toFixed(0)+' h</b> before the final '+reserve+' weeks (kept for timed full-length practice). '
   +(ok?'<span class="pill ok">on pace</span>':'<span class="pill bad">behind: raise weekly hours to ~'+(wks>reserve?Math.ceil(remainH/(wks-reserve)):"?")+' h or skip optional parts</span>')+'</p>'
   +(PH_EXAM.verified?'':'<p class="mut">&#9888; '+esc(PH_EXAM.note)+'</p>')+'</div>';
  var nxt=units.filter(function(u){return !unitStats(u).mastered})[0];
  if(nxt)h+='<div class="card" style="border-color:var(--ac)"><div class="mut">Up next</div><div class="row"><b>'+esc(nxt.title)+'</b><a class="btn" href="#/unit/'+nxt.id+'">Continue</a></div></div>';
  var d=dueList().length; if(d)h+='<div class="card row"><span><b>'+d+'</b> missed or due problems waiting</span><a class="btn" href="#/review">Review now</a></div>';
  var cum=0, cur=now();
  Object.keys(COURSES).forEach(function(c){
    var us=units.filter(function(u){return u.course===c}); if(!us.length)return;
    var open_=us.some(function(u){return u===nxt}), nDone=us.filter(function(u){return unitStats(u).mastered}).length;
    h+='<details class="course" '+((open_||(!nxt&&c==="prereq"))?'open':'')+'><summary><b>'+COURSES[c]+'</b> <span class="mut">'+nDone+'/'+us.length+' mastered</span></summary>';
    us.forEach(function(u){var st=unitStats(u), rem=(u.hours||6)*(1-st.p); cum+=rem;
      var proj=cur+cum/hpw*7*DAY;
      h+='<div class="card"><div class="row"><div><a href="#/unit/'+u.id+'"><b>'+esc(u.title)+'</b></a> '
       +(u.weight?'<span class="pill">exam weight '+esc(u.weight)+'</span>':'')+(st.mastered?'<span class="pill ok">mastered</span>':'')+'</div>'
       +'<div class="mut">~'+(u.hours||6)+' h'+(st.mastered?'':' &middot; projected finish '+fmt(proj))+'</div></div>'
       +'<div class="bar" style="margin:8px 0"><i style="width:'+Math.round(st.p*100)+'%"></i></div>'
       +'<div class="mut">'+esc(u.blurb||"")+'</div></div>'});
    h+='</details>';
  });
  if(!units.length)h+='<p>No units loaded.</p>';
  $app.innerHTML=h;
  document.getElementById("logh").onclick=function(e){e.preventDefault();var h=e.target.parentNode;
    h.innerHTML='<input id="lhv" type="number" min="0" step="0.25" placeholder="hours" style="width:90px"> <button id="lhb">Add</button>';
    document.getElementById("lhb").onclick=function(){var v=parseFloat(document.getElementById("lhv").value);if(v>0){S.log.push({t:now(),h:v});save();home();math()}}};
}

/* ---------- unit ---------- */
function unitView(h){
  var u=byId[h[1]]; if(!u){$app.innerHTML="<p>Unknown unit.</p>";return}
  var tab=h[2]||"learn", st=unitStats(u); curCtx={key:"unit:"+u.id,title:u.title,context:{unit:u.title}};
  var tabs=[["learn","Learn ("+st.lDone+"/"+st.lN+")"],["examples","Worked examples"],["practice","Practice ("+st.qOk+"/"+st.qN+")"],["frq","FRQ ("+st.fDone+"/"+st.fN+")"]];
  var out='<p class="mut"><a href="#/">&larr; plan</a></p><h1>'+esc(u.title)+'</h1><div class="mut">'+esc(u.blurb||"")+'</div>';
  if(u.needs&&u.needs.length)out+='<p class="mut">Before this: '+u.needs.map(function(n){return byId[n]?'<a href="#/unit/'+n+'">'+esc(byId[n].title)+'</a>':esc(n)}).join(", ")+'</p>';
  out+='<div class="tabs">'+tabs.map(function(t){return '<a class="'+(t[0]===tab?"on":"")+'" href="#/unit/'+u.id+'/'+t[0]+'">'+t[1]+'</a>'}).join("")+'</div><div id="tabbody"></div>';
  $app.innerHTML=out; var B=document.getElementById("tabbody");
  if(tab==="learn")learnTab(u,B); else if(tab==="examples")exTab(u,B); else if(tab==="practice")practiceTab(u,B); else frqTab(u,B);
}
function learnTab(u,B){
  var h="";
  if(u.goals&&u.goals.length)h+='<div class="card"><b>By the end you can:</b><ul>'+u.goals.map(function(g){return"<li>"+g+"</li>"}).join("")+'</ul></div>';
  (u.lessons||[]).forEach(function(l){var k=u.id+":"+l.id;
    h+='<section class="card"><h2 style="margin-top:0">'+esc(l.title)+'</h2>'+l.html+vids(l.videos)+(T()?'<p class="tutor-ask"><button class="sec" data-ask="'+l.id+'">Ask the tutor about this section</button></p>':'')+'<label><input type="checkbox" data-k="'+k+'" '+(S.lessons[k]?"checked":"")+'> I understand this and could explain it</label></section>'});
  B.innerHTML=h||"<p>No lessons yet.</p>";
  B.querySelectorAll("button[data-ask]").forEach(function(b){b.onclick=function(){var l=u.lessons.filter(function(x){return x.id===b.dataset.ask})[0];
    PH_TUTOR.open({key:"unit:"+u.id+":"+l.id,title:u.title+" · "+l.title,freeMode:"chat",context:{unit:u.title,lesson:l.title,lessonText:tx(l.html)}})}});
  B.querySelectorAll("input[data-k]").forEach(function(c){c.onchange=function(){if(c.checked)S.lessons[c.dataset.k]=now();else delete S.lessons[c.dataset.k];save()}});
}
function vids(v){ if(!v||!v.length)return "";
  var deep=/ocw\.mit|oyc\.yale|videolectures|cosmolearning|opencw|Lewin|MIT 8\.0|8\.02x|Yale|Lec \d/i;
  function li(x){return '<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener">'+esc(x.title)+'</a> <span class="mut">'+esc(x.src||"")+(x.note?" &middot; "+esc(x.note):"")+'</span></li>'}
  var main=v.filter(function(x){return !deep.test(x.title+" "+x.src+" "+x.url)}), opt=v.filter(function(x){return deep.test(x.title+" "+x.src+" "+x.url)}), h="";
  if(main.length)h+='<div class="box key"><b>Watch (AP-focused)</b><ul style="margin:6px 0">'+main.map(li).join("")+'</ul></div>';
  if(opt.length)h+='<div class="box"><b>Optional: deeper intuition</b> <span class="mut">(university lectures; go beyond the AP, skip freely)</span><ul style="margin:6px 0">'+opt.map(li).join("")+'</ul></div>';
  return h }
function exTab(u,B){
  B.innerHTML=(u.examples||[]).map(function(e){return '<div class="card"><h3 style="margin-top:0">'+esc(e.title)+'</h3><div>'+e.problem+'</div><details><summary>Try it first, then show solution</summary>'+e.solution+'</details></div>'}).join("")||"<p>No examples yet.</p>";
}
function practiceTab(u,B){
  var items=(u.mcq||[]).map(function(q){return {u:u,q:q}});
  B.innerHTML='<p class="mut">Answer on paper first when you can. Wrong answers return in your Review queue.</p><div id="qs"></div>';
  quizList(items,document.getElementById("qs"),true);
}
function quizList(items,host,showAll){
  if(!items.length){host.innerHTML="<p>Nothing here yet.</p>";return}
  var i=0,score=0;
  function one(){
    if(i>=items.length){host.innerHTML='<div class="card"><b>Done: '+score+'/'+items.length+' correct.</b></div>';return}
    var it=items[i], q=it.q, order=shuffle(q.choices.map(function(_,k){return k}));
    host.innerHTML='<div class="card"><div class="mut">Question '+(i+1)+' of '+items.length+' &middot; '+esc(it.u.title)+'</div><div>'+q.q+'</div><div id="ch"></div><div class="tbar" id="tb"></div><div id="fb"></div></div>';
    var ch=host.querySelector("#ch"), tb=host.querySelector("#tb"), shown=order.map(function(k){return tx(q.choices[k])});
    function qctx(extra){var c={unit:it.u.title,question:tx(q.q),choices:shown,correctChoice:"ABCDE"[order.indexOf(q.a)]+") "+shown[order.indexOf(q.a)],reference:tx(q.why)};for(var k in extra)c[k]=extra[k];return c}
    var hintFirst=PH_TUTOR.enabled()&&(S.settings.tutor||{}).hintFirst!==false;
    if(T()){tb.innerHTML='<button class="sec" id="hb">Hint</button>';tb.querySelector("#hb").onclick=function(){
      PH_TUTOR.ask({key:"q:"+qkey(it.u,q),title:"Question "+(i+1)+" · "+it.u.title,mode:"hint",freeMode:hintFirst?"hint":"chat",context:qctx(),text:"I'm stuck on this question. Can I get a hint?"})}}
    order.forEach(function(k,pos){var b=document.createElement("button");b.className="choice sec";b.innerHTML="<b>"+"ABCDE"[pos]+".</b> "+q.choices[k];
      b.onclick=function(){
        var ok=k===q.a; if(ok)score++; recordQ(qkey(it.u,q),ok);
        ch.querySelectorAll("button").forEach(function(x,p){x.disabled=true;if(order[p]===q.a)x.classList.add("right")}); if(!ok)b.classList.add("wrong");
        if(T()){tb.innerHTML='<button class="sec" id="eb">Explain this</button>';tb.querySelector("#eb").onclick=function(){
          PH_TUTOR.ask({key:"q:"+qkey(it.u,q),title:"Question "+(i+1)+" · "+it.u.title,mode:"explain",freeMode:"chat",context:qctx({studentChoice:"ABCDE"[pos]+") "+shown[pos]}),text:ok?"I got it right. Can you explain why, and what to remember?":"I got this wrong. Can you explain why?"})}}
        host.querySelector("#fb").innerHTML='<div class="why"><b>'+(ok?"Correct.":"Not quite.")+'</b> '+q.why+'</div><button id="nx">'+(i+1<items.length?"Next":"Finish")+'</button>';
        math(host); host.querySelector("#nx").onclick=function(){i++;one();math(host)}};
      ch.appendChild(b)});
    math(host);
  }
  one();
}
function frqTab(u,B){
  B.innerHTML=(u.frq||[]).map(function(f,fi){var k=u.id+":"+f.id, rec=S.frq[k], max=f.pts.reduce(function(a,p){return a+p.p},0);
    return '<div class="card"><h3 style="margin-top:0">'+esc(f.title)+' <span class="pill">'+esc(f.type||"FRQ")+'</span><span class="pill">'+max+' pts</span>'+(rec?'<span class="pill ok">last: '+rec.score+'/'+max+'</span>':'')+'</h3>'
     +'<div>'+f.prompt+'</div><p class="mut">Do this on paper, like the real exam. Then reveal.</p>'+(T()?'<div class="tutor-ask"><textarea data-w="'+fi+'" placeholder="Optional: type or paste your work here to have the tutor check it against the rubric"></textarea><div class="tbar"><button class="sec" data-fh="'+fi+'">Hint</button><button class="sec" data-fc="'+fi+'">Check my work</button><span class="mut" data-fm="'+fi+'"></span></div></div>':'')+'<details><summary>Reveal solution and rubric</summary>'+f.solution
     +'<h3>Score yourself</h3>'+f.pts.map(function(p,pi){return '<label style="display:block"><input type="checkbox" data-f="'+fi+'" data-p="'+p.p+'"> ['+p.p+'] '+p.d+'</label>'}).join("")
     +'<p><button data-save="'+fi+'">Save score</button> <span class="mut" data-msg="'+fi+'"></span></p></details></div>'}).join("")||"<p>No FRQs yet.</p>";
  function fctx(f,w){return {unit:u.title,frqPrompt:tx(f.prompt),rubric:f.pts.map(function(p){return "["+p.p+"] "+tx(p.d)}).join("\n"),reference:tx(f.solution),studentWork:w||""}}
  B.querySelectorAll("button[data-fh]").forEach(function(b){b.onclick=function(){var f=u.frq[+b.dataset.fh];
    PH_TUTOR.ask({key:"f:"+u.id+":"+f.id,title:f.title,mode:"hint",freeMode:"chat",context:fctx(f,""),text:"I'm stuck on this free-response question. Can I get a hint?"})}});
  B.querySelectorAll("button[data-fc]").forEach(function(b){b.onclick=function(){var fi=+b.dataset.fc,f=u.frq[fi],w=B.querySelector('textarea[data-w="'+fi+'"]').value.trim();
    if(w.length<20){B.querySelector('[data-fm="'+fi+'"]').textContent="Write out your attempt first (a few lines at least).";return}
    B.querySelector('[data-fm="'+fi+'"]').textContent="";
    PH_TUTOR.ask({key:"f:"+u.id+":"+f.id,title:f.title,mode:"check",freeMode:"chat",context:fctx(f,w),text:"Please check my work against the rubric."})}});
  B.querySelectorAll("button[data-save]").forEach(function(b){b.onclick=function(){var fi=+b.dataset.save,f=u.frq[fi],sc=0,n=0;
    B.querySelectorAll('input[data-f="'+fi+'"]').forEach(function(c){if(c.checked)sc+=+c.dataset.p});
    var max=f.pts.reduce(function(a,p){return a+p.p},0); S.frq[u.id+":"+f.id]={score:sc,max:max,at:now()};save();
    B.querySelector('[data-msg="'+fi+'"]').textContent="Saved "+sc+"/"+max+(sc<max*0.7?" - redo this one in a week; also drill the lesson sections you missed.":"")}});
}

/* ---------- review / mixed / timed ---------- */
function review(){
  var d=dueList(); $app.innerHTML='<h1>Review queue</h1><p class="mut">Problems you missed, plus ones due for spaced repetition (1, 3, 7, 16, 35 days after correct answers).</p><div id="qs"></div>';
  quizList(shuffle(d).slice(0,15),document.getElementById("qs"));
}
function mixed(){
  var pool=allMcq().filter(function(x){var s=unitStats(x.u);return s.lDone>0||s.qTried>0});
  $app.innerHTML='<h1>Mixed quiz</h1><p class="mut">10 random problems from units you have started. Mixing topics is how you get ready for the real exam.</p><div id="qs"></div>';
  if(!pool.length){document.getElementById("qs").innerHTML="<p>Start a unit first.</p>";return}
  quizList(shuffle(pool).slice(0,10),document.getElementById("qs"));
}
function exam(){
  var n=PH_EXAM.mcqCount, mins=PH_EXAM.mcqMinutes;
  $app.innerHTML='<h1>Timed MCQ set</h1><p class="mut">Pace practice: about '+(mins/n).toFixed(1)+' min per question on the real exam. This set pulls up to '+n+' questions from all units; time scales to the number pulled.</p><div class="card"><label>Course <select id="c"><option value="mech">Mechanics</option><option value="em">E&amp;M</option><option value="both">Both</option></select></label> <button id="go">Start</button></div><div id="qs"></div>';
  document.getElementById("go").onclick=function(){
    var c=document.getElementById("c").value;
    var pool=allMcq().filter(function(x){return c==="both"?(x.u.course==="mech"||x.u.course==="em"):x.u.course===c});
    var set=shuffle(pool).slice(0,n); if(!set.length){document.getElementById("qs").innerHTML="<p>No questions yet.</p>";return}
    var secs=Math.round(set.length*mins*60/n), t0=now(), host=document.getElementById("qs");
    host.innerHTML='<div class="card"><b id="tm"></b></div><div id="inner"></div>';
    var iv=setInterval(function(){var r=secs-Math.round((now()-t0)/1000),t=document.getElementById("tm");if(!t){clearInterval(iv);return}t.textContent="Time left: "+Math.floor(Math.abs(r)/60)+":"+("0"+Math.abs(r)%60).slice(-2)+(r<0?" (over)":"")},500);
    quizList(set,document.getElementById("inner"));
  };
}

/* ---------- resources / settings ---------- */
function resources(){
  $app.innerHTML='<h1>Official materials</h1><p><b>Exam dates:</b> Mechanics '+PH_EXAM.dates.mech+', E&amp;M '+PH_EXAM.dates.em+'. The plan counts down to the earlier one.</p><p>Do real past FRQs on paper, then grade against the College Board scoring guidelines. Start doing these once you have finished the matching unit, and do full sets in the last weeks.</p><ul>'
   +PH_EXAM.links.map(function(l){return '<li><a href="'+l.url+'" target="_blank" rel="noopener">'+esc(l.label)+'</a></li>'}).join("")+'</ul>'
   +'<div class="card"><b>Exam facts used by this app</b> '+(PH_EXAM.verified?'':'<span class="pill warn">unverified</span>')+'<p class="mut">'+esc(PH_EXAM.note)+'</p><ul><li>MCQ: '+PH_EXAM.mcqCount+' in '+PH_EXAM.mcqMinutes+' min</li><li>FRQ: '+PH_EXAM.frqCount+' in '+PH_EXAM.frqMinutes+' min ('+PH_EXAM.frqTypes.join("; ")+')</li></ul><p class="mut">Older released FRQs may have a different structure. Check each year.</p></div>';
}
function settings(){
  $app.innerHTML='<h1>Settings</h1><div class="card"><p><label>Exam date <input type="date" id="d" value="'+esc(S.settings.examDate)+'"></label></p><p><label>Study hours per week <input type="number" id="h" min="1" max="40" value="'+S.settings.hpw+'"></label></p><button id="sv">Save</button></div>'
   +(window.PH_TUTOR?PH_TUTOR.settingsHtml():'')+'<div class="card"><b>Back up progress</b> (it only lives in this browser)<p><button id="ex" class="sec">Export</button> <button id="im" class="sec">Import</button> <button id="rs" class="sec">Reset all</button></p><textarea id="ta" placeholder="Export text appears here; paste here to import"></textarea><p id="msg" class="mut"></p></div>';
  if(window.PH_TUTOR)PH_TUTOR.bindSettings();
  document.getElementById("sv").onclick=function(){S.settings.examDate=document.getElementById("d").value||S.settings.examDate;S.settings.hpw=+document.getElementById("h").value||5;save();location.hash="#/"};
  document.getElementById("ex").onclick=function(){var c=JSON.parse(JSON.stringify(S));if(c.settings.tutor)delete c.settings.tutor.code;document.getElementById("ta").value=JSON.stringify(c)};
  document.getElementById("im").onclick=function(){try{var o=JSON.parse(document.getElementById("ta").value);mem=o;S=load();save();document.getElementById("msg").textContent="Imported."}catch(e){document.getElementById("msg").textContent="That text is not valid progress data."}};
  var armed=false;document.getElementById("rs").onclick=function(){var b=this;if(!armed){armed=true;b.textContent="Click again to erase everything";return}mem=blank();S=mem;save();location.hash="#/"};
}

/* ---------- boot ---------- */
window.PH_APP={units:units,validate:function(){var errs=[];units.forEach(function(u){
  (u.mcq||[]).forEach(function(q){if(typeof q.a!=="number"||!q.choices||q.a>=q.choices.length||!q.why)errs.push(u.id+":"+q.id+" bad mcq")});
  (u.lessons||[]).forEach(function(l){(l.videos||[]).forEach(function(x){if(!/^https:\/\//.test(x.url||"")||!x.title)errs.push(u.id+":"+l.id+" bad video")})});
  (u.frq||[]).forEach(function(f){if(!f.pts||!f.solution||!f.prompt)errs.push(u.id+":"+f.id+" bad frq")})});return errs}};
if(window.PH_TUTOR)PH_TUTOR.init({S:function(){return S},save:save,math:math,route:function(){return curCtx}});
route();
})();
