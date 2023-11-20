// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
// Підключення списку активних модулів
// Constants
const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const langMenuBtn = document.querySelector('.headerAlt__langBtn');
const langMenu = document.querySelector('.promo__langMenu');
const radioBtnHuman = document.querySelector(".searchTypeBtn_human");
const radioBtnCemetery = document.querySelector(".searchTypeBtn_cemetery");
const radioBtnHumanText = document.querySelector(".searchType_human");
const radioBtnCemeteryText = document.querySelector(".searchType_cemetery");
const newsYearBtn = document.querySelector(".year");

// Main header burger menu
if (mainMenuBtn) {
    const menu = document.querySelector(".menu");
    mainMenuBtn.addEventListener("click", function(e) {
        menu.classList.add("_active");
        menuOpen()        
    });
}
// Alt header burger menu
if (altMenuBtn) {
    const menu = document.querySelector(".menu");
    altMenuBtn.addEventListener("click", function(e) {
        menu.classList.add("_active");
        menuOpen()        
    });
}
if (menuCloseBtn) {
    const menu = document.querySelector(".menu");
    menuCloseBtn.addEventListener("click", function(e) {
        menu.classList.remove("_active");
        menuClose()       
    });
}

// Promo language menu toggle
langMenuBtn.addEventListener("click", function(e){ 
  e.stopPropagation(); 
  langMenu.classList.toggle('block');
  langMenuBtn.classList.toggle('toggleLangBtn');
});

  document.addEventListener('click', function (event) { 
    if (event.target !== langMenu) { 
        langMenu.classList.remove('block'); 
        langMenuBtn.classList.remove('toggleLangBtn');
    } 
});