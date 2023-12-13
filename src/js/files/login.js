const email = document.getElementById("popupLoginForm__email");
const password = document.getElementById("popupLoginForm__password"); 
const form = document.getElementById("popupLoginForm");
const successMsg = document.querySelector(".popupLoginForm__successMsg");


const ajaxhttp = new XMLHttpRequest();
const usersDB = "../JSON/accounts.json";

ajaxhttp.open('GET', usersDB, true);
ajaxhttp.setRequestHeader("content-type","application/json");

ajaxhttp.onreadystatechange = function () {
	if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
		const jsonData = JSON.parse(ajaxhttp.responseText);

		document.addEventListener("submit", formValidate);
		
		let i;
		for(i = 0; i < jsonData.users.length; i++) {
            output.innerHTML = jsonData.users[i].first_name + ' ' + jsonData.users[i].last_name;
            // output2.innerHTML = jcontent.users[i].first_name + ' ' + jcontent.users[i].last_name;
            console.log(jsonData.users[i].first_name + ' ' + jsonData.users[i].last_name);
        }

		console.log(jsonData);
        console.log(jsonData.users[0].first_name);
	}
}

ajaxhttp.send(null);
// output.innerHTML = "nothing";


// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function used to display errors
const generateError = (errorName, errorMsg) =>{
    const emailError = document.getElementById("popupLoginForm__emailError");
    const passwordError = document.getElementById("popupLoginForm__passwordError");
    if(errorName == "email"){
        emailError.innerText = errorMsg;    
    }else if(errorName == "password"){
        passwordError.innerText = errorMsg;
    }
}

// сделать проверку по языку для сообщений ошибки
const formValidate = (inputEmail, inputPassword) =>{
    if(!validateEmail(inputEmail)){
        emailError = "please enter a valid email address";
        generateError("email",emailError);
        return;
    }
    if(!validatePassword(inputPassword)){
        passwordError = "please enter correct password";
        generateError(generateError("password",passwordError));
        return;
    }
}

//triggers when user submits the form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
});

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){
        email.style.borderColor = "red";
        generateError("email", "Please enter a valid email");
        email.parentElement.classList.add("error");
    }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password)){
        password.style.borderColor = "red";
        generateError("password", "Please enter a valid password");
        password.parentElement.classList.add("error");
    }
});