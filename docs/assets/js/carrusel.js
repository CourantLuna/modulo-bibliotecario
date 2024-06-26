 // Wait for the document to load
 document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselSlider = document.getElementById('carousel-slider');
    
    // Calculate the maximum scroll position
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    
    // Add event listener to update scroll position based on slider value
    carouselSlider.addEventListener('input', function () {
      const sliderValue = carouselSlider.value;
      carousel.scrollLeft = (sliderValue / 100) * maxScrollLeft;
    });
    
    // Optional: Update slider position when user scrolls manually
    carousel.addEventListener('scroll', function () {
      const scrollPosition = carousel.scrollLeft;
      carouselSlider.value = (scrollPosition / maxScrollLeft) * 100;
    });
  });