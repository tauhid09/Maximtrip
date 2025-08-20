
const texts = [
'Search "kashmir Group tour packages "',
    'Search "Kashmir honeymoon packages"',
    'Search "kashmir Family Tour Packages"',
    'Search "Leh Ladakh Tour packages"',
    'Search "kashmir Tour Packages"'
];


const input = document.getElementById("animatedInput");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  let currentText = texts[textIndex].substring(0, charIndex);


  input.setAttribute("placeholder", currentText + "|");


  if (!deleting && charIndex < texts[textIndex].length) {
    charIndex++;
    setTimeout(typeEffect, 120);


  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);


  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1500); 
    } else {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 200);
    }
  }
}


typeEffect();