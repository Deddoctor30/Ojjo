function catalogSlider() {
   if (document.querySelector('.catalog__form')) {
   $('.catalog__form').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      adaptiveHeight: true,
      arrows: false,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 716,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 544,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }
  ]
   });
   }

}

export default catalogSlider;