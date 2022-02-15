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
   
   




   // // Слайдер - каруселька
   // const items = document.querySelectorAll('.blog__item'),
   //       wrapper = document.querySelector('.blog__wrapper'),
   //       slideField = document.querySelector('.blog__items'),
   //       width = window.getComputedStyle(wrapper).width,
   //       arrowNext = document.querySelector('.blog__arrow-next'),
   //       arrowPrev = document.querySelector('.blog__arrow-prew');

   // let offset = 0;

   // slideField.style.width = 100 * items.length + '%';

   // items.forEach(item => {
   //    item.style.width = width;
   // });

   // arrowNext.addEventListener('click', () => {
   //    if (offset >= +width.replace(/\D/g, '') * (items.length - 1)) {
   //       offset = 0;
   //    } else {
   //       offset += +width.replace(/\D/g, '');
   //    }

   //    slideField.style.transform = `translateX(-${offset}px)`
   // });

   // arrowPrev.addEventListener('click', () => {
   //    if (offset == 0) {
   //       offset = +width.replace(/\D/g, '') * (items.length - 1);
   //    } else {
   //       offset -= +width.replace(/\D/g, '');
   //    }

   //    slideField.style.transform = `translateX(-${offset}px)`;
   // })






   // // Тач слайдер
   // let start = 0;
   // let move = 0;
   // let tempOff = 0;
   // let endTotal = 0;
   // let n = 1;


   // // Событие нажать
   // wrapper.addEventListener('mousedown', swipeMove);

   // function swipeMove (event) {
   //    start = event.clientX;
   //    event.preventDefault();

   //    // Событие move
   //    wrapper.addEventListener('mousemove', moveFunc);

   //    function moveFunc (event) {
   //       move = start - event.clientX;
   //       tempOff = move + endTotal;


   //       if ((move >= +width.replace(/\D/g, '') / 2.5)) {
   //          nextSlide();
   //       }

   //       if (((Math.abs(move) >= +width.replace(/\D/g, '') / 2.5)) && (move < 0)) {
   //          prevSlide();
   //       }

   //       if (tempOff > (+width.replace(/\D/g, '') * (items.length - 1)) + 120) {
   //          tempOff = 0;
   //       }

   //       if (tempOff < -120) {
   //          tempOff = +width.replace(/\D/g, '') * (items.length - 1);
   //       }

   //       if (move > 0) {
   //          slideField.style.transform = `translateX(-${tempOff}px)`;
   //       } else {
   //          slideField.style.transform = `translateX(${tempOff * -1}px)`;
   //       }
   //    }

   //    // Событие отжать
   //    window.addEventListener('mouseup', () => {
   //       endTotal = tempOff;
   //       wrapper.removeEventListener('mousemove', moveFunc);
   //    });

   //    function nextSlide () {
   //       tempOff = n * (+width.replace(/\D/g, ''));
   //       wrapper.removeEventListener('mousemove', moveFunc);
   //       if (n === items.length) {
   //          n = 1;
   //       } else {
   //          n++;
   //       }
   //    }  

   //    function prevSlide () {
   //       if (n === 1) {
   //          n = items.length;
   //       } else {
   //          n--;
   //       }

   //       tempOff = (n - 1) * (+width.replace(/\D/g, ''));
   //       wrapper.removeEventListener('mousemove', moveFunc);
   //    }
   // }



   function nextSlide (value) {
      slideField.style.transform = `translateX(-${value}px)`
      console.log(value);
   }


   // Переменные
      // Слайдер - каруселька
         const items = document.querySelectorAll('.blog__item'),
               wrapper = document.querySelector('.blog__wrapper'),
               slideField = document.querySelector('.blog__items'),
               width = window.getComputedStyle(wrapper).width,
               arrowNext = document.querySelector('.blog__arrow-next'),
               arrowPrev = document.querySelector('.blog__arrow-prew');


      // Тач слайдер
         let start = 0;
         let move = 0;
         let offset = 0;
         let endTotal = 0;
         let n = 1;
         let tempOff = 0;

         

   slideField.style.width = 100 * items.length + '%';

   items.forEach(item => {
      item.style.width = width;
   });
   

   // Слайд вперед по клику стрелки
   arrowNext.addEventListener('click', () => {
      offset += +width.replace(/\D/g, '');
      if (offset >= +width.replace(/\D/g, '') * (items.length)) {
         offset = 0;
      }
      // Попробовать объединить функции      
      // nextSlideEV ();


      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
      nextSlide(offset);
      console.log(`N = ${n}`);
   });



   // Слайд назад по клику стрелки
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

      nextSlide(offset);
      console.log(`N = ${n}`);
   });



//_____________________________




   // Событие нажать
   wrapper.addEventListener('mousedown', swipeMove);

   // Функция нажать
   function swipeMove (event) {
      endTotal = offset;

      start = event.clientX;
      event.preventDefault();

      // Событие move
      wrapper.addEventListener('mousemove', moveFunc);


      // Функция move
      function moveFunc (event) {
         move = start - event.clientX;
         offset = move + endTotal;

         // Проверка выравнить слайд по центру при свайпе вправо  [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if ((move >= +width.replace(/\D/g, '') / 2.5)) {
            nextSlideE();
         }

         // Проверка выравнить слайд по центру при свайпе влево   [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if (((Math.abs(move) >= +width.replace(/\D/g, '') / 2.5)) && (move < 0)) {
            prevSlideE();
         }

         // Перемотка в начало
         if (offset > (+width.replace(/\D/g, '') * (items.length - 1)) + 120) {
            offset = 0;
         }

         // Перемотка в конец
         if (offset < -120) {
            offset = +width.replace(/\D/g, '') * (items.length - 1);
         }
         console.log(`Перед value ${offset}`);
         nextSlide(Math.abs(offset));
      }

      // Событие отжать
      window.addEventListener('mouseup', () => {
         // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++
         endTotal = offset;

         // Останавливаем функцию слежения при клике
         wrapper.removeEventListener('mousemove', moveFunc);
      });


      // Выравнить слайд по центру при свайпе вправо
      function nextSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         nextSlideEV ();
      }  

      // Выравнить слайд по центру при свайпе влево
      function prevSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         prevSlideEV ();
      }
   }


   // Выравнить слайд по центру при свайпе вправо
   function nextSlideEV () {
      offset = n * (+width.replace(/\D/g, ''));
      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
   }  

   // Выравнить слайд по центру при свайпе влево
   function prevSlideEV () {
      if (n === 1) {
         n = items.length;
      } else {
         n--;
      }
      offset = (n - 1) * (+width.replace(/\D/g, ''));
   }






















});
