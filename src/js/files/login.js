const email = document.getElementById("popupLoginForm__email");
const password = document.getElementById("popupLoginForm__password"); 
const form = document.getElementById("popupLoginForm");
const successMsg = document.querySelector(".popupLoginForm__successMsg");
let emailError = document.getElementById("popupLoginForm__emailError");
let passwordError = document.getElementById("popupLoginForm__passwordError");
let userError = document.getElementById("popupLoginForm__invalidUser");

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
        email.parentElement.classList.remove("error");
        password.parentElement.classList.remove("error")
        console.log("Login Success");
        console.log(userFound)
    } else {
        generateError("invalidUser", "Email or password is incorrect");
        email.parentElement.classList.add("error");
        password.parentElement.classList.add("error");
    }
}

// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

// Validation example Password123, at least one Upper case and one number.
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

// сделать проверку по языку для сообщений 
function formValidate (inputEmail, inputPassword) {
    if(!validateEmail(inputEmail)){
        emailError = "please enter a valid email address";
        generateError("email", emailError);
        return;
    }
    if(!validatePassword(inputPassword)){
        console.log("invalid password")
        passwordError = "please enter correct password";
        generateError("password", passwordError);
        return;
    }
}

// Function used to display errors
function generateError(errorName, errorMsg) {
    if(errorName == "email"){
        emailError.innerText = errorMsg;    
    }else if(errorName == "password"){
        passwordError.innerText = errorMsg;
    } else if(errorName == "invalidUser") {
        userError.innerHTML = errorMsg;
    }
}

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){
        generateError("email", "This field is required");
        email.parentElement.classList.add("error");
    }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password)){
        generateError("password", "This field is required");
        password.parentElement.classList.add("error");
    }
});

// FocusIn event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusin", (e)=>{
    if(!validateEmail(email)){
        emailError.innerText = "";    
        userError.innerText = "";
        email.parentElement.classList.remove("error");
    }
});

// FocusIn event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusin", (e)=>{
    if(!validatePassword(password)){      
        passwordError.innerText = "";
        userError.innerText = "";  
        password.parentElement.classList.remove("error");
    }
});

//triggers when user submits the form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
    login();
    e.target.reset();
});