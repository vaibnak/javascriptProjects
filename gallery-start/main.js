var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 5; i++){

  var newImage = document.createElement('img');
  newImage.setAttribute('src', './images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);

}

function changeImage(e){
displayedImage.setAttribute('src',e.target.src );
console.log(e.target.src);
}

function changeOverlay(e){
if(btn.getAttribute('class') === 'dark'){
btn.setAttribute('class', 'lighten');
btn.textContent = "lighten";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}else{

btn.setAttribute('class', 'dark');
btn.textContent = "darken";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";


}




}

thumbBar.addEventListener('click', changeImage);
btn.addEventListener('click', changeOverlay);

/* Wiring up the Darken/Lighten button */

