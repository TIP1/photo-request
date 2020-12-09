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
  freeMode: true,
  navigation: {
    nextEl: '.last-slider .swiper-button-next',
    prevEl: '.last-slider .swiper-button-prev',
  },
});

$(window).on('load resize', function() {
  if($(window).width() < 751) {
    $('#shuldbechange').attr('src', './img/cards/11.png');
  } 
  if($(window).width() > 750) {
    $('#shuldbechange').attr('src', './img/cards/4.png');
  }
})