import Swiper from 'swiper';


//article
var swiper = new Swiper('.swiper-article', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination-article',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});
