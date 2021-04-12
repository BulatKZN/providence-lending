  
const burgerEl = document.querySelector('.header-menu-block-burger');

const mobileMenu = document.querySelector(".mobile-menu");

burgerEl.addEventListener('click', function(){
    if(burgerEl.classList.contains("active")) {
        burgerEl.classList.remove("active");
        mobileMenu.classList.remove("active");
    }else {
        burgerEl.classList.add('active');
        mobileMenu.classList.add('active');
    };
})

