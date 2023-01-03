const swiper = document.querySelector('.swiper')
const clickMenu = document.querySelector('.nav a')

const swiperOperation = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 25,
  width: 350,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    navigationDisabledClass: '.swiper-navigation-disabled'
  }
})
