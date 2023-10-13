let overflowTypesPx = 170
let types = document.querySelector('.types__swiper')
let typesReadMore = document.querySelector('.types__read-more')

let overflowGalleryPx = 100
let brands = document.querySelector('.brands__swiper')
let brandsReadMore = document.querySelector('.gallery__read-more')

let text = document.querySelector('.contents__text')
let paragraphs = text.querySelectorAll('.text__p')
let spans = paragraphs[1].querySelectorAll('span')
let readMoreTextButton = text.querySelector('.text__read-more')

function readMoreListener(readMore, overflow, swiperBlock) {
  swiperBlock.style.height = overflow + 'px'
  readMore.addEventListener('click', function () {
    if (readMore.querySelector('span').textContent == 'Скрыть') {
      swiperBlock.style.height = overflow + 'px'
      readMore.querySelector('img').src = '././img/read-more-symbol.svg'
      readMore.querySelector('img').alt = 'Показать все'
      readMore.querySelector('span').textContent = 'Показать все'
      return
    }
    swiperBlock.style.height = 'initial'
    readMore.querySelector('img').src = '././img/read-less-symbol.svg'
    readMore.querySelector('img').alt = 'Скрыть'
    readMore.querySelector('span').textContent = 'Скрыть'
  })
}

function showMoreText(btn) {
  btn.addEventListener('click', function () {
    if (btn.querySelector('span').textContent === 'Скрыть') {
      paragraphs[1].classList.add('p--mobile')
      spans[1].classList.add('p--tablet')
      spans[2].classList.add('p--pc')
      btn.querySelector('img').src = '././img/read-more-symbol.svg'
      btn.querySelector('img').alt = 'Читать далее'
      btn.querySelector('span').textContent = 'Читать далее'
      return
    } else {
      paragraphs[1].classList.remove('p--mobile')
      spans[1].classList.remove('p--tablet')
      spans[2].classList.remove('p--pc')
      btn.querySelector('img').src = '././img/read-less-symbol.svg'
      btn.querySelector('img').alt = 'Скрыть'
      btn.querySelector('span').textContent = 'Скрыть'
      return
    }
  })
}

let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')
let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)')

showMoreText(readMoreTextButton)
readMoreListener(typesReadMore, overflowTypesPx, types)
readMoreListener(brandsReadMore, overflowGalleryPx, brands)

/*
window.addEventListener('load', function () {
  readMoreListener(typesReadMore, overflowTypesPx, types)
  readMoreListener(brandsReadMore, overflowGalleryPx, brands)
  showMoreText(readMoreTextButton)
})

window.addEventListener('resize', function () {
  showMoreText(readMoreTextButton)
  readMoreListener(typesReadMore, overflowTypesPx, types)
  readMoreListener(brandsReadMore, overflowGalleryPx, brands)
})*/
