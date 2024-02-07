// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
// Підключення списку активних модулів
// Constants

// const currentPage = location.href.split( '/' )[3].slice(0, -5);

const contactFormComponent = document.getElementById("contactFormComponent");
const submitContactBtn = document.getElementById("contactFormSubmit")

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
};

// Contact form
// if (contactFormComponent) {
// function validateForm (formSelector, callback) {
//     const formElement = document.querySelector(formSelector);

//     const validationOptions = [
//         {
//             attribute: "minlength",
//             isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10)        
//             },
//         {
//             attribute: "required",
//             isValid: input => input.value.trim() !== "",
//             },
//         {
//             attribute: "ignore",
//             isValid: input => input.value.trim() == "",
//             },
//         {
//             attribute: "pattern",
//             isValid: input => {
//                 const patternRegex = new RegExp(input.pattern);
//                 return patternRegex.test(input.value);
//             },
//         }
//     ];

//     const validateSingleFormGroup = (formGroup) => {
//         const input = formGroup.querySelector("input")
//         let formGroupError = false;
//         for(const option of validationOptions) {
//             if (input) {
//                 if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
//                     input.classList.add("validationError"); 
//                     input.style.border = "2px solid #FF0000";  
//                     // editValidationMsg.style.display = "flex";  
//                     formGroupError = true;
//                 }
//                 if (!formGroupError || input.hasAttribute("ignore")) {
//                     input.classList.remove("validationError");    
//                     input.style.border = "0.0625rem solid #ec6041";
//                     // editValidationMsg.style.display = "none";  
//                     formGroupError = false;
//                 }
//             }              
//         }
//         return !formGroupError;
//     };

//     // Array.from(formElement.elements).forEach(element => {
//     //     element.addEventListener("blur", event => {
//     //         validateSingleFormGroup(event.srcElement.parentElement);
//     //     })
//     // })

//     const validateAllFormGroups = formToValidate => {
//     const formGroups = Array.from(formToValidate.querySelectorAll(".contactForm__form-inputs"))

//     return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
//     };    

//     if (submitContactBtn)
//     submitContactBtn.addEventListener("click", event => {
//         event.preventDefault();  
//         const formValid = validateAllFormGroups(formElement)
//         if (formValid) {  
//             callback(formElement);
//             }
//         })
//     };
//     function submitContactFormData (formElement) {
//     const formObject = Array.from(formElement.elements)
//     .filter(element => element.type !=="submit" && element.type !=="label")
//     .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});
//     console.log(formObject);
//     // Submitting to API    
//     };
//     if(contactFormComponent) {
//         validateForm("#contactFormComponent", submitContactFormData);
//     };
// };
