
//Search Animation
const texts = [
  'Search "Kashmir Family Tour Packages"',
  'Search "Kashmir Tour Packages"',
  'Search "Kashmir Honeymoon Packages"',
  'Search "Kashmir Group Tour Packages"',
  'Search "Leh Ladakh Tour Packages"'
];


const input = document.getElementById("animatedInput");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function getFixedPart(sentence, prevSentence) {
  let fixed = 'Search ';


  if (sentence.toLowerCase().includes("kashmir") && prevSentence?.toLowerCase().includes("kashmir")) {
    fixed = 'Search "Kashmir ';
  }


  if (sentence.toLowerCase().includes("ladakh")) {
    fixed = 'Search ';
  }

  return fixed;
}

function typeEffect() {
  const fullText = texts[textIndex];
  const prevText = texts[(textIndex - 1 + texts.length) % texts.length];
  const fixedPart = getFixedPart(fullText, prevText);
  const variablePart = fullText.replace(fixedPart, "");

  let currentText;

  if (!deleting) {

    currentText = fixedPart + variablePart.substring(0, charIndex);
    input.setAttribute("placeholder", currentText + "|");

    if (charIndex < variablePart.length) {
      charIndex++;
      setTimeout(typeEffect, 45);
    } else {

      setTimeout(() => {
        deleting = true;
        typeEffect();
      }, 50);
    }

  } else {

    currentText = fixedPart + variablePart.substring(0, charIndex);
    input.setAttribute("placeholder", currentText + "|");

    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 45);
    } else {

      deleting = false;
      textIndex = (textIndex + 1) % texts.length;

      setTimeout(typeEffect, 200);



    }
  }
}

typeEffect();

//Button-1
document.getElementById("btn-1").onclick = function(){
  document.getElementById("btn-1").style.color = "#CE3C3D"
  document.getElementById("btn-2").style.color = "#6A7282"
  document.getElementById("btn-3").style.color = "#6A7282"
  document.getElementById("btn-4").style.color = "#6A7282"
  document.getElementById("btn-5").style.color = "#6A7282"

  document.getElementById("btn-1").style.borderBottom = "3.5px solid #CE3C3D"
  document.getElementById("btn-2").style.borderBottom = "none"
  document.getElementById("btn-3").style.borderBottom = "none"
  document.getElementById("btn-4").style.borderBottom = "none"
  document.getElementById("btn-5").style.borderBottom = "none"

  document.getElementById("desc1").style.zIndex = "2"
  document.getElementById("desc2").style.zIndex = "1"
  document.getElementById("desc3").style.zIndex = "1"
  document.getElementById("desc4").style.zIndex = "1"
  document.getElementById("desc5").style.zIndex = "1"
}
//Button-2
document.getElementById("btn-2").onclick = function(){
  document.getElementById("btn-1").style.color = "#6A7282"
  document.getElementById("btn-2").style.color = "#CE3C3D"
  document.getElementById("btn-3").style.color = "#6A7282"
  document.getElementById("btn-4").style.color = "#6A7282"
  document.getElementById("btn-5").style.color = "#6A7282"

  document.getElementById("btn-1").style.borderBottom = "none"
  document.getElementById("btn-2").style.borderBottom = "3.5px solid #CE3C3D"
  document.getElementById("btn-3").style.borderBottom = "none"
  document.getElementById("btn-4").style.borderBottom = "none"
  document.getElementById("btn-5").style.borderBottom = "none"

  document.getElementById("desc1").style.zIndex = "1"
  document.getElementById("desc2").style.zIndex = "2"
  document.getElementById("desc3").style.zIndex = "1"
  document.getElementById("desc4").style.zIndex = "1"
  document.getElementById("desc5").style.zIndex = "1"

}

document.getElementById("btn-3").onclick = function(){
  document.getElementById("btn-1").style.color = "#6A7282"
  document.getElementById("btn-2").style.color = "#6A7282"
  document.getElementById("btn-3").style.color = "#CE3C3D"
  document.getElementById("btn-4").style.color = "#6A7282"
  document.getElementById("btn-5").style.color = "#6A7282"

  document.getElementById("btn-1").style.borderBottom = "none"
  document.getElementById("btn-2").style.borderBottom = "none"
  document.getElementById("btn-3").style.borderBottom = "3.5px solid #CE3C3D"
  document.getElementById("btn-4").style.borderBottom = "none"
  document.getElementById("btn-5").style.borderBottom = "none"

  document.getElementById("desc1").style.zIndex = "1"
  document.getElementById("desc2").style.zIndex = "1"
  document.getElementById("desc3").style.zIndex = "2"
  document.getElementById("desc4").style.zIndex = "1"
  document.getElementById("desc5").style.zIndex = "1"

}

document.getElementById("btn-4").onclick = function(){
  document.getElementById("btn-1").style.color = "#6A7282"
  document.getElementById("btn-2").style.color = "#6A7282"
  document.getElementById("btn-3").style.color = "#6A7282"
  document.getElementById("btn-4").style.color = "#CE3C3D"
  document.getElementById("btn-5").style.color = "#6A7282"

  document.getElementById("btn-1").style.borderBottom = "none"
  document.getElementById("btn-2").style.borderBottom = "none"
  document.getElementById("btn-3").style.borderBottom = "none"
  document.getElementById("btn-4").style.borderBottom = "3.5px solid #CE3C3D"
  document.getElementById("btn-5").style.borderBottom = "none"

  document.getElementById("desc1").style.zIndex = "1"
  document.getElementById("desc2").style.zIndex = "1"
  document.getElementById("desc3").style.zIndex = "1"
  document.getElementById("desc4").style.zIndex = "2"
  document.getElementById("desc5").style.zIndex = "1"
}

document.getElementById("btn-5").onclick = function(){
  document.getElementById("btn-1").style.color = "#6A7282"
  document.getElementById("btn-2").style.color = "#6A7282"
  document.getElementById("btn-3").style.color = "#6A7282"
  document.getElementById("btn-4").style.color = "#6A7282"
  document.getElementById("btn-5").style.color = "#CE3C3D"

  document.getElementById("btn-1").style.borderBottom = "none"
  document.getElementById("btn-2").style.borderBottom = "none"
  document.getElementById("btn-3").style.borderBottom = "none"
  document.getElementById("btn-4").style.borderBottom = "none"
  document.getElementById("btn-5").style.borderBottom = "3.5px solid #CE3C3D"

    document.getElementById("desc1").style.zIndex = "1"
  document.getElementById("desc2").style.zIndex = "1"
  document.getElementById("desc3").style.zIndex = "1"
  document.getElementById("desc4").style.zIndex = "1"
  document.getElementById("desc5").style.zIndex = "2"

}