// Add one <script> per content file here (loaded in this order = course order is set by `order` in each unit).
(function(){
  var files=["prereq1","prereq2","prereq3","prereq4","prereq5","m1","m2","m3","m4","m5","m6","m7","e1","e2","e3","e4","e5","f1"];
  files.forEach(function(f){ document.write('<script src="content/'+f+'.js"><\/script>'); });
})();
