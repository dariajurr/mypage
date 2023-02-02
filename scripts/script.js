const menuBtn = document.querySelector('.header__menu');
const menuPopup = document.querySelector('.header__popup');
const fadeElems = document.querySelectorAll(".has-fade");

const openMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-in');
        elem.classList.add('fade-out');               
    });    
};

const closeMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-out'); 
        elem.classList.add('fade-in');            
    });
};

menuBtn.addEventListener('click', e => {
    menuBtn.classList.contains('active') ? openMenuAnimate() : closeMenuAnimate(); 
    menuBtn.classList.toggle('active');
    
});
