function modal() {
   const modalWindow = document.querySelector('.modal'),
         modalOpen = document.querySelector('.account__login');
         // modalClose = document.querySelector('.account__login');

   function open(){
      modalWindow.classList.add('js-show');
      modalWindow.classList.remove('js-hide');
      document.body.style.overflow = 'hidden';
      clearInterval(timeOut);
   };

   function close(){
      modalWindow.classList.add('js-hide');
      modalWindow.classList.remove('js-show');
      document.body.style.overflow = '';
   };

   modalOpen.addEventListener('click', open);

   // Закрытие окна на Escape
   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
         close();
      }
   });

   modalWindow.addEventListener('click', (event) => {
      if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
         close();
      }
   });

   const timeOut = setTimeout(open, 555000)
}

export default modal;