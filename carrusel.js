document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");

    let counter = 1;
    const slideWidth = images[0].clientWidth;

    // Event listener para la flecha derecha
    document.querySelector(".next").addEventListener("click", function() {
        if (counter >= images.length - 1) return;
        carouselImages.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselImages.style.transform = `translateX(${-slideWidth * counter}px)`;
    });

    // Event listener para la flecha izquierda
    document.querySelector(".prev").addEventListener("click", function() {
        if (counter <= 0) return;
        carouselImages.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselImages.style.transform = `translateX(${-slideWidth * counter}px)`;
    });
});