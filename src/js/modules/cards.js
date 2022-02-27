import {getResource} from "../services/service"

function cards () {

   class AddCart {
      constructor(url, label, img, alt, parentElement, ...classes) {
         this.url = url;
         this.label = label;
         this.img = img;
         this.alt = alt;
         this.classes = classes;
         this.parentElement = document.querySelector(parentElement);
         this.changeHTML();
         // this.removePrevElements();
      }

      changeHTML() {
         const element = document.createElement("div");

         if (this.classes.length === 0) {
            this.class = 'blog__item';
            element.classList.add(this.class);
         } else {
            this.classes.forEach(className => {
               element.classList.add(className)
            });
         }

         element.innerHTML = `
            <div class="blog__label"><a href=${this.url}>${this.label}</a></div>
            <div class="blog__img"><img src=${this.img} alt=${this.alt}></div 
         `;

         this.parentElement.append(element);
      }

      removePrevElements() {
         this.parentElement.innerHTML = ``;
      }
   }

   getResource("http://localhost:3000/cards")
      .then(data => {
         data.forEach(({url, label, img, alt}) => {
            new AddCart(url, label, img, alt, '.blog__items')
         });
      });
      console.log('загрузилось html');
}

export default cards;