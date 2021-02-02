$('.content__wrapper-sld').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});
jQuery(function($){
  $('.zvonok__input').mask('+7-999-999-99-99');
});
//Позвонить............................................
let zvonok = $("#zvonok");
let zvonokbtn = $("#zvonokbtn");
let crest =$("#crest");

zvonokbtn.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
crest.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});

//Бургер............................................
let burger = $("#burger");
let cloned = $("#cloned");


burger.on("click", function(event){
    event.preventDefault();
    cloned.toggleClass("cloned__show");
});
