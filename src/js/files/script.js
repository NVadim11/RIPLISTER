// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Constants

const menuBtn = document.querySelector('.headerMain__menuBtn');
const menuClose = document.querySelector('.menu__closeBtn');
const contactBtn = document.querySelector(".footer__contactBtn");
const contactModalClose = document.querySelector(".contactModal__closeBtn");

// Burger menu
if (menuBtn) {
    const menu = document.querySelector('.menu');
    menuBtn.addEventListener("click", function(e) {
        menu.classList.add('_active');
        // document.documentElement.classList.add("menu-open");
    });
}
if (menuClose) {
    const menu = document.querySelector('.menu');
    menuClose.addEventListener("click", function(e) {
        menu.classList.remove('_active');
        // document.documentElement.classList.add("menu-open");
    });
}

// Contact us 
if (contactBtn) {
    const contactForm = document.querySelector(".contactModal");
    contactBtn.addEventListener("click", function(e) {
        contactForm.classList.add('_active');
    });
}
if(contactModalClose) {
    const contactForm = document.querySelector(".contactModal");
    contactModalClose.addEventListener("click", function(e) {
        contactForm.classList.remove('_active');
    });
}
