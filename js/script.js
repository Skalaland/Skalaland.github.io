$(document).ready(function(){
    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();
    $('.page').addClass('active');
});
jQuery(function($){
  $('.zvonok__input').mask('+7-999-999-99-99');
});
//Позвонить............................................
let zvonok = $("#zvonok");
let zvonokbtn = $("#zvonokbtn");
let crest = $("#crest");
let kontaktsbtn = $("#kontaktsbtn");
let clonzvonokbtn = $("#clonzvonokbtn");

zvonokbtn.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
kontaktsbtn.on("click", function(event){
  event.preventDefault();
  zvonok.toggleClass("show");
});
clonzvonokbtn.on("click", function(event){
  event.preventDefault();
  zvonok.toggleClass("show");
});
crest.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
//Вологда..............................................
let tc = $("#tc");
let plant = $("#plant");
let btn =$("#btn");

plant.on("click", function(event){
    event.preventDefault();
    tc.toggleClass("show");
});
btn.on("click", function(event){
    event.preventDefault();
    tc.toggleClass("show");
});
//Череповец............................................
let tc2 = $("#tc2");
let plant2 = $("#plant2");
let btn2 =$("#btn2");

plant2.on("click", function(event){
    event.preventDefault();
    tc2.toggleClass("show");
});
btn2.on("click", function(event){
    event.preventDefault();
    tc2.toggleClass("show");
});
//Ярославль............................................
let tc3 = $("#tc3");
let plant3 = $("#plant3");
let btn3 =$("#btn3");

plant3.on("click", function(event){
    event.preventDefault();
    tc3.toggleClass("show");
});
btn3.on("click", function(event){
    event.preventDefault();
    tc3.toggleClass("show");
});
//Кострома............................................
let tc4 = $("#tc4");
let plant4 = $("#plant4");
let btn4 =$("#btn4");

plant4.on("click", function(event){
    event.preventDefault();
    tc4.toggleClass("show");
});
btn4.on("click", function(event){
    event.preventDefault();
    tc4.toggleClass("show");
});
//Иваново............................................
let tc5 = $("#tc5");
let plant5 = $("#plant5");
let btn5 =$("#btn5");

plant5.on("click", function(event){
    event.preventDefault();
    tc5.toggleClass("show");
});
btn5.on("click", function(event){
    event.preventDefault();
    tc5.toggleClass("show");
});
//Бургер............................................
let burger = $("#burger");
let cloned = $("#cloned");

burger.on("click", function(event){
    event.preventDefault();
    cloned.toggleClass("cloned__show");
});

//Скроллл.....................
// variables
var $header_top = $('.header-top');
var $nav = $('nav');
// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection','sixedSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
});


///////////////////////////////////////////////////////////////////////////////////////////////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slaider__content");
  var dots = document.getElementsByClassName("sldot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" sldot-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " sldot-active";
}

////////////////////////////////////////////////////////
var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  direction: 'vertical',
  slidesPerView: 'auto',
  autoplay: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  cubeEffect: {
  slideShadows: true,
  shadow: false,
  shadowOffset: 0,
  shadowScale: 0.94,
  },
});

/////////////////////////////////////////////////////////

$('.acktiv__slaider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
$('.acktiv__slaider2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});


