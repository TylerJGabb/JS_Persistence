var integers = [];
var i = 0;


var newButton = document.createElement("button");
newButton.id = 'alertIntegers';
newButton.innerHTML = "Alert Integers";
document.body.appendChild(newButton);

document.getElementById('alertIntegers').addEventListener('click',function(){
  alert(integers.toString());
});

var par = document.createElement("p");
par.innerHTML = "This website also explores using classes defined in external JS files<br> other than those in "+
"main.js, and using them there in main."

document.body.appendChild(par);


document.getElementById('addInteger').addEventListener('click',function(){
  integers.push(i);
  i = i + 1;
});


var butt = document.createElement("button")
butt.id = "externalTest";
butt.innerHTML = "Press to try using externally defined class";
butt.addEventListener('click',function(){
  try{
    var p = new MyPoint(1,2);
    alert('Created MyPoint: ' + p.toString());
  }
  catch(err){
    alert('failed to create MyPoint' + '\n' + err.toString());
  }
})

document.body.appendChild(butt);


