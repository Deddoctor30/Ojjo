function filter() {
   const filtrTrigger = document.querySelectorAll('.slider__item'),
         cards = document.querySelectorAll('.goods__item');

   filtrTrigger.forEach((element) => {
      element.addEventListener('click', () => {
         cards.forEach((item) => {
            item.classList.add('js-hide-goods');
            if (item.dataset.goods === element.dataset.goods) {
               item.classList.remove('js-hide-goods');
            };
         });
      });
   });
};

export default filter;