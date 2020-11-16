var swiperHead = new Swiper('.header .swiper-container', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.header .swiper-button-next',
      prevEl: '.header .swiper-button-prev',
    },
  });

var swiperSecond = new Swiper('.second-slider .swiper-container', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.second-slider .swiper-button-next',
    prevEl: '.second-slider .swiper-button-prev',
  },
});

var swiperLast = new Swiper('.last-slider .swiper-container', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.last-slider .swiper-button-next',
    prevEl: '.last-slider .swiper-button-prev',
  },
});