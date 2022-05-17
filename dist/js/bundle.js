/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function burger() {
  const inner = document.querySelector('.header__inner'),
        line = document.querySelector('.header__line'),
        menu = document.querySelector('.header__menu'),
        bar = document.querySelector('.header__right-bar'),
        burgerTrigger = document.querySelector('.burger');
  burgerTrigger.addEventListener('click', () => {
    inner.classList.toggle('menu-burger');
    line.classList.toggle('line-wide');
    menu.classList.toggle('menu-burger');
    bar.classList.toggle('menu-burger');
    burgerTrigger.classList.toggle('hide');
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/card-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/card-slider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function cardSlider() {
  if (document.querySelector('.product__images')) {
    $('.product__main-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.product__bottop-images',
      responsive: [{
        breakpoint: 1130,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
    });
    $('.product__bottop-images').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.product__main-image',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: "unslick"
      }]
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cardSlider);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./src/js/services/service.js");


function cards(paretElem) {
  if (document.querySelector(paretElem)) {
    class AddCart {
      constructor(src, alt, parentElement) {
        this.src = src;
        this.alt = alt;

        for (var _len = arguments.length, classes = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          classes[_key - 3] = arguments[_key];
        }

        this.classes = classes;
        this.parentElement = document.querySelector(parentElement);
        this.changeHTML();
      }

      changeHTML() {
        let element = document.createElement("div");

        if (this.classes.length === 0) {
          this.class = 'social__img';
          element.classList.add(this.class);
        } else {
          this.classes.forEach(className => {
            element.classList.add(className);
          });
        }

        element.innerHTML = `
               <img src=${this.src} alt=${this.alt}></div>
            `;
        this.parentElement.after(element);
      }

      removePrevElements() {
        this.parentElement.innerHTML = ``;
      }

    }

    (0,_services_service__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/cards").then(data => {
      data.forEach(_ref => {
        let {
          src,
          alt
        } = _ref;
        new AddCart(src, alt, paretElem);
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/catalog-slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/catalog-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function catalogSlider() {
  if (document.querySelector('.catalog__form')) {
    $('.catalog__form').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      adaptiveHeight: true,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 716,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true
        }
      }, {
        breakpoint: 544,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      }]
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (catalogSlider);

/***/ }),

/***/ "./src/js/modules/catalog.js":
/*!***********************************!*\
  !*** ./src/js/modules/catalog.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function catalog() {
  const showText = document.querySelector('.description__text span'),
        textInfo = document.querySelector('.description__info');

  if (showText) {
    showText.addEventListener('click', () => {
      textInfo.classList.toggle('js-show-text');

      if (textInfo.classList.contains('js-show-text')) {
        showText.textContent = 'скрыть';
        showText.style.cssText = `
            bottom: -40px;
            `;
      } else {
        showText.textContent = 'читать полностью';
        showText.style.cssText = `
            bottom: 10px;
            `;
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (catalog);

/***/ }),

/***/ "./src/js/modules/email.js":
/*!*********************************!*\
  !*** ./src/js/modules/email.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./src/js/services/service.js");


function email() {
  const form = document.querySelector('.contacts__form'),
        modal = document.querySelector('.email-form');
  let statusMessage;
  let spinner;
  const message = {
    loading: 'Идет загрузка',
    spinner: '/src/img/spinner/spinner.svg',
    success: 'Успешно загружено',
    fail: 'Что-то пошло не так'
  };

  if (form) {
    postData(form);

    function postData(form) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        showEmailModal();
        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries())); // formData => в массив массивов, потом обратно в объект и в json формат

        (0,_services_service__WEBPACK_IMPORTED_MODULE_0__.posting)('http://localhost:3000/requests', json).then(data => {
          spinner.remove(); // console.log(data);

          statusMessage.textContent = message.success;
          form.reset();
        }).catch(() => {
          spinner.remove();
          statusMessage.textContent = message.fail;
        }).finally(() => {
          setTimeout(() => {
            statusMessage.remove();
            modal.classList.add('js-hide');
          }, 1500);
        });
      });
    }
  }

  function showEmailModal() {
    statusMessage = document.createElement('div');
    statusMessage.textContent = message.loading;
    statusMessage.style.cssText = `
         align-self: center;
         display: inline-block;
         text-align: center;
         margin: 0px 20px 0px 0px;
      `;
    spinner = document.createElement('img');
    spinner.style.cssText = `
         width: 30px;
         height: 30px;
      `;
    spinner.src = message.spinner;
    document.querySelector('.email-form__content').append(statusMessage);
    document.querySelector('.email-form__content').append(spinner);
    modal.classList.remove('js-hide');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (email);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function filter(trigger, cardsItems) {
  const filtrTrigger = document.querySelectorAll(trigger),
        cards = document.querySelectorAll(cardsItems);
  filtrTrigger.forEach(element => {
    element.addEventListener('click', event => {
      if (element.classList.contains('js-hover-goods')) {
        deleteCards();
      } else {
        deleteCards();
        event.target.classList.add('js-hover-goods');
        cards.forEach(item => {
          if (item.dataset.goods !== element.dataset.goods) {
            item.classList.add('js-hide-goods');
          }

          ;
        });
      }
    });
  });

  function deleteCards() {
    // удаляю выделения с триггера
    filtrTrigger.forEach(item => {
      item.classList.remove('js-hover-goods');
    }); // удаляю старые карточки

    cards.forEach(item => {
      item.classList.remove('js-hide-goods');
    });
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function form() {
  const form = document.querySelector('.contacts__form button');

  function postData(item) {
    item.AddEventListener('submit', event => {
      event.prevetDefault();
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/login.js":
/*!*********************************!*\
  !*** ./src/js/modules/login.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "open": function() { return /* binding */ open; },
/* harmony export */   "close": function() { return /* binding */ close; }
/* harmony export */ });
function open(modal, timeOut) {
  const modalWindow = document.querySelector(modal);
  modalWindow.classList.add('js-show');
  modalWindow.classList.remove('js-hide');
  document.body.style.overflow = 'hidden';
  clearInterval(timeOut);
}

