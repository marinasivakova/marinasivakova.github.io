/** Variables */
let swiper = Swiper;
let init = false;
let readMore = document.querySelectorAll('.gallery__read-more');
let gallery = document.querySelectorAll(".read-more,.brand");
let overflow = document.querySelector('.swiper');
let text = readMore[0].querySelector('.read-more__text');
let pressed = false;

function swiperInit() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

  if (mobile.matches) {
      overflow.style.height = "80px";
      if (!readMore[0].classList.contains('read-more--hidden')) {
          readMore[0].classList.add('read-more--hidden');
      }
      if (!init) {
          init = true;
          swiper = new Swiper(".swiper", {
              slidesPerView: "auto",
              spaceBetween: 16,
              loop: true,
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
              },
          });
      }
  }

  else if (tablet.matches && init == true) {
      swiper.destroy();
      init = false;
  }
  else if (desktop.matches && init == true) {
      swiper.destroy();
      init = false;
  }

  if (tablet.matches || desktop.matches) {
      if (readMore[0].classList.contains('read-more--hidden')) {
          readMore[0].classList.remove('read-more--hidden');
      }
  }
}

window.addEventListener('load', function () {
  swiperInit();
});

window.addEventListener('resize', function () {
  swiperInit();
});

readMore[0].addEventListener('click', function () {
  if (pressed) {
      overflow.style.overflow = "hidden";
      overflow.style.height = "176px";
      text.textContent = "Показать все";
      document.querySelector('.read-more__symbol').src = 'img/read-more-symbol.svg';
      pressed = false;
      return;
    }
  document.querySelector('.read-more__symbol').src = 'img/brands/read-less.svg';
  overflow.style.overflow = "visible";
  overflow.style.height = "initial";
  text.textContent = "Скрыть";
  pressed = true;
});
