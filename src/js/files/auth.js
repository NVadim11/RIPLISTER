const loginTitle = document.getElementById("loginTitle");
const registerTitle = document.getElementById("registerTitle");
const loginFormContent = document.getElementById("loginFormContent");
const registerFormContent = document.getElementById("registerFormContent");

const invalidInformation = document.querySelector(".popupAuthForm__invalidInformation");
const invalidUser = document.querySelector(".popupAuthForm__invalidUser");
const successMsg = document.querySelector(".popupAuthForm__successMsg");

const inputItem = document.querySelectorAll(".popupAuthForm__input");
const inputErrorIcon = document.querySelectorAll(".inputError");

import usersDB from "../JSON/accounts.json"
console.log(usersDB.users);

function formStylesReset() {
    invalidInformation.style.display = "none";
    invalidUser.style.display = "none";  
    inputItem.forEach((input) => input.style.border = "0.0625rem solid #EC6041");   
    inputErrorIcon.forEach((icon) => icon.style.display = "none");
}

// login/register toggle
function registerToggler() {       
        loginTitle.classList.add("notActiveForm");
        registerTitle.classList.remove("notActiveForm");
        loginFormContent.style.display = "none";
        registerFormContent.style.display = "flex"; 
        formStylesReset();
    };
function loginToggler() {        
        loginTitle.classList.remove("notActiveForm");
        registerTitle.classList.add("notActiveForm");
        loginFormContent.style.display = "flex";
        registerFormContent.style.display = "none";
        formStylesReset();
    };

loginTitle.addEventListener("click", function() {loginToggler()}); 
registerTitle.addEventListener("click", function() {registerToggler()});

const validateForm = (formSelector, callback) => {
    const formElement = document.querySelector(formSelector);

    const validationOptions = [
        {
            attribute: "minlength",
            isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10)        
            },
        {
            attribute: "required",
            isValid: input => input.value.trim() !== "",
            },
        {
            attribute: "pattern",
            isValid: input => {
                const patternRegex = new RegExp(input.pattern);
                return patternRegex.test(input.value);
            },
        }

    ]

    const validateSingleFormGroup = formGroup => {
        const input = formGroup.querySelector("input")
        const errorIcon = formGroup.querySelector(".inputError")

        let formGroupError = false;
        for(const option of validationOptions) {
            if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
                input.style.border = "0.125rem solid #F00";    
                errorIcon.style.display = "block";  
                formGroupError = true;
            }
        }
        if (!formGroupError) {
            input.style.border = "0.0625rem solid #EC6041";
            errorIcon.style.display = "none"; 
        }
        return !formGroupError;
    }

    Array.from(formElement.elements).forEach(element => {
        element.addEventListener("blur", event => {
            validateSingleFormGroup(event.srcElement.parentElement);
        })
    })

    const validateAllFormGroups = formToValidate => {
    const formGroups = Array.from(formToValidate.querySelectorAll(".popupAuthForm__input-group"))

    return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
    };    

    formElement.addEventListener("submit", event => {      
        event.preventDefault();  
        const formValid = validateAllFormGroups(formElement)
        if (formValid) {  
        invalidInformation.style.display = "none";
        invalidUser.style.display = "none";    
        callback(formElement);
        event.target.reset();
        } else {
            invalidInformation.style.display = "flex";
        }
    })
};

const register = (formElement) => {
    const formObject = Array.from(formElement.elements)
    .filter(element => element.type !=="submit")
    .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});
    console.log(formObject);
    // Submitting to API
};

function login(formElement) {
    const formObject = Array.from(formElement.elements)
    .filter(element => element.type !=="submit")
    .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});

    let userFound = usersDB.users.find(user => user.email === formObject.popupAuthForm__email && user.password === formObject.popupAuthForm__password)

    if (!userFound) {
        invalidUser.style.display = "flex";
    } else if (formObject.popupAuthForm__email === "" || formObject.popupAuthForm__password === "") {
        invalidInformation.style.display = "flex";
    }
    else {
        invalidInformation.style.display = "none";
        invalidUser.style.display = "none";
        console.log("Login Success");
        console.log(userFound)
    }
}


validateForm("#popupAuthForm__registerForm", register);
validateForm("#popupAuthForm__loginForm", login);

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

// const validateFirstName = (inputFirstName) => inputFirstName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);
// const validateLastName = (inputLastName) => inputLastName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);
// const validateEmail = (inputEmail) => inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
// // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
// const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

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

