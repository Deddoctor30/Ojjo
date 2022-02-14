'use strict';



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




   
   // Фильтр
   const filtrTrigger = document.querySelectorAll('.slider__item'),
         cards = document.querySelectorAll('.goods__item');


   filtrTrigger.forEach((element) => {
      element.addEventListener('click', () => {
         cards.forEach((item) => {
            item.classList.add('hide-goods');
            if (item.dataset.goods === element.dataset.goods) {
               item.classList.remove('hide-goods');
            };
         });
      });
   });
   
   




   // Слайдер - каруселька
   const items = document.querySelectorAll('.blog__item'),
         wrapper = document.querySelector('.blog__wrapper'),
         slideField = document.querySelector('.blog__items'),
         width = window.getComputedStyle(wrapper).width,
         arrowNext = document.querySelector('.blog__arrow-next'),
         arrowPrev = document.querySelector('.blog__arrow-prew');

   let offset = 0;

   slideField.style.width = 100 * items.length + '%';

   items.forEach(item => {
      item.style.width = width;
   });

   arrowNext.addEventListener('click', () => {
      if (offset >= +width.replace(/\D/g, '') * (items.length - 1)) {
         offset = 0;
      } else {
         offset += +width.replace(/\D/g, '');
      }

      slideField.style.transform = `translateX(-${offset}px)`
   });

   arrowPrev.addEventListener('click', () => {
      if (offset == 0) {
         offset = +width.replace(/\D/g, '') * (items.length - 1);
      } else {
         offset -= +width.replace(/\D/g, '');
      }

      slideField.style.transform = `translateX(-${offset}px)`;
   })


   // Курсор
   let start = 0;
   let move = 0;
   let end = 0;
   let tempOff = 0;

   wrapper.addEventListener('mousedown', swipeMove);

   function swipeMove (event) {
      start = event.clientX;
      console.log(`Кликнул ${start}`);
      event.preventDefault();

      wrapper.addEventListener('mousemove', moveFunc);

      function moveFunc (event) {
         move = event.clientX;
         offset = start - move;
         console.log(offset);
         slideField.style.transform = `translateX(-${offset}px)`;
      }

      window.addEventListener('mouseup', (event) => {
         end = event.clientX;
         wrapper.removeEventListener('mousemove', moveFunc);
         console.log(`Отпустил ${end}`);
         // if (offset >= (+width.replace(/\D/g, '') / 2)) {
         //    offset += +width.replace(/\D/g, '');
         // }
      });
   }



   // console.log(move);

   // wrapper.addEventListener('mousemove', (event) => {
   //    move = event.clientX;
   // });

   // wrapper.addEventListener('mouseup', (event) => {
   //    end = event.clientX;
   // });

   























});
