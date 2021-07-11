function animateIcon() {
  const hamIcon = document.querySelector("#nav-icon2");
  hamIcon.classList.toggle("open")
}

const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  if (overlay.style.width === "50%") {
    overlay.style.width = "0%";
  } else {
    overlay.style.width = "50%";
  }
}); 

const sliderContainer = document.querySelector("header");
const sliderBtnLeft = document.querySelector(".slider--btn-left");
const sliderBtnRight = document.querySelector(".slider--btn-right");
const sliderHeading = document.querySelector(".slider--heading");
const sliderHeadingFour = document.querySelector(".slider--heading-four");


const sliderImage = [
  {
    src: "assets/images/dnevni-boravak.png",
    heading: "Ez Bro",
    headingFour: "Lorem ipsum dolorem ups andse",
  },
  {
    src: "assets/images/buildings.png",
    heading: "You are my son",
    headingFour:
      "Lorem ipsum dolorem ups andse",
  },
  {
    src: "assets/images/kuhinja.png",
    heading: "Manas buildings",
    headingFour: "We create minecraft buldings",
  }
];

let slideCounter = 0;

const startSlider = () => {
  sliderContainer.style.backgroundImage =
   
  `url(${sliderImage[0].src})`;
  sliderHeading.innerHTML = sliderImage[0].heading;
  sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
};

sliderBtnRight.addEventListener("click", () => {
    if(slideCounter === sliderContainer.length - 1) {
        sliderContainer.style.backgroundImage = `
        url(${slierImage[0].src})`;
        sliderHeading.innerHTML = sliderImage[0].heading;
        sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
        slideCounter = -1;

        sliderContainer.classList.add("fadeIn");
        setTimeout(() => {
            sliderContainer.classList.remove("fadeIn")
        }, 1000)
    }
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[slideCounter + 1].src})`;
    sliderHeading.innerHTML = sliderImage[slideCounter + 1].heading;
    sliderHeadingFour.innerHTML = sliderImage[slideCounter + 1].headingFour;
    slideCounter++;
    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn");
        sliderHeading.classList.remove("fadeIn")
    }, 1000) 
});

sliderBtnLeft.addEventListener("click", () => {
    if (slideCounter === sliderContainer.length) {
        sliderContainer.style.backgroundImage = `
        url(${slierImage[-1].src})`;
        sliderHeading.innerHTML = sliderImage[0].heading;
        sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
        slideCounter = 0;

        sliderContainer.classList.add("fadeIn");
        setTimeout(() => {
            sliderContainer.classList.remove("fadeIn")
        }, 1000)
    }
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[slideCounter - 1].src})`;
    sliderHeading.innerHTML = sliderImage[slideCounter - 1].heading;
    sliderHeadingFour.innerHTML = sliderImage[slideCounter - 1].headingFour;
    slideCounter--;
    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn");
    }, 1000) 
})

startSlider();


var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

