const email = document.getElementById("popupLoginForm__email");
const password = document.getElementById("popupLoginForm__password"); 
const form = document.getElementById("popupLoginForm");
const closeModal = document.querySelector(".popupLoginForm__close");

const emailReq = document.querySelector(".popupLoginForm__emailReq")
const emailValid = document.querySelector(".popupLoginForm__emailValid");
const passReq = document.querySelector(".popupLoginForm__passReq");
const invalidUser = document.querySelector(".popupLoginForm__invalidUser");

const successMsg = document.querySelector(".popupLoginForm__successMsg");

import usersDB from "../JSON/accounts.json"
console.log(usersDB.users);

// const users = [
		// {
		// 	"id": 1,
		// 	"first_name": "John",
		// 	"last_name": "Doe",
		// 	"email": "johndoe@gmail.com",
		// 	"username": "john20",
		// 	"password": "Johntest123"
		// },
		// {
		// 	"id": 2,
		// 	"first_name": "Julia",
		// 	"last_name": "Chan",
		// 	"email": "juliachan@gmail.com",
		// 	"username": "julia19",
		// 	"password": "Juliatest123"
		// }
// 	]

function login() {
    let emailInput = email.value;
    let passwordInput = password.value;

    let userFound = usersDB.users.find(user => user.email === emailInput && user.password === passwordInput)

    if (userFound) {
        console.log("Login Success");
        console.log(userFound)
    }
    else {
        invalidUser.classList.toggle("show_errorMsg");
    }
}

// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

// Validation example Password123, at least one Upper case and one number.
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

// сделать проверку по языку для сообщений 
function formValidate (inputEmail, inputPassword) {
    if(!validateEmail(inputEmail)){
        return;
    }
    if(!validatePassword(inputPassword)){
        return;
    }
}

// Function used to display errors
// function generateError() {

    // if(errorName == "email"){
    //     emailError.innerText = errorMsg;    
    // }
    
    // else if(errorName == "password"){
    //     passwordError.innerText = errorMsg;
    // } 
    // else if(errorName == "invalidUser") {
    //     userError.innerHTML = errorMsg;
    // }
// }

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){

    }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password) && password.value.length === 0 ) {

    }
});

// FocusIn event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusin", (e)=>{
    if(!validateEmail(email)){

    }
});

// FocusIn event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusin", (e)=>{
    if(!validatePassword(password)){      
 
    }
});

//triggers when user submits the form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
    login();
    e.target.reset();
});
