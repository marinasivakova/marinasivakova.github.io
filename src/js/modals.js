function modal(openButton, closeButton, block, mainPage, queryTag) {
  block.style.transition = 'display 1s ease-in-out'
  mainPage.style.transition = 'opacity 1s ease-in-out'

  if (NodeList.prototype.isPrototypeOf(openButton)) {
    for (let i = 0; i < openButton.length; i++) {
      openButton[i].addEventListener('click', function () {
        block.classList.remove('modal--hidden')
        mainPage.style.opacity = 0.1
        block.style.height = mainPage.scrollHeight + 'px'
        closeByClick(block, mainPage, queryTag)
      })
    }
    closeButton.addEventListener('click', function () {
      mainPage.style.opacity = 1
      block.classList.add('modal--hidden')
    })
  } else {
    openButton.addEventListener('click', function () {
      block.classList.remove('side-menu--hidden')
      mainPage.style.opacity = 0.1
      block.style.height = mainPage.scrollHeight + 'px'
      closeByClick(block, mainPage, queryTag)
    })
    closeButton.addEventListener('click', function () {
      mainPage.style.opacity = 1
      block.classList.add('side-menu--hidden')
    })
  }
}

function modalChecker(block) {
  if (block.classList.contains('hidden')) {
    return true
  } else {
    return false
  }
}

function closeByClick(block, mainPage, queryTag) {
  if (!modalChecker(block)) {
    window.addEventListener('click', function (evt) {
      if (
        !(
          evt.target.nodeName == 'IMG' &&
          evt.target.tagName.toUpperCase() == 'INPUT'
        )
      ) {
        mainPage.style.opacity = 1
        block.classList.add(queryTag + '--hidden')
      }
    })
  }
}

let hidden = ['side-menu--hidden', 'modal--hidden']
let menuButton = document.querySelector('.header__item-menu')
let menuBlock = document.querySelector('.side-menu')
let closeMenu = menuBlock.querySelector('.btn__cancel')

let nonBlock = document.querySelector('.main-page')

let checkStatusButton = document.querySelectorAll(
  '.header__item-call, .btns__call'
)
let statusBlock = document.querySelector('.modal-feedback')
let closeStatus = statusBlock.querySelector('.btn__cancel')

let contactButton = document.querySelectorAll('.btns__chat, .header__item-chat')
let contactBlock = document.querySelector('.modal-call')
let closeContact = contactBlock.querySelector('.btn__cancel')

modal(menuButton, closeMenu, menuBlock, nonBlock, 'side-menu')
modal(checkStatusButton, closeStatus, statusBlock, nonBlock, 'modal')
modal(contactButton, closeContact, contactBlock, nonBlock, 'modal')
