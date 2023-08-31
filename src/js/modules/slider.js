function slider({container, cards, wrap, nextArr, prevArr}) {
   function nextSlide (value) {
      slideField.style.transform = `translateX(-${value}px)`
   }

   const items = document.querySelectorAll(cards),
         wrapper = document.querySelector(wrap),
         slideField = document.querySelector(container),
         width = window.getComputedStyle(wrapper).width,
         arrowNext = document.querySelector(nextArr),
         arrowPrev = document.querySelector(prevArr);

   let start = 0,
         move = 0,
         offset = 0,
         endTotal = 0,
         n = 1;

   slideField.style.width = 100 * items.length + '%';
   items.forEach(item => {
      item.style.width = width;
   });

   arrowNext.addEventListener('click', () => {
      offset += +width.replace(/\D/g, '') - move;         
      if (offset >= +width.replace(/\D/g, '') * (items.length)) {
         offset = 0;
      }
      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
      nextSlide(offset);
      move = 0;
   });



   // Слайд назад по клику стрелки
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
   });



//_____________________________ Для компухтера ______________________


   // Событие нажать
   wrapper.addEventListener('mousedown', swipeMove);
   wrapper.addEventListener('touchstart', swipeMove);

   // Функция нажать
   function swipeMove (event) {
      event.preventDefault();
      endTotal = offset;

      // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         start = event.touches[0].clientX;
      } else {
         start = event.clientX;
      }



      // Событие move
      wrapper.addEventListener('mousemove', moveFunc);
      wrapper.addEventListener('touchmove', moveFunc);


      // Функция move
      function moveFunc (event) {

         // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку
         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            move = start - event.touches[0].clientX;
         } else {
            move = start - event.clientX;
         }

         offset = move + endTotal;
         
         // Проверка выравнить слайд по центру при свайпе вправо  [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if ((move >= +width.replace(/\D/g, '') / 2.5)) {
            nextSlideE();
            move = 0;
         }

         // Проверка выравнить слайд по центру при свайпе влево   [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if (((Math.abs(move) >= +width.replace(/\D/g, '') / 2.5)) && (move < 0)) {
            prevSlideE();
            move = 0;
         }

         // Перемотка в начало
         if (offset > (+width.replace(/\D/g, '') * (items.length - 1)) + 120) {
            offset = 0;
         }

         // Перемотка в конец
         if (offset < -120) {
            offset = +width.replace(/\D/g, '') * (items.length - 1);
         }
         nextSlide(Math.abs(offset));
      }


      // Событие отжать
      window.addEventListener('mouseup', upFunc);
      window.addEventListener('touchend', upFunc);

      function upFunc() {
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
         // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++
         endTotal = offset;
      }
 

      // Выравнить слайд по центру при свайпе вправо
      function nextSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
         nextSlideEV ();
      }  

      // Выравнить слайд по центру при свайпе влево
      function prevSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
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