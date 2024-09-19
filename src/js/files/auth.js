const loginTitle = document.getElementById("loginTitle");
const registerTitle = document.getElementById("registerTitle");
const loginFormContent = document.getElementById("loginFormContent");
const registerFormContent = document.getElementById("registerFormContent");
const passwordRecovery = document.getElementById("passwordRecovery");

const invalidEmail = document.querySelector(".popupAuthForm__invalidEmail");
const logErrorMsg = document.querySelector(".popupAuthForm__logErrorMsg");
const regErrorMsg = document.querySelector(".popupAuthForm__regErrorMsg");

const formContent = document.querySelector(".popupAuthForm__formContent");
const invalidUser = document.querySelector(".popupAuthForm__invalidUser");
const successMsg = document.querySelector(".popupAuthForm__successMsg");
const successRegMsg = document.querySelector(".popupAuthForm__successRegMsg");
const passRecoveryForm = document.querySelector(".popupAuthForm__passRecoveryForm");
const passRecoveryMsg = document.querySelector(".popupAuthForm__recoveryMsg");

const currentLogPassword = document.getElementById("popupAuthForm__loginPassword");
const currentRegPassword = document.getElementById("popupAuthForm__regPassword");
const repeatRegPassword = document.getElementById("popupAuthForm__repeatRegPassword");
const showLogPass = document.querySelector(".popupAuthForm__showLoginPass");
const showRegPass = document.querySelector(".popupAuthForm__showPass");
const showRepeatRegPass = document.querySelector(".popupAuthForm__showRepeatPass");
const passMatchErr = document.querySelector(".popupAuthForm__repeatPassErr");
const registerBusyMail = document.querySelector(".popupAuthForm__busyEmail");

const regBtn = document.querySelector(".popupAuthForm__registerBtn");

const inputItem = document.querySelectorAll(".popupAuthForm__input");
const inputErrorIcon = document.querySelectorAll(".inputError");

import usersDB from "../JSON/accounts.json";
console.log(usersDB.users);

export function formStylesReset() {
	if (regErrorMsg) {
		regErrorMsg.style.display = "none";
	}
	if (invalidEmail) {
		invalidEmail.style.display = "none";
	}
	if (logErrorMsg) {
		logErrorMsg.style.display = "none";
	}
	if (invalidUser) {
		invalidUser.style.display = "none";
	}
	if (passMatchErr) {
		passMatchErr.style.display = "none";
	}
	currentLogPassword.setAttribute("type", "password");
	currentRegPassword.setAttribute("type", "password");
	repeatRegPassword.setAttribute("type", "password");
	document.getElementById("loginPassHiddenSVG").style.display = "block";
	document.getElementById("passHiddenSVG").style.display = "block";
	document.getElementById("repeatPassHiddenSVG").style.display = "block";
	inputItem.forEach((input) => (input.style.border = "0.0625rem solid #EC6041"));
	inputErrorIcon.forEach((icon) => (icon.style.display = "none"));
}

export function formContentReset() {
	if (regErrorMsg) {
		regErrorMsg.style.display = "none";
	}
	if (invalidEmail) {
		invalidEmail.style.display = "none";
	}
	if (logErrorMsg) {
		logErrorMsg.style.display = "none";
	}
	if (invalidUser) {
		invalidUser.style.display = "none";
	}
	if (passMatchErr) {
		passMatchErr.style.display = "none";
	}
	currentLogPassword.setAttribute("type", "password");
	currentRegPassword.setAttribute("type", "password");
	repeatRegPassword.setAttribute("type", "password");
	document.getElementById("loginPassHiddenSVG").style.display = "block";
	document.getElementById("passHiddenSVG").style.display = "block";
	document.getElementById("repeatPassHiddenSVG").style.display = "block";
	document.getElementById("popupAuthForm__loginForm").reset();
	document.getElementById("popupAuthForm__registerForm").reset();
}

