import '../css/om-oss.scss'

import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';

const pharmacySwiper = new Swiper('.oss-pharmacy__slider', {
  slidesPerView: 'auto',
  spaceBetween: 12,
  loop: true
});

function initHistorySwiper() {
  const screenWidth = window.innerWidth;
  const historySwiper = new Swiper('.oss-history__slider-main', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: screenWidth > 991 ? 120 : 80,
    loop: true,
    navigation: {
      nextEl: '.oss-history__slider-next',
      prevEl: '.oss-history__slider-prev',
    },
    on: {
      slideChange: updateYearDiv, // Add the event listener for slide change
    },
  });
}

// each slide content has data-attribute data-year that has the value of the year
// we then check the active slider year in h3 text element and compare that to the data-year attribute
// and based on that show / hide the slides
function updateYearDiv(){
  setTimeout(() => {
    const activeSlide = document.querySelector('.oss-history__slider .swiper-slide-active');
    const yearElement = activeSlide.querySelector('.oss-history__slide-year');
    const activeYear = yearElement.textContent.trim();

    // Select all divs with data-year attribute
    const yearDivs = document.querySelectorAll('[data-year]');

    yearDivs.forEach(div => {
      // Check if the div's data-year matches the active slide's year
      if (div.getAttribute('data-year') === activeYear) {
        // Show the div if it matches
        div.style.opacity = '1';
        div.style.display = 'grid';
      } else {
        // Hide the div if it doesn't match
        div.style.opacity = '0';
        div.style.display = 'none';
      }
    });
  }, "200");
}

// Initialize Swiper on load
initHistorySwiper();

// Re-initialize Swiper on resize
window.addEventListener('resize', initHistorySwiper);
