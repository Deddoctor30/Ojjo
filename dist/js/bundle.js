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

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function filter() {
  const filtrTrigger = document.querySelectorAll('.slider__item'),
        cards = document.querySelectorAll('.goods__item');
  filtrTrigger.forEach(element => {
    element.addEventListener('click', () => {
      cards.forEach(item => {
        item.classList.add('js-hide-goods');

        if (item.dataset.goods === element.dataset.goods) {
          item.classList.remove('js-hide-goods');
        }

        ;
      });
    });
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  function nextSlide(value) {
    slideField.style.transform = `translateX(-${value}px)`; // console.log(value);
  } // Переменные
  // Слайдер - каруселька


  const items = document.querySelectorAll('.blog__item'),
        wrapper = document.querySelector('.blog__wrapper'),
        slideField = document.querySelector('.blog__items'),
        width = window.getComputedStyle(wrapper).width,
        arrowNext = document.querySelector('.blog__arrow-next'),
        arrowPrev = document.querySelector('.blog__arrow-prew'),
        aLinck = document.querySelectorAll('.blog__item > a'); // Тач слайдер

  let start = 0;
  let move = 0;
  let offset = 0;
  let endTotal = 0;
  let n = 1;
  slideField.style.width = 100 * items.length + '%';
  items.forEach(item => {
    item.style.width = width;
  }); // Слайд вперед по клику стрелки

  arrowNext.addEventListener('click', () => {
    offset += +width.replace(/\D/g, '');

    if (offset >= +width.replace(/\D/g, '') * items.length) {
      offset = 0;
    } // Попробовать объединить функции      
    // nextSlideEV ();


    if (n === items.length) {
      n = 1;
    } else {
      n++;
    }

    nextSlide(offset); // console.log(`N = ${n}`);
  }); // Слайд назад по клику стрелки

  arrowPrev.addEventListener('click', () => {
    offset -= +width.replace(/\D/g, '');

    if (offset < 0) {
      offset = +width.replace(/\D/g, '') * (items.length - 1);
    }

    if (n === 1) {
      n = items.length;
    } else {
      n--;
    }

    nextSlide(offset); // console.log(`N = ${n}`);
  }); //_____________________________
  // Событие нажать

  wrapper.addEventListener('mousedown', swipeMove); // Функция нажать

  function swipeMove(event) {
    event.preventDefault();
    endTotal = offset;
    start = event.clientX; // Событие move

    wrapper.addEventListener('mousemove', moveFunc); // Функция move

    function moveFunc(event) {
      move = start - event.clientX;
      offset = move + endTotal; // Проверка выравнить слайд по центру при свайпе вправо  [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]

      if (move >= +width.replace(/\D/g, '') / 2.5) {
        nextSlideE();
      } // Проверка выравнить слайд по центру при свайпе влево   [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]


      if (Math.abs(move) >= +width.replace(/\D/g, '') / 2.5 && move < 0) {
        prevSlideE();
      } // Перемотка в начало


      if (offset > +width.replace(/\D/g, '') * (items.length - 1) + 120) {
        offset = 0;
      } // Перемотка в конец


      if (offset < -120) {
        offset = +width.replace(/\D/g, '') * (items.length - 1);
      } // console.log(`Перед value ${offset}`);


      nextSlide(Math.abs(offset));
    } // Событие отжать


    window.addEventListener('mouseup', event => {
      event.preventDefault(); // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++

      endTotal = offset;
    }); // Выравнить слайд по центру при свайпе вправо

    function nextSlideE() {
      // Останавливаем функцию слежения при выравнивании слайда по центру
      wrapper.removeEventListener('mousemove', moveFunc);
      nextSlideEV();
    } // Выравнить слайд по центру при свайпе влево


    function prevSlideE() {
      // Останавливаем функцию слежения при выравнивании слайда по центру
      wrapper.removeEventListener('mousemove', moveFunc);
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





window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(); //__________________ Login ____________________
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map