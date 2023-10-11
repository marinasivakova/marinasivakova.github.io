import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swiper = Swiper
let init = false

function swiperInit() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)')
  let desktop = window.matchMedia('(min-width: 1025px)')

  if (mobile.matches) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else if (tablet.matches && init == true) {
    swiper.destroy()
    init = false
  } else if (desktop.matches && init == true) {
    swiper.destroy()
    init = false
  }
}

window.addEventListener('load', function () {
  swiperInit()
})

window.addEventListener('resize', function () {
  swiperInit()
})
