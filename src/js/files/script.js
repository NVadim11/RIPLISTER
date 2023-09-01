// Підключення функціоналу "Чертоги Фрілансера"
import { menuOpen, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Constants

const menuBtn = document.querySelector('.headerMain__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const contactBtn = document.querySelector(".footer__contactBtn");
const contactModalClose = document.querySelector(".contactModal__closeBtn");

// Burger menu
if (menuBtn) {
    const menu = document.querySelector('.menu');
    menuBtn.addEventListener("click", function(e) {
        menu.classList.add('_active');
        menuOpen()        
    });
}
if (menuCloseBtn) {
    const menu = document.querySelector('.menu');
    menuCloseBtn.addEventListener("click", function(e) {
        menu.classList.remove('_active');
        menuClose()       
    });
}

// Contact us 
if (contactBtn) {
    const contactForm = document.querySelector(".contactModal");
    contactBtn.addEventListener("click", function(e) {
        contactForm.classList.add('_active');
        menuOpen()
    });
}
if(contactModalClose) {
    const contactForm = document.querySelector(".contactModal");
    contactModalClose.addEventListener("click", function(e) {
        contactForm.classList.remove('_active');
        menuClose()
    });
}
