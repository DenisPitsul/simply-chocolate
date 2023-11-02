var swiper = new Swiper('.swiper-chocolate-is-loved', {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 36,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 36,
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
      el: '.swiper-chocolate-is-loved-pagination',
      clickable: true
    },
  });