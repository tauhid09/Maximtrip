// Sentences for placeholder
const texts = [
  'Search "Kashmir Group Tour Packages"',
  'Search "Kashmir Tour Packages"',
  'Search "Kashmir Honeymoon Packages"',
  'Search "Kashmir Family Tour Packages"',
  'Search "Leh Ladakh Tour Packages"'
];

// Input element
const input = document.getElementById("animatedInput");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function getFixedPart(sentence, prevSentence) {
  let fixed = 'Search ';

  // Agar current aur previous dono Kashmir hain → Kashmir ko fix rakho
  if (sentence.toLowerCase().includes("kashmir") && prevSentence?.toLowerCase().includes("kashmir")) {
    fixed = 'Search "Kashmir ';
  }

  // Ladakh wale case me sirf Search fix rahega
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
    // Typing phase
    currentText = fixedPart + variablePart.substring(0, charIndex);
    input.setAttribute("placeholder", currentText + "|");

    if (charIndex < variablePart.length) {
      charIndex++;
      setTimeout(typeEffect, 20);
    } else {
      // wait before deleting
      setTimeout(() => {
        deleting = true;
        typeEffect();
      }, 1500);
    }

  } else {
    // Deleting phase
    currentText = fixedPart + variablePart.substring(0, charIndex);
    input.setAttribute("placeholder", currentText + "|");

    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 20);
    } else {
      // move to next sentence
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 20);
    }
  }
}

typeEffect();
