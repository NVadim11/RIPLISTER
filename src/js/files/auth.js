const loginTitle = document.getElementById("loginTitle");
const registerTitle = document.getElementById("registerTitle");
const loginFormContent = document.getElementById("loginFormContent");
const registerFormContent = document.getElementById("registerFormContent");

const formContent = document.querySelector(".popupAuthForm__formContent");
const invalidInformation = document.querySelector(".popupAuthForm__invalidInformation");
const invalidUser = document.querySelector(".popupAuthForm__invalidUser");
const successMsg = document.querySelector(".popupAuthForm__successMsg");

const inputItem = document.querySelectorAll(".popupAuthForm__input");
const inputErrorIcon = document.querySelectorAll(".inputError");

import usersDB from "../JSON/accounts.json"
console.log(usersDB.users);

export function formStylesReset() {
    invalidInformation.style.display = "none";
    invalidUser.style.display = "none";  
    inputItem.forEach((input) => input.style.border = "0.0625rem solid #EC6041");   
    inputErrorIcon.forEach((icon) => icon.style.display = "none");
}

export function formContentReset() {
    document.querySelector(".popupAuthForm__invalidInformation").style.display = "none";
    document.querySelector(".popupAuthForm__invalidUser").style.display = "none";	
    document.getElementById("popupAuthForm__loginForm").reset();		
    document.getElementById("popupAuthForm__registerForm").reset();	
}

// login/register toggle
function registerToggler() {       
        loginTitle.classList.add("notActiveForm");
        registerTitle.classList.remove("notActiveForm");
        loginFormContent.style.display = "none";
        registerFormContent.style.display = "flex"; 
        formStylesReset();
        formContentReset()
    };
function loginToggler() {        
        loginTitle.classList.remove("notActiveForm");
        registerTitle.classList.add("notActiveForm");
        loginFormContent.style.display = "flex";
        registerFormContent.style.display = "none";
        formStylesReset();
        formContentReset()
    };

function successToggler() {
    invalidInformation.style.display = "none";
    invalidUser.style.display = "none";
    formContent.style.display = "none";
    successMsg.style.display = "flex";
}

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
        successToggler();
        console.log("Login Success");
        console.log(userFound)
    }
}


validateForm("#popupAuthForm__registerForm", register);
validateForm("#popupAuthForm__loginForm", login);
