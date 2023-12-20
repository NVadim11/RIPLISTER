const loginTitle = document.getElementById("loginTitle");
const registerTitle = document.getElementById("registerTitle");
const firstName = document.getElementById("popupAuthForm__firstName");
const lastName = document.getElementById("popupAuthForm__lastName");
const email = document.getElementById("popupAuthForm__email");
const password = document.getElementById("popupAuthForm__password"); 
const form = document.getElementById("popupAuthForm");
const passRecover = document.querySelector(".popupAuthForm__passRecover");
const loginBtn = document.querySelector(".popupAuthForm__loginBtn");
const registerBtn = document.querySelector(".popupAuthForm__registerBtn");
const closeModal = document.querySelector(".popupAuthForm__close");

const invalidInformation = document.querySelector(".popupAuthForm__invalidInformation");
const invalidUser = document.querySelector(".popupAuthForm__invalidUser");

const successMsg = document.querySelector(".popupAuthForm__successMsg");


// login/register toggle
// function registerToggler() {
//         registerTitle.addEventListener("click", function() {
//             loginTitle.classList.add("notActiveForm");
//             registerTitle.classList.remove("notActiveForm");
//             firstName.style.display = "block";
//             lastName.style.display = "block";
//             registerBtn.style.display = "block";
//             loginBtn.style.display = "none";
//             passRecover.style.display = "none";    
//         })
//     };
// function loginToggler() {        
//             loginTitle.classList.remove("notActiveForm");
//             registerTitle.classList.add("notActiveForm");
//             firstName.style.display = "none";
//             lastName.style.display = "none";
//             registerBtn.style.display = "none";
//             loginBtn.style.display = "block";
//             passRecover.style.display = "block";
//         };

// loginTitle.addEventListener("click", function() {loginToggler()}); 
// registerTitle.addEventListener("click", function() {registerToggler()});

// function login() {
//     let emailInput = email.value;
//     let passwordInput = password.value;

//     let userFound = usersDB.users.find(user => user.email === emailInput && user.password === passwordInput)

//     if (!userFound) {
//         invalidUser.classList.add("show_errorMsg");
//     } else if (emailInput === "" || passwordInput === "") {
//         invalidInformation.classList.add("show_errorMsg");
//     }
//     else {
//         invalidInformation.classList.remove("show_errorMsg");
//         invalidUser.classList.remove("show_errorMsg");
//         console.log("Login Success");
//         console.log(userFound)
//     }
// }

// function register() {
//     let firstNameInput = (firstName.value.trim()).charAt(0).toUpperCase() + (firstName.value.trim()).slice(1).toLowerCase();
//     let lastNameInput =  (lastName.value.trim()).charAt(0).toUpperCase() + (lastName.value.trim()).slice(1).toLowerCase();
//     let emailInput = email.value.trim();
//     let passwordInput = password.value.trim();

//     console.log({firstNameInput, lastNameInput, emailInput, passwordInput});
// }

const validateFirstName = (inputFirstName) => inputFirstName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);
const validateLastName = (inputLastName) => inputLastName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);
const validateEmail = (inputEmail) => inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

// if (firstName) {
//     firstName.addEventListener("focusout", (e)=>{
//         firstName.style.border = "0.125rem solid #F00";
//         if(!validateFirstName(firstName)){   
//             document.querySelector(".fNameError").style.display = "block";
//         } else {
//             firstName.style.border = "0.0625rem solid #EC6041";
//         }
//     });
//     firstName.addEventListener("focusin", (e) => {
//         document.querySelector(".fNameError").style.display = "none";
//     });
// }
// if (lastName) {
//     lastName.addEventListener("focusout", (e)=>{
//         lastName.style.border = "0.125rem solid #F00";
//         if(!validateLastName(lastName)){           
//             document.querySelector(".lNameError").style.display = "block";
//         } else {
//             lastName.style.border = "0.0625rem solid #EC6041";
//         }
//     });
//     lastName.addEventListener("focusin", (e) => {
//         document.querySelector(".lNameError").style.display = "none";
//     });
// }
// if (email) {
//     email.addEventListener("focusout", (e)=>{
//         email.style.border = "0.125rem solid #F00";
//         if(!validateEmail(email)){           
//            document.querySelector(".emailError").style.display = "block";
//         } else {
//             email.style.border = "0.0625rem solid #EC6041";
//         }
//     });
//     email.addEventListener("focusin", (e)=>{ 
//             document.querySelector(".emailError").style.display = "none";   
//     });
// }

// if (password) {
//     password.addEventListener("focusout", (e)=>{
//         password.style.border = "0.125rem solid #F00";
//         if(!validatePassword(password) && password.value.length === 0 ) {          
//           document.querySelector(".passwordError").style.display = "block";
//         } else {
//             password.style.border = "0.0625rem solid #EC6041";
//         }
//     });
//     password.addEventListener("focusin", (e)=>{    
//             document.querySelector(".passwordError").style.display = "none";           
//     });
// }

// if (form) {
//     form.addEventListener("submit",(e) => {
//         e.preventDefault();
//         if (loginTitle.classList.contains("notActiveForm") === true) {
//             register();
//             loginToggler();
//         } else {
//             login();
//         }                
//         e.target.reset();
//         loginToggler();
//     });
// };

// const validateForm = (formSelector, callback) => {
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
//             attribute: "pattern",
//             isValid: input => {
//                 const patternRegex = new RegExp(input.pattern);
//                 return patternRegex.test(input.value);
//             },
//         }

//     ]

//     const validateSingleFormGroup = formGroup => {
//         const input = formGroup.querySelector("input")
//         const errorIcon = formGroup.querySelector(".inputError")

//         let formGroupError = false;
//         for(const option of validationOptions) {
//             if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
//                 input.style.border = "0.125rem solid #F00";    
//                 errorIcon.style.display = "block";  
//                 formGroupError = true;
//             }
//         }
//         if (!formGroupError) {
//             input.style.border = "0.0625rem solid #EC6041";
//             errorIcon.style.display = "none"; 
//         }
//         return !formGroupError;
//     }

//     formElement.setAttribute("novalidate", "");

//     Array.from(formElement.elements).forEach(element => {
//         element.addEventListener("blur", event => {
//             validateSingleFormGroup(event.srcElement.parentElement);
//         })
//     })

//     const validateAllFormGroups = formToValidate => {
//     const formGroups = Array.from(formToValidate.querySelectorAll(".popupAuthForm__input-group"))

//     return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
//     };    

//     formElement.addEventListener("submit", event => {
//         event.preventDefault();
//         const formValid = validateAllFormGroups(formElement)
//         if (formValid) {  
//         console.log("form is valid");
//         callback(formElement);
//         }
//     })
// };

// const sendToAPI = (formElement) => {
//     const formObject = Array.from(formElement.elements)
//     .filter(element => element.type !=="submit")
//     .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});
//     console.log(formObject);
//     // Submitting to API
// };

// if (registerTitle.classList.contains("notActiveForm")) {
//     validateForm("#popupAuthForm__form", login);
// } else {
//     validateForm("#popupAuthForm__form", sendToAPI);
// };