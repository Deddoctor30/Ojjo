function cardSlider() {
   if (document.querySelector('.product__images')) {
      $('.product__main-image').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         // fade: false,
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
            // {
            //    breakpoint: 716,
            //    settings: {
            //    slidesToShow: 1,
            //    slidesToScroll: 1,
            //    dots: true
            //    }
            // },
            // {
            //    breakpoint: 544,
            //    settings: {
            //    slidesToShow: 2,
            //    slidesToScroll: 2,
            //    dots: true
            //    }
            // }
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

      // $('.product__main-image').slick({
      //    dots: false,
      //    infinite: true,
      //    speed: 300,
      //    slidesToShow: 6,
      //    adaptiveHeight: true,
      //    arrows: false,
      //    responsive: [
      // {
      //    breakpoint: 1024,
      //    settings: {
      //    slidesToShow: 4,
      //    slidesToScroll: 2,
      //    infinite: true,
      //    dots: true
      //    }
      // },
      // {
      //    breakpoint: 716,
      //    settings: {
      //    slidesToShow: 3,
      //    slidesToScroll: 2,
      //    dots: true
      //    }
      // },
      // {
      //    breakpoint: 544,
      //    settings: {
      //    slidesToShow: 2,
      //    slidesToScroll: 2,
      //    dots: true
      //    }
      // }
      // ]
      // });
   }

}

export default cardSlider;