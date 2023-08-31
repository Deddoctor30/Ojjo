function form() {
   const form = document.querySelector('.contacts__form button');
   function postData(item) {
      item.AddEventListener('submit', (event) => {
         event.prevetDefault();
      })
   }
}

export default form;