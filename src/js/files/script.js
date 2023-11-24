// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
import changeLng from "./languages.js"
// Підключення списку активних модулів
// Constants
const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const langMenuBtn = document.querySelector('.headerAlt__langBtn');
const langMenu = document.querySelector('.promo__langMenu');
const langUABtn = document.querySelector('.uaBtn');
const langENBtn = document.querySelector('.enBtn');
const langImg = document.getElementById("langImg");
const promoUaVid = document.getElementById("promo__uaVideo");
const promoEnVid = document.getElementById("promo__enVideo");
const userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
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
// Language detection
function languageDetection() {    
    if (userLang === "en") {
        langImg.src = "img/en.svg";
    } else {
        langImg.src = "img/ua.svg";
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "en") {
        promoEnVid.style.display = "flex";
        promoUaVid.style.display = "none";
        
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "ua") {
        promoEnVid.style.display = "none";
        promoUaVid.style.display = "flex";       
    }
}
languageDetection();

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

// Language img toggle
function changeToUA() {    
    let currentImg = langImg.src;
    let uaFlag = "img/ua.svg";
 
    let newImg = currentImg = uaFlag;
 
    langImg.src = newImg;
    promoUaVid.style.display = "flex";
    promoEnVid.style.display = "none";
    localStorage.setItem('userImageChoice', newImg);
 }
 function changeToEN() {    
     let currentImg = langImg.src;
     let enFlag = "img/en.svg";
  
     let newImg = currentImg = enFlag
  
     langImg.src = newImg;
     promoEnVid.style.display = "flex";
     promoUaVid.style.display = "none";
     localStorage.setItem('userImageChoice', newImg);
  }

 // Promo language switcher logic
langUABtn.addEventListener("click", function(e){
    e.stopPropagation();
    langMenu.classList.remove('block'); 
    langMenuBtn.classList.remove('toggleLangBtn');
    changeToUA();
    changeLng("ua");
})

langENBtn.addEventListener("click", function(e){
    e.stopPropagation();
    langMenu.classList.remove('block'); 
    langMenuBtn.classList.remove('toggleLangBtn');
    changeToEN();
    changeLng("en");
})

document.addEventListener('DOMContentLoaded', function() {
    let storedChoice = localStorage.getItem('userImageChoice');
    if (storedChoice) {
        document.getElementById('langImg').src = storedChoice;
    }
    console.log(localStorage)
});