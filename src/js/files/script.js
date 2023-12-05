// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
import changeLng from "./translations.js"
// Підключення списку активних модулів
// Constants
const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const profilePicture = document.getElementById("profilePicture");
const profilePictureInput = document.getElementById("profilePictureInput");
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



// Profile picture upload/save to localStorage
//     if (!localStorage.getItem("profilePictureInput")) {
//         profilePicture.setAttribute("src", "img/profile-placeholder.png")
//     } else {        
//         profilePicture.setAttribute("src", localStorage.getItem("profilePictureInput"))
//     }

// profilePictureInput.addEventListener("change", (e) => {
//     const image = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(image);
//     reader.addEventListener("load", () => {
//         localStorage.setItem("profilePictureInput", reader.result)       
//     if (!localStorage.getItem("profilePictureInput")) {
//         profilePicture.setAttribute("src", "img/profile-placeholder.png")
//     } else {        
//         profilePicture.setAttribute("src", localStorage.getItem("profilePictureInput"))
//     }    
//     });    
// })