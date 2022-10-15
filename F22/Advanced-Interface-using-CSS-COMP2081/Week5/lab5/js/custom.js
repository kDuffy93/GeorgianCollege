// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
const carouselCars = document.getElementById("carousel-cars");
const carouselCaption = document.querySelectorAll("figcaption");

carouselCars.addEventListener('slide.bs.carousel', event => {
    // do something...
    carouselCars.classList.add("zoomit");
});
carouselCars.addEventListener('slid.bs.carousel', event => {
    // do something...
    carouselCars.classList.remove("zoomit");
});

//LAB STEP 5
var carousel = new bootstrap.Carousel(carouselCars, {
    keyboard: false,
});




// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins