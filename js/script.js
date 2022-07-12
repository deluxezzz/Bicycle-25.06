var headerNav = document.querySelector('.header__nav');
var burger = document.querySelector('.burger');

if (burger){
    burger.addEventListener("click", function(e){
        headerNav.classList.toggle('_mobile')
        document.body.classList.toggle('_lock');
    });
}