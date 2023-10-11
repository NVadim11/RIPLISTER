// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
// Підключення списку активних модулів

// Constants
const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const spollerCloseBtn = document.querySelector('.spollerClose')
const radioBtnHuman = document.querySelector(".searchTypeBtn_human");
const radioBtnCemetery = document.querySelector(".searchTypeBtn_cemetery");
const radioBtnHumanText = document.querySelector(".searchType_human")
const radioBtnCemeteryText = document.querySelector(".searchType_cemetery")

// Main header burger menu
if (mainMenuBtn) {
    const menu = document.querySelector('.menu');
    mainMenuBtn.addEventListener("click", function(e) {
        menu.classList.add('_active');
        menuOpen()        
    });
}
// Alt header burger menu
if (altMenuBtn) {
    const menu = document.querySelector('.menu');
    altMenuBtn.addEventListener("click", function(e) {
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
// Instructions spoiler close
if (spollerCloseBtn) {
    const spoller = document.querySelector('.spollers__summary');
    spollerCloseBtn.addEventListener("click", function(e) {
    spoller.classList.remove("_spollers-active")
    });
}

// Contact us modal open
// if (contactBtn) {
//     const contactForm = document.querySelector(".contactModal");
//     contactBtn.addEventListener("click", function(e) {
//         contactForm.classList.add('_active');
//         menuOpen()
//     });
// }
// if(contactModalClose) {
//     const contactForm = document.querySelector(".contactModal");
//     contactModalClose.addEventListener("click", function(e) {
//         contactForm.classList.remove('_active');
//         menuClose()
//     });
// }

// Search type text color
// if (radioBtnHuman) {    
//     radioBtnHuman.addEventListener("click", function(e) {
//         radioBtnCemeteryText.style.color = "var(--text-color-black)"
//         radioBtnHumanText.style.color = "var(--orange-color)"
//     });    
// }

// if (radioBtnCemetery) {    
//     radioBtnCemetery.addEventListener("click", function(e) {
//         radioBtnHumanText.style.color = "var(--text-color-black)"
//         radioBtnCemeteryText.style.color = "var(--orange-color)"
//     });
// }