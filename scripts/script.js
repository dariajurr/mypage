const menuBtn = document.querySelector('.header__menu');
const menuPopup = document.querySelector('.header__popup');
const fadeElems = document.querySelectorAll(".has-fade");

const closeMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-in');
        elem.classList.add('fade-out');               
    });    
    menuBtn.classList.remove('active');
};

const openMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-out'); 
        elem.classList.add('fade-in');            
    });
    menuBtn.classList.add('active');
};

menuBtn.addEventListener('click', e => {
    menuBtn.classList.contains('active') ? closeMenuAnimate() : openMenuAnimate();     
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('header__popup-link') || e.target.classList.contains('overlay')) {
        closeMenuAnimate();
    }
})