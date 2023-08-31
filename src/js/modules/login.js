function open(modal, timeOut){
   const modalWindow = document.querySelector(modal);
   modalWindow.classList.add('js-show');
   modalWindow.classList.remove('js-hide');
   document.body.style.overflow = 'hidden';
   clearInterval(timeOut);
};

function close(modal){
   const modalWindow = document.querySelector(modal);
   modalWindow.classList.add('js-hide');
   modalWindow.classList.remove('js-show');
   document.body.style.overflow = '';
};

function modal(modal, trigger, timeOut) {
   const modalWindow = document.querySelector(modal),
         modalOpen = document.querySelector(trigger);

   modalOpen.addEventListener('click', () => open(modal, timeOut));
   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
         close(modal);
      }
   });

   modalWindow.addEventListener('click', (event) => {
      if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
         close(modal);
      }
   });

}

export default modal;
export {open};
export {close};