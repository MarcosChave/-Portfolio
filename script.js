const projects = document.querySelectorAll('.swiper')

const swiperProject = new Swiper('.projects', {
  speed: 400,
  spaceBetween: 40,
  width: 350,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    navigationDisabledClass: '.swiper-navigation-disabled'
  }
})

const swiperCursos = new Swiper('.boxCursos', {
  speed: 400,
  spaceBetween: 25,
  direction: 'vertical',
  height: 300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    direction: 'vertical'
  }
})
console.log(swiperCursos)
