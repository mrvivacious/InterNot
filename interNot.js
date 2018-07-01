var htmlToAdd = '<!DOCTYPE html><html><body><p align="center">Go outside, read a book, learn to cook, sleep, call your friends, talk to your family...stay off the internet.</p><br><p align="center"><em>InterNot!</em></p></body></html>';

document.removeChild(document.documentElement);

// window.location.href="chrome-extension://jejedjlleijljkmbbjhampffhlcddclc/interNot.html";

//var parent = document.createElement('div');
//parent.innerHTML = htmlToAdd;
//document.parentNode.insertAfter(parent, document);

//console.log('parent: + ' + parent.textContent);

// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
// doesnt work
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();
