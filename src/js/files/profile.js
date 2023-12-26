// import { menuClose, menuOpen } from "./functions.js"

//Constants
const personalsEditForm = document.getElementById("personalsEdit__form");

const editBtn = document.querySelector(".profile__editBox");
const personalsEditWrapper = document.querySelector(".profile__personals-editWrapper");
const personalsWrapper = document.querySelector(".profile__personals-wrapper");
const closeEditBtn = document.querySelector(".personalsEdit__button-close");
const saveBtn = document.querySelector(".personalsEdit__button-save");

const passInput = document.querySelector(".personalsEdit__input");
const showPass = document.querySelector(".personalsEdit__showPass");
const hidePass = document.querySelector(".personalsEdit__hidePass");


// show hide password


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

// if (saveBtn) {
//     saveBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         personalsEditWrapper.classList.remove("_active");
//         personalsWrapper.classList.remove("_hide");
//     })
// }

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
                if (!formGroupError) {
                    input.style.border = "0.0625rem solid #AAA";
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
    console.log(formObject);
    // Submitting to API
};

if(personalsEditForm) {
    validateForm("#personalsEdit__form", savePersonalData);
};