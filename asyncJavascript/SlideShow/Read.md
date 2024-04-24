### Silde Transition

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

1. for (let slide of slides):
   This line starts a loop that iterates through a collection of items called slides.

2. slide.style.transition = ...:
   This line sets a CSS style property for the current slide (image) inside the loop.
   The property being set is transition. This property tells the browser how to animate changes to other CSS properties over time.

3. all ${transitionDelay/1000}s linear:
This part defines the value for the transition property:
all: This keyword tells the browser to apply the transition effect to all CSS properties that might change during the animation (like opacity for fading or position for sliding).
${transitionDelay/1000}s: This is a dynamic value calculated using a variable named transitionDelay. It's likely defined elsewhere in the code and represents the desired animation duration in milliseconds (thousandths of a second). Here, it's divided by 1000 to convert it to seconds (s).
   linear: This keyword specifies the type of animation. Here, linear means the animation will occur at a constant speed throughout its duration. There are other options for more complex animation curves.

### Alternative Approach

@------------------------------------
// Define global variables
let index = 0;
const transitionDelay = 2000;
const slideContainer = document.querySelector(".slideshow");
const slides = Array.from(slideContainer.querySelectorAll(".slide"));

// Add initial CSS class to the first slide
slides[index].classList.add("active");

// Function to transition to the next slide
function transitionSlide() {
// Remove active class from current slide
slides[index].classList.remove("active");

// Update index for the next slide
index = (index + 1) % slides.length;

// Add active class to the next slide
slides[index].classList.add("active");
}

// Transition to next slide every x seconds
setInterval(transitionSlide, transitionDelay);

@-------------------------------------
// Define global variables
let index = 0;
const transitionDelay = 2000;
const slideContainer = document.querySelector(".slideshow");
const slides = Array.from(slideContainer.querySelectorAll(".slide")); // Convert NodeList to Array

// Set initial slide state
slides.forEach((slide, i) => {
slide.classList.toggle("active", i === index); // Set the first slide as active, others inactive
});

// Function to transition to the next slide
function transitionToNextSlide() {
const currentSlide = slides[index];
const nextIndex = (index + 1) % slides.length;
const nextSlide = slides[nextIndex];

currentSlide.classList.remove("active");
nextSlide.classList.add("active");

index = nextIndex;

setTimeout(transitionToNextSlide, transitionDelay);
}

// Start transitioning to the next slide
setTimeout(transitionToNextSlide, transitionDelay);
