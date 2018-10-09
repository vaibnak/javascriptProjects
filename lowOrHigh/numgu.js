var num = Math.floor(Math.random()*100)+1;
var sub = document.querySelector('button');
var hint = document.querySelector('.lo_or_hi');
var prevans = document.querySelector('.prevguess');
;
function tooHigh(){

}

function tooLow(){

}

function resetbtn(){
var bt = document.querySelector("button");
var guess = document.querySelector('.inp')
bt.disabled = false;
guess.disabled = false;

var allp = document.querySelectorAll("p");
console.log(allp.length);
for( var i = 0; i < allp.length; i++){
  allp[i].textContent = " ";
}

var toerase = document.querySelector(".resetting");
toerase.parentNode.removeChild(toerase);



num = Math.floor(Math.random()*100)+1;



}

function pcreation(){
var guess = document.querySelector('.inp')
var cel = document.createElement("p");
cel.textContent = guess.value;
console.log(num);
if(guess.value > num){
var h = document.createElement("p");
h.textContent = "too high";
document.body.appendChild(h);
}else if(guess.value < num){
var l = document.createElement("p");
l.textContent = "too low";
document.body.appendChild(l);
}else{
var rep = document.createElement("p");

rep.textContent = "congratulations!!! correct answer";
document.body.appendChild(rep);
var bt = document.querySelector("button");
bt.disabled = true;
guess.disabled = true;
var reset = document.createElement("BUTTON");
reset.className = "resetting";
reset.textContent = "click here to play again";
document.body.appendChild(reset);
reset.addEventListener("click", resetbtn);
}
document.body.appendChild(cel);
}






