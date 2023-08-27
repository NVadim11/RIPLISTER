// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Burger menu
const menuBtn = document.querySelector('.headerMain__menuBtn');
const menuClose = document.querySelector('.menu__close');
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