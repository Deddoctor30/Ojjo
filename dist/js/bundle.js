/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


window.addEventListener('DOMContentLoaded', () => {
  // Меню бургер
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
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map