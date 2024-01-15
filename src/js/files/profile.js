// import { menuClose, menuOpen } from "./functions.js"

import usersDB from "../JSON/accounts.json"

//Constants
const personalsEditForm = document.getElementById("personalsEdit__form");

const profilePictureInput = document.getElementById("profilePictureInput");
const profileEditPictureInput = document.getElementById("profileEditPictureInput");

const editBusyNickname = document.querySelector(".personalsEdit__busyNickname");
const editBusyEmail = document.querySelector(".personalsEdit__busyEmail");
const editBusyNumber = document.querySelector(".personalsEdit__busyNumber");
const editCurrPass = document.querySelector(".personalsEdit__currPass");
const editNewPass = document.querySelector(".personalsEdit__newPass");
const editRepeatPass = document.querySelector(".personalsEdit__repeatPass");

const personalsImage = document.querySelector(".personals__uploadBtn");
const personalsEditImage = document.querySelector(".personalsEdit__uploadBtn");
const persolalsEditPhotoBox = document.querySelector(".personalsEdit__photoBox");

const editBtn = document.querySelector(".profile__editBox");
const personalsEditWrapper = document.querySelector(".profile__personals-editWrapper");
const personalsWrapper = document.querySelector(".profile__personals-wrapper");
const closeEditBtn = document.querySelector(".personalsEdit__button-close");
const saveBtn = document.querySelector(".personalsEdit__button-save");

// const passInput = document.querySelector(".personalsEdit__input");
const currentPassword = document.getElementById("personalsEdit__currentPass");
const newPassword = document.getElementById("personalsEdit__newPass");
const repreatPassword = document.getElementById("personalsEdit__repeatPass");

const showPass = document.querySelector(".personalsEdit__showPass");
const showNewPass = document.querySelector(".personalsEdit__showNewPass");
const showRepeatPass = document.querySelector(".personalsEdit__showRepeatPass");

// Photo upload

if (personalsEditImage) {
    personalsEditImage.addEventListener("click", function(e) {
        e.preventDefault();
        profileEditPictureInput.click();
    })
    profileEditPictureInput.addEventListener("change", function(e) {
        e.preventDefault();
        const image = this.files[0]
        console.log(image);
        if(image.size < 1000000) {
            const reader = new FileReader();
        reader.onload = () => {
            const allImg = persolalsEditPhotoBox.querySelectorAll("img");
            allImg.forEach(item => item.remove());            
            const imgUrl = reader.result;
            const img = document.createElement("img");
            img.src = imgUrl;
            persolalsEditPhotoBox.appendChild(img);    
            console.log(img);  
        }
        reader.readAsDataURL(image);
        } else {
            alert("Image size must be less than 1MB");
        }    
    })
}

// show hide password
function toggleDisplaySVG(elementID) {
    (function(style) {
        style.display = style.display === 'none' ? '' : 'none';
    })
    (document.getElementById(elementID).style);
    };

if (showPass) {
    showPass.addEventListener("click", function (e) {
        const type = currentPassword.getAttribute("type") === "password" ? "text" : "password";
        currentPassword.setAttribute("type", type);
        toggleDisplaySVG("passHiddenSVG");
    });
};

if (showNewPass) {
    showNewPass.addEventListener("click", function (e) {
        const type = newPassword.getAttribute("type") === "password" ? "text" : "password";
        newPassword.setAttribute("type", type);
        toggleDisplaySVG("newPassHiddenSVG");
    });
};

if (showRepeatPass) {
    showRepeatPass.addEventListener("click", function (e) {
        const type = repreatPassword.getAttribute("type") === "password" ? "text" : "password";
        repreatPassword.setAttribute("type", type);
        toggleDisplaySVG("repeatPassHiddenSVG");
    });
};

// show hide state
if (editBtn) {
    editBtn.addEventListener("click", function (e) {
        personalsEditWrapper.classList.add("_active");
        personalsWrapper.classList.add("_hide");
    })
}

if (closeEditBtn) {
    closeEditBtn.addEventListener("click", function (e) {
        personalsEditWrapper.classList.remove("_active");
        personalsWrapper.classList.remove("_hide");
    })
}

// form validate

function validateForm (formSelector, callback) {
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
            attribute: "ignore",
            isValid: input => input.value.trim() == "",
            },
        {
            attribute: "pattern",
            isValid: input => {
                const patternRegex = new RegExp(input.pattern);
                return patternRegex.test(input.value);
            },
        }
    ];

    const validateSingleFormGroup = (formGroup) => {
        const input = formGroup.querySelector("input")
        // const errorIcon = formGroup.querySelector(".inputError")

        let formGroupError = false;
        for(const option of validationOptions) {
            if (input) {
                if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
                    input.style.border = "0.125rem solid #F00";    
                    // errorIcon.style.display = "block";  
                    formGroupError = true;
                }
                if (!formGroupError || input.hasAttribute("ignore")) {
                    input.style.border = "0.0625rem solid #AAA";
                    formGroupError = false;
                    // errorIcon.style.display = "none"; 
                }
            }              
        }
        return !formGroupError;
    };

    Array.from(formElement.elements).forEach(element => {
        element.addEventListener("blur", event => {
            validateSingleFormGroup(event.srcElement.parentElement);
        })
    })

    const validateAllFormGroups = formToValidate => {
    const formGroups = Array.from(formToValidate.querySelectorAll(".personalsEdit__input-field"))

    return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
    };    

    if (saveBtn)
    saveBtn.addEventListener("click", event => {
        event.preventDefault();  
        const formValid = validateAllFormGroups(formElement)
        if (formValid) {  
            callback(formElement);
        }
})
};

function savePersonalData (formElement) {
    const formObject = Array.from(formElement.elements)
    .filter(element => element.type !=="submit" && element.type !=="label")
    .reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});

    if (usersDB.users.find(user => user.nickname === formObject.personalsEdit__nickname)){
        editBusyNickname.style.display = "flex";}
        else {
            editBusyNickname.style.display = "none";
        }

    if (usersDB.users.find(user => user.email === formObject.personalsEdit__email)){
        editBusyEmail.style.display = "flex";}
        else {
            editBusyEmail.style.display = "none";
        }

    if (usersDB.users.find(user => user.phone_numbr === formObject.personalsEdit__phone)){
        editBusyNumber.style.display = "flex";} 
        else {
            editBusyNumber.style.display = "none";
        }       

    console.log(formObject);
    // Submitting to API    
};

if(personalsEditForm) {
    validateForm("#personalsEdit__form", savePersonalData);
};