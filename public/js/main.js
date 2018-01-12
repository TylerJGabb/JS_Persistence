var integers = [];
var i = 0;


var newButton = document.createElement("button");
newButton.id = 'alertIntegers';
newButton.innerHTML = "Alert Integers";
document.body.appendChild(newButton);

document.getElementById('alertIntegers').addEventListener('click',function(){
  var str = "";
  for(var i in integers){
    str += i.toString() + " ";
  }
  alert(str);
});


document.getElementById('addInteger').addEventListener('click',function(){
  integers.push(i);
  i = i + 1;
});

try{
  var p = new MyPoint(1,2);
  alert('Created MyPoint: ' + p.toString());
}
catch(err){
  alert('failed to create MyPoint' + '\n' + err.toString());
}
