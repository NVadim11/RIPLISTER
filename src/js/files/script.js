// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
// Підключення списку активних модулів
// Constants

// const currentPage = location.href.split( '/' )[3].slice(0, -5);

const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const detailCoverImg = document.querySelector('.detail__coverImg');
const detailHeaderTitle = document.querySelector('.detail__header-title');
const detailDate = document.querySelector('.detail__header-date');
const detailDescr = document.querySelector('.detail__header-descr');
const detailHeader = document.querySelector('.detail__header');

// Main header burger menu
if (mainMenuBtn) {
    const menu = document.querySelector(".menu");
    mainMenuBtn.addEventListener("click", function(e) {
        menu.classList.add("_active");
        menuOpen()        
    });
};
// Alt header burger menu
if (altMenuBtn) {
    const menu = document.querySelector(".menu");
    altMenuBtn.addEventListener("click", function(e) {
        menu.classList.add("_active");
        menuOpen()        
    });
};
if (menuCloseBtn) {
    const menu = document.querySelector(".menu");
    menuCloseBtn.addEventListener("click", function(e) {
        menu.classList.remove("_active");
        menuClose()       
    });
};

if (detailCoverImg) {
    detailHeaderTitle.classList.add("colorWhite");
    detailDate.classList.add("colorWhite");
    detailDescr.classList.add("colorWhite");
    detailHeader.style.padding = '18rem 0 3.75rem';
}