;

function close(modal) {
  const modalWindow = document.querySelector(modal);
  modalWindow.classList.add('js-hide');
  modalWindow.classList.remove('js-show');
  document.body.style.overflow = '';
}

;

function modal(modal, trigger, timeOut) {
  const modalWindow = document.querySelector(modal),
        modalOpen = document.querySelector(trigger);
  modalOpen.addEventListener('click', () => open(modal, timeOut)); // Закрытие окна на Escape

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
      close(modal);
    }
  });
  modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
      close(modal);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// import cards from "./cards"
function slider(_ref) {
  let {
    container,
    cards,
    wrap,
    nextArr,
    prevArr
  } = _ref;

  function nextSlide(value) {
    slideField.style.transform = `translateX(-${value}px)`;
  } // Переменные
  // Слайдер - каруселька


  const items = document.querySelectorAll(cards),
        wrapper = document.querySelector(wrap),
        slideField = document.querySelector(container),
        width = window.getComputedStyle(wrapper).width,
        arrowNext = document.querySelector(nextArr),
        arrowPrev = document.querySelector(prevArr); // Тач слайдер

  let start = 0,
      move = 0,
      offset = 0,
      endTotal = 0,
      n = 1;
  slideField.style.width = 100 * items.length + '%';
  items.forEach(item => {
    item.style.width = width;
  }); // Слайд вперед по клику стрелки

  arrowNext.addEventListener('click', () => {
    offset += +width.replace(/\D/g, '') - move;

    if (offset >= +width.replace(/\D/g, '') * items.length) {
      offset = 0;
    }

    if (n === items.length) {
      n = 1;
    } else {
      n++;
    }

    nextSlide(offset);
    move = 0;
  }); // Слайд назад по клику стрелки

  arrowPrev.addEventListener('click', () => {
    offset -= +width.replace(/\D/g, '') + move;

    if (offset < 0) {
      offset = +width.replace(/\D/g, '') * (items.length - 1);
    }

    if (n === 1) {
      n = items.length;
    } else {
      n--;
    }

    nextSlide(offset);
    move = 0;
  }); //_____________________________ Для компухтера ______________________
  // Событие нажать

  wrapper.addEventListener('mousedown', swipeMove);
  wrapper.addEventListener('touchstart', swipeMove); // Функция нажать

  function swipeMove(event) {
    event.preventDefault();
    endTotal = offset; // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      start = event.touches[0].clientX;
    } else {
      start = event.clientX;
    } // Событие move


    wrapper.addEventListener('mousemove', moveFunc);
    wrapper.addEventListener('touchmove', moveFunc); // Функция move

    function moveFunc(event) {
      // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        move = start - event.touches[0].clientX;
      } else {
        move = start - event.clientX;
      }

      offset = move + endTotal; // Проверка выравнить слайд по центру при свайпе вправо  [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]

      if (move >= +width.replace(/\D/g, '') / 2.5) {
        nextSlideE();
        move = 0;
      } // Проверка выравнить слайд по центру при свайпе влево   [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]


      if (Math.abs(move) >= +width.replace(/\D/g, '') / 2.5 && move < 0) {
        prevSlideE();
        move = 0;
      } // Перемотка в начало


      if (offset > +width.replace(/\D/g, '') * (items.length - 1) + 120) {
        offset = 0;
      } // Перемотка в конец


      if (offset < -120) {
        offset = +width.replace(/\D/g, '') * (items.length - 1);
      }

      nextSlide(Math.abs(offset));
    } // Событие отжать


    window.addEventListener('mouseup', upFunc);
    window.addEventListener('touchend', upFunc);

    function upFunc() {
      wrapper.removeEventListener('mousemove', moveFunc);
      wrapper.removeEventListener('touchmove', moveFunc); // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++

      endTotal = offset;
    } // Выравнить слайд по центру при свайпе вправо


    function nextSlideE() {
      // Останавливаем функцию слежения при выравнивании слайда по центру
      wrapper.removeEventListener('mousemove', moveFunc);
      wrapper.removeEventListener('touchmove', moveFunc);
      nextSlideEV();
    } // Выравнить слайд по центру при свайпе влево


    function prevSlideE() {
      // Останавливаем функцию слежения при выравнивании слайда по центру
      wrapper.removeEventListener('mousemove', moveFunc);
      wrapper.removeEventListener('touchmove', moveFunc);
      prevSlideEV();
    }
  } // Выравнить слайд по центру при свайпе вправо


  function nextSlideEV() {
    offset = n * +width.replace(/\D/g, '');

    if (n === items.length) {
      n = 1;
    } else {
      n++;
    }
  } // Выравнить слайд по центру при свайпе влево


  function prevSlideEV() {
    if (n === 1) {
      n = items.length;
    } else {
      n--;
    }

    offset = (n - 1) * +width.replace(/\D/g, '');
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; },
/* harmony export */   "posting": function() { return /* binding */ posting; }
/* harmony export */ });
const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, statys: ${res.status}`);
  }

  return await res.json(); // res.json() - метод у fetch'a который json формат переводит в обычный объект для юзания на сайте
};

const posting = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, statys: ${res.status}`);
  }

  return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/login */ "./src/js/modules/login.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/email */ "./src/js/modules/email.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/catalog */ "./src/js/modules/catalog.js");
/* harmony import */ var _modules_catalog_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/catalog-slider */ "./src/js/modules/catalog-slider.js");
/* harmony import */ var _modules_card_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/card-slider */ "./src/js/modules/card-slider.js");













window.addEventListener('DOMContentLoaded', () => {
  const timeOut = setTimeout(() => (0,_modules_login__WEBPACK_IMPORTED_MODULE_3__.open)('.modal', timeOut), 500000);
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__["default"])('.slider__item', '.goods__item');

  if (document.querySelector('.collection__slider')) {
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
      container: '.blog__items',
      cards: '.blog__item',
      wrap: '.blog__wrapper',
      nextArr: '.blog__arrow-next',
      prevArr: '.blog__arrow-prew'
    });
  }

  (0,_modules_login__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal', '.account__login', timeOut);
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])('.social__yt-video');
  (0,_modules_email__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_catalog__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_catalog_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_card_slider__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map