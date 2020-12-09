
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 700);
    
}

$('.faq-content').slick({
    dots: true
});
jQuery(function($){
    $('.zvonok__input').mask('+7-999-999-99-99');
    $('.phone-inp').mask('8-999-999-99-99');
});
//Позвонить............................................
let zvonok = $("#zvonok");
let crest = $("#crest");
let zvonokbtn = $("#zvonokbtn");
let zvonbur = $("#zvonbur");

zvonokbtn.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
crest.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
zvonbur.on("click", function(event){
    event.preventDefault();
    zvonok.toggleClass("show");
});
//Бургер................................................
let burbut = $("#burbut");
let burger = $("#burger");

burbut.on("click", function(event){
    event.preventDefault();
    burger.toggleClass("show");
});

