
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


//Hero Section
let currentIndex = 0;
const slides = document.querySelectorAll(".slide-image");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}


showSlide(currentIndex);

setInterval(nextSlide, 5000);


document.querySelector("#btn-2").addEventListener("click", nextSlide);
document.querySelector("#btn-1").addEventListener("click", prevSlide);


//Holiday Category
const cardContainer = document.getElementById("category-card");
const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");

const cardWidth = document.querySelector(".card").offsetWidth + 20;
let autoScroll;


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  const clone = card.cloneNode(true);
  cardContainer.appendChild(clone);
});


function scrollRight() {
  cardContainer.scrollBy({ left: cardWidth, behavior: "smooth" });


  if (cardContainer.scrollLeft >= cardContainer.scrollWidth / 2) {
    cardContainer.scrollTo({ left: 0, behavior: "instant" });
  }
}


function scrollLeft() {
  cardContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });

  if (cardContainer.scrollLeft <= 0) {
    cardContainer.scrollTo({ left: cardContainer.scrollWidth / 2, behavior: "instant" });
  }
}


rightBtn.addEventListener("click", () => {
  scrollRight();
  resetAutoScroll();
});

leftBtn.addEventListener("click", () => {
  scrollLeft();
  resetAutoScroll();
});


function startAutoScroll() {
  autoScroll = setInterval(scrollRight, 5000);
}

function resetAutoScroll() {
  clearInterval(autoScroll);
  startAutoScroll();
}
startAutoScroll();


//Holiday Package


