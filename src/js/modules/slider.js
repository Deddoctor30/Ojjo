function slider() {
   function nextSlide (value) {
      slideField.style.transform = `translateX(-${value}px)`
      // console.log(value);
   }


   // Переменные
      // Слайдер - каруселька
         const items = document.querySelectorAll('.blog__item'),
               wrapper = document.querySelector('.blog__wrapper'),
               slideField = document.querySelector('.blog__items'),
               width = window.getComputedStyle(wrapper).width,
               arrowNext = document.querySelector('.blog__arrow-next'),
               arrowPrev = document.querySelector('.blog__arrow-prew'),
               aLinck = document.querySelectorAll('.blog__item > a');



      // Тач слайдер
         let start = 0;
         let move = 0;
         let offset = 0;
         let endTotal = 0;
         let n = 1;
         

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
      // console.log(`N = ${n}`);
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
      // console.log(`N = ${n}`);
   });



//_____________________________




   // Событие нажать
   wrapper.addEventListener('mousedown', swipeMove);

   // Функция нажать
   function swipeMove (event) {
      event.preventDefault();
      endTotal = offset;

      start = event.clientX;

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
         // console.log(`Перед value ${offset}`);
         nextSlide(Math.abs(offset));
      }

      // Событие отжать
      window.addEventListener('mouseup', (event) => {
         event.preventDefault();
         // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++
         endTotal = offset;

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
   function nextSlideEV() {
      offset = n * (+width.replace(/\D/g, ''));
      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
   }  

   // Выравнить слайд по центру при свайпе влево
   function prevSlideEV() {
      if (n === 1) {
         n = items.length;
      } else {
         n--;
      }
      offset = (n - 1) * (+width.replace(/\D/g, ''));
   }

};




export default slider;