let slideContainer = document.querySelector("#container");
let slide = document.querySelector('.slides')
let slides = document.querySelectorAll(".slide");
let prev = document.querySelector('#prev-btn');
let next = document.querySelector('#next-btn');

// set index and transition delay
let index = 0;
let transitionDelay = 2000;
let slideshowInterval;

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

Slideshow(index);

// show a specific slide
function Slideshow(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
}

function startSlideshowInterval() {
  slideshowInterval = setInterval(() => {
    Slideshow(index);
    moveToNextSlide();
  }, transitionDelay);
}

function pauseSlideshow(){
  Slideshow(index);
  clearInterval(slideshowInterval);
}

slides.forEach((slide)=>{
  slide.addEventListener("mouseover", pauseSlideshow);
  slide.addEventListener("mouseleave", startSlideshowInterval);
})

function moveToNextSlide(){
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    Slideshow(index);
  }

function moveToPrevSlide(){
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  Slideshow(index);
}

next.addEventListener("click", () => {
  pauseSlideshow();
  moveToNextSlide();
})

prev.addEventListener("click", () => {
  pauseSlideshow();
  moveToPrevSlide();
})

startSlideshowInterval();