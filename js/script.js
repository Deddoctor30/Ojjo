'use strict';

import burger from './modules/burger';
import filter from './modules/filter';
import slider from './modules/slider';
import login from './modules/login';
import cards from './modules/cards';
import form from './modules/form';
import email from './modules/email';
import {open} from './modules/login';
import catalog from './modules/catalog';
import catalogSlider from './modules/catalog-slider';
import cardSlider from './modules/card-slider';

window.addEventListener('DOMContentLoaded', () => {
   const timeOut = setTimeout(() => open('.modal', timeOut), 500000);

   form();
   burger();
   filter('.slider__item', '.goods__item');
   if (document.querySelector('.collection__slider')) {
      slider({
         container: '.blog__items',
         cards: '.blog__item',
         wrap: '.blog__wrapper',
         nextArr: '.blog__arrow-next',
         prevArr: '.blog__arrow-prew'
      });
   }
   login('.modal', '.account__login', timeOut);
   cards('.social__yt-video');
   email();
   catalog();
   catalogSlider();
   cardSlider();
});
