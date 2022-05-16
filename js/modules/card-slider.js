function cardSlider() {
   if (document.querySelector('.product__images')) {
      $('.product__main-image').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         asNavFor: '.product__bottop-images',
         responsive: [
            {
               breakpoint: 1130,
               settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
               }
            },
            ]
       });
       $('.product__bottop-images').slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         asNavFor: '.product__main-image',
         dots: true,
         centerMode: true,
         focusOnSelect: true,
         arrows: false, 
         responsive: [
            {
               breakpoint: 1024,
                  settings: "unslick"
            }
         ]
       });
   }

}

export default cardSlider;