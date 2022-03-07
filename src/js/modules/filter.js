function filter(trigger, cardsItems) {
   const filtrTrigger = document.querySelectorAll(trigger),
         cards = document.querySelectorAll(cardsItems);

   filtrTrigger.forEach((element) => {
      element.addEventListener('click', event => {

         if (element.classList.contains('js-hover-goods')) {
            deleteCards();
         } else {
            deleteCards();
            event.target.classList.add('js-hover-goods');
            cards.forEach(item => {
               if (item.dataset.goods !== element.dataset.goods) {
                  item.classList.add('js-hide-goods');
               };
            });
         }
      });
   });

   function deleteCards() {
      // удаляю выделения с триггера
      filtrTrigger.forEach(item => {
         item.classList.remove('js-hover-goods');
      });
      // удаляю старые карточки
      cards.forEach(item => {
         item.classList.remove('js-hide-goods')
      });
   }
};

export default filter;