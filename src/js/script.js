'use strict';

import burger from './modules/burger';
import filter from './modules/filter';
import slider from './modules/slider';
import login from './modules/login';
import cards from './modules/cards';
import form from './modules/form';
import email from './modules/email';
import {open} from './modules/login';

window.addEventListener('DOMContentLoaded', () => {
   const timeOut = setTimeout(() => open('.modal', timeOut), 5000);

   form();
   burger();
   filter('.slider__item', '.goods__item');
   slider({
      container: '.blog__items',
      cards: '.blog__item',
      wrap: '.blog__wrapper',
      nextArr: '.blog__arrow-next',
      prevArr: '.blog__arrow-prew'
   });
   login('.modal', '.account__login', timeOut);
   cards();
   email();
});
