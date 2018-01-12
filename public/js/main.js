var integers = [];
var i = 0;

var newDiv = document.createElement("div");
newDiv.className = "newDiv";
var newContent = document.createTextNode("Integers will appear here soon");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

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
