import {getResource} from "../services/service"

function cards () {

   class AddCart {
      constructor(src, alt, parentElement, ...classes) {
         this.src = src;
         this.alt = alt;
         this.classes = classes;
         this.parentElement = document.querySelector(parentElement);
         this.changeHTML();
         // this.removePrevElements();
      }

      changeHTML() {
         let element = document.createElement("div");

         if (this.classes.length === 0) {
            this.class = 'social__img';
            element.classList.add(this.class);
         } else {
            this.classes.forEach(className => {
               element.classList.add(className)
            });
         }

         element.innerHTML = `
            <img src=${this.src} alt=${this.alt}></div>
         `;

         this.parentElement.after(element);
      }

      removePrevElements() {
         this.parentElement.innerHTML = ``;
      }
   }
   getResource("http://localhost:3000/cards")
      .then(data => {
         data.forEach(({src, alt}) => {
            new AddCart(src, alt, '.social__yt-video')
         });
      });
}


export default cards;