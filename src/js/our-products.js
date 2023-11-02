var swiper = new Swiper('.products-swiper', {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  loop: true,
  loopedSlides: 4,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 1400,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.products-swiper-pagination',
    clickable: true
  },
});