import changeLng from "./translations.js"
/* Promo Page */
const langMenuBtn = document.querySelector('.langMenuBtn');
const langMenu = document.querySelector('.langMenu');
const langUABtn = document.querySelector('.uaBtn');
const langENBtn = document.querySelector('.enBtn');
const langImg = document.getElementById("langImg");
const uaVid = document.querySelector("uaVideo");
const enVid = document.querySelector("enVideo");
const uaLink = document.querySelector("uaLink");
const enLink = document.querySelector("enLink");

/* Promo Page */
// const langMenuBtn = document.querySelector('.headerAlt__langBtn');
// const langMenu = document.querySelector('.promo__langMenu');
// const langUABtn = document.querySelector('.uaBtn');
// const langENBtn = document.querySelector('.enBtn');
// const langImg = document.getElementById("langImg");
// const promoUaVid = document.getElementById("promo__uaVideo");
// const promoEnVid = document.getElementById("promo__enVideo");
// const promoUaLink = document.getElementById("promo__uaLink");
// const promoEnLink = document.getElementById("promo__enLink");

const urlProfile = 'http://../profile.html';
const pathnameProfile = new URL(urlProfile).pathnameProfile.slice(1);
const currentPageProfile = location.href.split( '/' )[3];
if (pathnameProfile === currentPageProfile) {
  languageDetection();
}

// const urlPromo = 'http://../promo.html';
// const pathnamePromo= new URL(urlPromo).pathnamePromo.slice(1);
// const currentPagePromo = location.href.split( '/' )[3];
// if (pathnamePromo === currentPagePromo) {
//   languageDetection();
// }


  function languageDetection() {    
    const userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    if (userLang === "en") {
        // langImg.src = "img/en.svg";
        langImg.src = "../html/img/en.svg";
        promoEnVid.style.display = "flex";
        promoUaVid.style.display = "none"; 
        promoEnLink.style.display = "flex";
        promoUaLink.style.display = "none";   
    } else {
        // langImg.src = "img/ua.svg";
        langImg.src = "../html/img/ua.svg";
        promoEnVid.style.display = "none";
        promoUaVid.style.display = "flex";  
        promoUaLink.style.display = "flex";    
        promoEnLink.style.display = "none"; 
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "en") {
        promoEnVid.style.display = "flex";
        promoUaVid.style.display = "none";         
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "ua") {
        promoEnVid.style.display = "none";
        promoUaVid.style.display = "flex";        
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "en") {
        promoEnLink.style.display = "flex";
        promoUaLink.style.display = "none";           
    }
    if (localStorage.getItem('i18nextLng').slice(0, 2) === "ua") {
        promoUaLink.style.display = "flex";    
        promoEnLink.style.display = "none";        
    }
  }
  languageDetection();


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

  function changeToUA() {    
    let currentImg = langImg.src;
    // let uaFlag = "img/ua.svg";
    let uaFlag = "../html/img/ua.svg";

    let newImg = currentImg = uaFlag;

    langImg.src = newImg;

    promoUaVid.style.display = "flex";
    promoEnVid.style.display = "none";
    promoUaLink.style.display = "flex";
    promoEnLink.style.display = "none";
    localStorage.setItem('userImageChoice', newImg);
  }
  function changeToEN() {    
     let currentImg = langImg.src;
    //  let enFlag = "img/en.svg";
     let enFlag = "../html/img/en.svg";

     let newImg = currentImg = enFlag

     langImg.src = newImg;

     promoEnVid.style.display = "flex";
     promoUaVid.style.display = "none";
     promoEnLink.style.display = "flex";
     promoUaLink.style.display = "none";

     localStorage.setItem('userImageChoice', newImg);
  }

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
    if (storedChoice) {
        document.getElementById('langImg').src = storedChoice;
    }
  });
