
var names = ["willy the goblin", "the big daddy", "father christmas"]
var places = [
"the soup kitchen",
"Disneyland",
"the White House"]

var actions = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]
function choseParticular(arr){
var choosenPart = arr[Math.floor(Math.random()*arr.length)]
return choosenPart;

}


var string = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:,they stared in horror for a few moments, then :insertz: Bob saw the whole thing, but was not surprised:insertx: weighs 300 pounds, and it was a hot day.";

var inp = document.getElementById('customname');

function display(){
var replacement1;
if(inp.value != null){
  replacement1 = inp.value;
}else {
  replacement1 =  choseParticular(names);
}

var pos = document.querySelector(".story");
pos.style.visibility = 'visible';

var replacement2 = choseParticular(actions);
var replacement3 = choseParticular(places);
var updatedstring  = string.replace(':insertx:', replacement1);
var updatedstring1 = updatedstring.replace(':inserty:', replacement3);
var updatedstring2 = updatedstring1.replace(':insertz:', replacement2);
var updatedstring3 = updatedstring2.replace(':insertx:', replacement1);

var updatedstring4;
var updatedstring5 = updatedstring3;

if(document.getElementById('uk').checked){
   updatedstring4 = updatedstring3.replace('fahrenheit', 'centigrade');
   updatedstring5 = updatedstring4.replace('pounds', 'stone');
}

pos.textContent = updatedstring5;

}


  var btn = document.querySelector(".randomize");
  btn.addEventListener('click',display )