export function formStateReset() {
	if (passRecoveryForm) {
		passRecoveryForm.style.display = "none";
	}
	if (successMsg) {
		successMsg.style.display = "none";
	}
	if (successRegMsg) {
		successRegMsg.style.display = "none";
	}
	if (passRecoveryMsg) {
		passRecoveryMsg.style.display = "none";
	}
	loginTitle.classList.remove("notActiveForm");
	registerTitle.classList.add("notActiveForm");
	loginFormContent.style.display = "flex";
	registerFormContent.style.display = "none";
}

// login/register toggle
function registerToggler() {
	loginTitle.classList.add("notActiveForm");
	registerTitle.classList.remove("notActiveForm");
	loginFormContent.style.display = "none";
	registerFormContent.style.display = "flex";
	formStylesReset();
	formContentReset();
}
function loginToggler() {
	loginTitle.classList.remove("notActiveForm");
	registerTitle.classList.add("notActiveForm");
	loginFormContent.style.display = "flex";
	registerFormContent.style.display = "none";
	formStylesReset();
	formContentReset();
}
function successToggler() {
	regErrorMsg.style.display = "none";
	invalidEmail.style.display = "none";
	logErrorMsg.style.display = "none";
	invalidUser.style.display = "none";
	formContent.style.display = "none";
	passMatchErr.style.display = "none";
	successMsg.style.display = "flex";
}
function successRegToggler() {
	regErrorMsg.style.display = "none";
	invalidEmail.style.display = "none";
	logErrorMsg.style.display = "none";
	invalidUser.style.display = "none";
	formContent.style.display = "none";
	passMatchErr.style.display = "none";
	successRegMsg.style.display = "flex";
}
function passRecoverySentToggler() {
	regErrorMsg.style.display = "none";
	invalidEmail.style.display = "none";
	logErrorMsg.style.display = "none";
	passRecoveryForm.style.display = "none";
	passMatchErr.style.display = "none";
	passRecoveryMsg.style.display = "flex";
}

if (passwordRecovery) {
	passwordRecovery.addEventListener("click", () => {
		regErrorMsg.style.display = "none";
		invalidEmail.style.display = "none";
		logErrorMsg.style.display = "none";
		invalidUser.style.display = "none";
		formContent.style.display = "none";
		passMatchErr.style.display = "none";
		passRecoveryForm.style.display = "flex";
	});
}

// show hide password
function toggleDisplaySVG(elementID) {
	(function (style) {
		style.display = style.display === "none" ? "" : "none";
	})(document.getElementById(elementID).style);
}

if (showLogPass) {
	showLogPass.addEventListener("click", function (e) {
		const type = currentLogPassword.getAttribute("type") === "password" ? "text" : "password";
		currentLogPassword.setAttribute("type", type);
		toggleDisplaySVG("loginPassHiddenSVG");
	});
}

if (showRegPass) {
	showRegPass.addEventListener("click", function (e) {
		const type = currentRegPassword.getAttribute("type") === "password" ? "text" : "password";
		currentRegPassword.setAttribute("type", type);
		toggleDisplaySVG("passHiddenSVG");
	});
}

if (showRepeatRegPass) {
	showRepeatRegPass.addEventListener("click", function (e) {
		const type = repeatRegPassword.getAttribute("type") === "password" ? "text" : "password";
		repeatRegPassword.setAttribute("type", type);
		toggleDisplaySVG("repeatPassHiddenSVG");
	});
}

loginTitle.addEventListener("click", function () {
	loginToggler();
});
registerTitle.addEventListener("click", function () {
	registerToggler();
});

