// Declaring variables
var i = 0;
var txt = 'Willson Wang';
var speed = 170;

// Defining function
function typeEffect() {
    setTimeout(typeEffect, speed);
    if (i < txt.length) {
        document.getElementById("animatedName").innerHTML += txt.charAt(i);
        i++;
    }
}

// Function call
typeEffect();
