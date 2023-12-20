// import { menuClose, menuOpen } from "./functions.js"

const loginTitle = document.getElementById("loginTitle");
const registerTitle = document.getElementById("registerTitle");
const firstName = document.getElementById("popupLoginForm__firstName");
const lastName = document.getElementById("popupLoginForm__lastName");
const email = document.getElementById("popupLoginForm__email");
const password = document.getElementById("popupLoginForm__password"); 
const form = document.getElementById("popupLoginForm");
const passRecover = document.querySelector(".popupLoginForm__passRecover");
const loginBtn = document.querySelector(".popupLoginForm__loginBtn");
const registerBtn = document.querySelector(".popupLoginForm__registerBtn");
const closeModal = document.querySelector(".popupLoginForm__close");

const invalidInformation = document.querySelector(".popupLoginForm__invalidInformation");
const invalidUser = document.querySelector(".popupLoginForm__invalidUser");

const successMsg = document.querySelector(".popupLoginForm__successMsg");

import usersDB from "../JSON/accounts.json"
console.log(usersDB.users);

const validateFirstName = (inputFirstName) => inputFirstName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);

const validateLastName = (inputLastName) => inputLastName.value.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/);

const validateEmail = (inputEmail) => inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

// position: absolute;
// bottom: 60%;
// left: 105%;
// width: 100%;
// color: #3C88F9;
// font-size: 1.25rem;
// font-style: normal;
// font-weight: 600;
// line-height: normal;

if (form) {
    registerTitle.addEventListener("click", function() {
        firstName.style.display = "block";
        lastName.style.display = "block";
        registerBtn.style.display = "block";
        loginBtn.style.display = "none";
        passRecover.style.display = "none";
        loginTitle.classList.add("notActiveForm");
        registerTitle.classList.remove("notActiveForm");
    })
    loginTitle.addEventListener("click", function() {
        firstName.style.display = "none";
        lastName.style.display = "none";
        registerBtn.style.display = "none";
        loginBtn.style.display = "block";
        passRecover.style.display = "block";
        loginTitle.classList.remove("notActiveForm");
        registerTitle.classList.add("notActiveForm");
    })
}

function register() {
    let firstNameInput = (firstName.value.trim()).charAt(0).toUpperCase() + (firstName.value.trim()).slice(1).toLowerCase();
    let lastNameInput =  (lastName.value.trim()).charAt(0).toUpperCase() + (lastName.value.trim()).slice(1).toLowerCase();
    let emailInput = email.value.trim();
    let passwordInput = password.value.trim();

    console.log({firstNameInput, lastNameInput, emailInput, passwordInput});
}

function login() {
    let emailInput = email.value;
    let passwordInput = password.value;

    let userFound = usersDB.users.find(user => user.email === emailInput && user.password === passwordInput)

    if (!userFound) {
        invalidUser.classList.add("show_errorMsg");
    } else if (emailInput === "" || passwordInput === "") {
        invalidInformation.classList.add("show_errorMsg");
    }
    else {
        invalidInformation.classList.remove("show_errorMsg");
        invalidUser.classList.remove("show_errorMsg");
        console.log("Login Success");
        console.log(userFound)
    }
}
if (firstName) {
    firstName.addEventListener("focusout", (e)=>{
        if(!validateFirstName(firstName)){
            firstName.style.border = "2px solid #F00";   
            document.querySelector(".firstNameError").style.display = "block";
        }
    });
    firstName.addEventListener("focusin", (e) => {
        document.querySelector(".firstNameError").style.display = "none";
    });
}
if (lastName) {
    lastName.addEventListener("focusout", (e)=>{
        if(!validateLastName(lastName)){
            lastName.style.border = "2px solid #F00";
            document.querySelector(".lastNameError").style.display = "block";
        }
    });
    lastName.addEventListener("focusin", (e) => {
        document.querySelector(".lastNameError").style.display = "none";
    });
}
if (email) {
    email.addEventListener("focusout", (e)=>{
        if(!validateEmail(email)){
           email.style.border = "2px solid #F00";
           document.querySelector(".emailError").style.display = "block";
        }
    });
    email.addEventListener("focusin", (e)=>{
        if(!validateEmail(email)){     
            document.querySelector(".emailError").style.display = "none";      
        }
    });
}

if (password) {
    password.addEventListener("focusout", (e)=>{
        if(!validatePassword(password) && password.value.length === 0 ) {
          password.style.border = "2px solid #F00";
          document.querySelector(".passwordError").style.display = "block";
        }
    });
    password.addEventListener("focusin", (e)=>{
        if(!validatePassword(password)){ 
            document.querySelector(".passwordError").style.display = "none";   
        }
    });
}

if (loginBtn) {
    form.addEventListener("submit",(e) => {
        e.preventDefault();        
        login();        
        e.target.reset();
    });
}
