function catalog() {
   const showText = document.querySelector('.description__text span'),
         textInfo = document.querySelector('.description__info');

   showText.addEventListener('click', () => {
      textInfo.classList.toggle('js-show-text');
      if (textInfo.classList.contains('js-show-text')) {
         showText.textContent = 'скрыть';
         showText.style.cssText = `
         bottom: -40px;
         `;
      } else {
         showText.textContent = 'читать полностью';
         showText.style.cssText = `
         bottom: 10px;
         `;
      }
   });
}

export default catalog;
