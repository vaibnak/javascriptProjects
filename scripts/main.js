var heading = document.querySelector('h1');
var btn = document.querySelector('button');

function setUserName(){
var name = prompt("So whats your new name gonna be");
localStorage.setItem('name', name);
heading.textContent =  name + "is cool";
}

btn.onclick = function(){
setUserName();
}

if(!localStorage.getItem('name')){
setUserName();
} else{
var name = localStorage.getItem('name');
heading.textContent =  name + "is cool";
}
var changeImage = document.querySelector('img');
changeImage.onclick = function(){
var Isrc = changeImage.getAttribute('src');
if(Isrc === 'images/firefox-icon.png'){
changeImage.setAttribute('src', 'images/starlord.jpg');
}else{
changeImage.setAttribute('src', 'images/firefox-icon.png');

}

}
