const headerNav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');

if (burger){
    burger.addEventListener("click", function(){
        headerNav.classList.toggle('_mobile')
        document.body.classList.toggle('_lock');
    });
}
const navLink = document.querySelectorAll('.header__link');

// if (headerNav.classList.contains('_mobile')){
for (let i=0; i<navLink.length; i++) {
        navLink[i].addEventListener("click", function(){
        headerNav.classList.remove('_mobile')
        document.body.classList.remove('_lock');
    });
// }
}