function validateForm(formSelector, callback) {
	const formElement = document.querySelector(formSelector);

	const validationOptions = [
		{
			attribute: "minlength",
			isValid: (input) => input.value && input.value.length >= parseInt(input.minLength, 10),
		},
		{
			attribute: "required",
			isValid: (input) => input.value.trim() !== "",
		},
		{
			attribute: "pattern",
			isValid: (input) => {
				const patternRegex = new RegExp(input.pattern);
				return patternRegex.test(input.value);
			},
		},
	];

	const validateSingleFormGroup = (formGroup) => {
		const input = formGroup.querySelector("input");
		const errorIcon = formGroup.querySelector(".inputError");

		let formGroupError = false;
		for (const option of validationOptions) {
			if (input) {
				if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
					input.style.borderColor = "#FF0000";
					input.classList.add("validationError");
					errorIcon.style.display = "block";
					regErrorMsg.style.display = "flex";
					invalidEmail.style.display = "flex";
					logErrorMsg.style.display = "flex";
					formGroupError = true;
				}
				if (!formGroupError) {
					input.style.border = "0.0625rem solid #EC6041";
					input.classList.remove("validationError");
					errorIcon.style.display = "none";
					regErrorMsg.style.display = "none";
					invalidEmail.style.display = "none";
					logErrorMsg.style.display = "none";
					formGroupError = false;
				}
			}
		}
		return !formGroupError;
	};

	Array.from(formElement.elements).forEach((element) => {
		element.addEventListener("blur", (event) => {
			validateSingleFormGroup(event.srcElement.parentElement);
		});
	});

	const validateAllFormGroups = (formToValidate) => {
		const formGroups = Array.from(
			formToValidate.querySelectorAll(".popupAuthForm__input-group")
		);

		return formGroups.every((formGroup) => validateSingleFormGroup(formGroup));
	};

	formElement.addEventListener("submit", (event) => {
		event.preventDefault();
		const formValid = validateAllFormGroups(formElement);
		if (formValid) {
			invalidUser.style.display = "none";
			callback(formElement);
		} else {
			return false;
		}
	});
}

function register(formElement) {
	const formObject = Array.from(formElement.elements)
		.filter((element) => element.type !== "submit")
		.reduce((accumulator, element) => ({ ...accumulator, [element.id]: element.value }), {});

	if (regBtn) {
		regBtn.addEventListener("click", function (e) {
			e.preventDefault();
			if (usersDB.users.find((user) => user.email === formObject.popupAuthForm__email)) {
				registerBusyMail.style.display = "flex";
				regErrorMsg.style.display = "none";
				return false;
			} else {
				registerBusyMail.style.display = "none";
			}
		});
	}

	if (regBtn) {
		regBtn.addEventListener("click", function (e) {
			e.preventDefault();
			if (
				document.getElementById("popupAuthForm__regPassword").value !==
				document.getElementById("popupAuthForm__repeatRegPassword").value
			) {
				passMatchErr.style.display = "flex";
				return false;
			} else {
				passMatchErr.style.display = "none";
			}
			successRegToggler();
			console.log(formObject);
			// Submitting to API
		});
	}
}

function login(formElement) {
	const formObject = Array.from(formElement.elements)
		.filter((element) => element.type !== "submit")
		.reduce((accumulator, element) => ({ ...accumulator, [element.id]: element.value }), {});

	let userFound = usersDB.users.find(
		(user) =>
			user.email === formObject.popupAuthForm__email &&
			user.password === formObject.popupAuthForm__password
	);

	if (!userFound) {
		invalidUser.style.display = "flex";
	} else {
		successToggler();
		console.log(userFound);
	}
}

function passRecovery(formElement) {
	const formObject = Array.from(formElement.elements)
		.filter((element) => element.type !== "submit")
		.reduce((accumulator, element) => ({ ...accumulator, [element.id]: element.value }), {});
	passRecoverySentToggler();
	console.log(formObject);
	// Submitting to API
}

if (registerFormContent) {
	validateForm("#popupAuthForm__registerForm", register);
}
if (loginFormContent) {
	validateForm("#popupAuthForm__loginForm", login);
}
if (passRecoveryForm) {
	validateForm("#popupAuthForm__passRecoveryForm", passRecovery);
}
