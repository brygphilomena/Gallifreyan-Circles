var sright = 0;
setInterval(function(){
      sright+=1;
     $("#secondright").rotate(sright);
},35);
var bl = 0;
setInterval(function(){
      bl-=1;
     $("#bottomleft").rotate(bl);
},30);
var rig = 0;
setInterval(function(){
      rig-=1;
     $("#right").rotate(rig);
},70);
var ci = 0;
setInterval(function(){
      ci-=1;
     $("#centerimage").rotate(ci);
},35);