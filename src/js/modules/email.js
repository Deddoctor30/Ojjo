import {posting} from '../services/service';

function email() {
   const form = document.querySelector('.contacts__form'),
         modal = document.querySelector('.email-form');
   let statusMessage;
   let spinner;

   const message = {
      loading: 'Идет загрузка',
      spinner: '/src/img/spinner/spinner.svg',
      success: 'Успешно загружено',
      fail: 'Что-то пошло не так'
   } 
   
   if (form) {
      postData(form);
      function postData(form) {
         form.addEventListener('submit', event => {
            event.preventDefault();
            showEmailModal();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            posting('http://localhost:3000/requests', json)
            .then(data => {
               spinner.remove();
               statusMessage.textContent = message.success;
               form.reset();
            })
            .catch(() => {
               spinner.remove();
               statusMessage.textContent = message.fail;
            })
            .finally(() => {
               setTimeout(() => {
                  statusMessage.remove();
                  modal.classList.add('js-hide');
               }, 1500); 
            })
         });
      }
   }

   function showEmailModal() {
      statusMessage = document.createElement('div')
      statusMessage.textContent = message.loading;
      statusMessage.style.cssText = `
         align-self: center;
         display: inline-block;
         text-align: center;
         margin: 0px 20px 0px 0px;
      `;
      spinner = document.createElement('img');
      spinner.style.cssText = `
         width: 30px;
         height: 30px;
      `;
      spinner.src = message.spinner;
      document.querySelector('.email-form__content').append(statusMessage);
      document.querySelector('.email-form__content').append(spinner);
      modal.classList.remove('js-hide');
   }
}

export default email;