  
const burgerEl = document.querySelector('.header-menu-block-burger');

burgerEl.addEventListener('click', function(){
    if(burgerEl.classList.contains("active")) {
        burgerEl.classList.remove("active");
    }else {
        burgerEl.classList.add('active')
    };
})