// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js";
import { flsModules } from "./modules.js";
// Підключення списку активних модулів
// Constants

// const currentPage = location.href.split( '/' )[3].slice(0, -5);

const contactFormComponent = document.getElementById("contactFormComponent");
const submitContactBtn = document.getElementById("contactFormSubmit");
const contactErrMsg = document.querySelector(".contactForm__errorMsg");

const headerMain = document.querySelector(".header");
const mainMenuBtn = headerMain.querySelector(".menu-toggle");
const menuCloseBtn = document.querySelector(".menu__closeBtn");
const detailCoverImg = document.querySelector(".detail__coverImg");
const detailHeaderTitle = document.querySelector(".detail__header-title");
const detailDate = document.querySelector(".detail__header-date");
const detailDescr = document.querySelector(".detail__header-descr");
const detailHeader = document.querySelector(".detail__header");

const volunteerPage = document.querySelector(".volunteerPage");

// Main header burger menu
if (mainMenuBtn) {
	const menu = document.querySelector(".menu");
	mainMenuBtn.addEventListener("click", function (e) {
		menu.classList.add("_active");
		menuOpen();
	});
}
if (menuCloseBtn) {
	const menu = document.querySelector(".menu");
	menuCloseBtn.addEventListener("click", function (e) {
		menu.classList.remove("_active");
		menuClose();
	});
}

if (detailCoverImg) {
	detailHeaderTitle.classList.add("colorWhite");
	detailDate.classList.add("colorWhite");
	detailDescr.classList.add("colorWhite");
	detailHeader.style.padding = "18rem 0 3.75rem";
}

if (volunteerPage) {
	headerMain.style.background = "#fff8f6";
}

// Contact form
if (contactFormComponent) {
	function validateForm(formSelector, callback) {
		const formElement = document.querySelector(formSelector);

		const validationOptions = [
			{
				attribute: "minlength",
				inputIsValid: (input) =>
					input.value && input.value.length >= parseInt(input.minLength, 10),
				textareaIsValid: (textarea) =>
					textarea.value && textarea.value.length >= parseInt(textarea.minLength, 10),
			},
			{
				attribute: "required",
				inputIsValid: (input) => input.value.trim() !== "",
				textareaIsValid: (textarea) => textarea.value.trim() !== "",
			},
			{
				attribute: "ignore",
				inputIsValid: (input) => input.value.trim() == "",
			},
			{
				attribute: "pattern",
				inputIsValid: (input) => {
					const patternRegex = new RegExp(input.pattern);
					return patternRegex.test(input.value);
				},
			},
		];

		const validateSingleFormGroup = (formGroup) => {
			const input = formGroup.querySelector("input");
			const textarea = formGroup.querySelector("textarea");
			let formGroupError = false;
			for (const option of validationOptions) {
				if (input) {
					if (input.hasAttribute(option.attribute) && !option.inputIsValid(input)) {
						input.classList.add("validationError");
						input.style.border = "2px solid #FF0000";
						contactErrMsg.style.display = "flex";
						formGroupError = true;
					}
					if (!formGroupError || input.hasAttribute("ignore")) {
						input.classList.remove("validationError");
						input.style.border = "0.0625rem solid #ec6041";
						contactErrMsg.style.display = "none";
						formGroupError = false;
					}
				}
				if (textarea) {
					if (
						textarea.hasAttribute(option.attribute) &&
						!option.textareaIsValid(textarea)
					) {
						textarea.classList.add("validationError");
						textarea.style.border = "2px solid #FF0000";
						contactErrMsg.style.display = "flex";
						formGroupError = true;
					}
					if (!formGroupError || textarea.hasAttribute("ignore")) {
						textarea.classList.remove("validationError");
						textarea.style.border = "0.0625rem solid #ec6041";
						contactErrMsg.style.display = "none";
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
				formToValidate.querySelectorAll(".contactForm__form-input")
			);

			return formGroups.every((formGroup) => validateSingleFormGroup(formGroup));
		};

		if (submitContactBtn)
			submitContactBtn.addEventListener("click", (event) => {
				event.preventDefault();
				const formValid = validateAllFormGroups(formElement);
				if (formValid) {
					callback(formElement);
				}
			});
	}
	function submitContactFormData(formElement) {
		const formObject = Array.from(formElement.elements)
			.filter((element) => element.type !== "submit")
			.reduce(
				(accumulator, element) => ({ ...accumulator, [element.id]: element.value }),
				{}
			);
		// Submitting to API
		console.log(formObject);
		formElement.reset();

		// логика вызова попапа по дата атрибуту - пригодиться в любой форме
		setTimeout(() => {
			if (flsModules.popupContact) {
				const popup = document.getElementById("contactsForm").dataset.popupMessage;
				popup ? flsModules.popupContact.open(popup) : null;
			}
		}, 0);
	}
	if (contactFormComponent) {
		validateForm("#contactsForm", submitContactFormData);
	}
}

// Main Search Form

const mainSearchForm = document.getElementById("mainSearchForm");

if (mainSearchForm) {
	const inputs = mainSearchForm.querySelectorAll(".base-input");
	const button = document.getElementById("searchButton");
	const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
	const errMsgs = mainSearchForm.querySelectorAll(".errMsg");

	// Display error messages
	errMsgs.forEach((msg) => {
		msg.innerHTML = msg.dataset.errorMsg;
	});

	// Validation handler function
	function validateInput(input, pattern) {
		function handleKeydown(e) {
			if (!pattern.test(e.key) && !allowedKeys.includes(e.key)) {
				e.preventDefault();
				showError(input, true);
			} else {
				showError(input, false);
			}
		}

		function handleBlur() {
			const value = input.value.trim();
			if (value === "" || pattern.test(value)) {
				showError(input, false);
			} else {
				showError(input, true);
			}
		}

		input.addEventListener("focus", () => {
			input.addEventListener("keydown", handleKeydown);
		});

		input.addEventListener("blur", () => {
			input.removeEventListener("keydown", handleKeydown);
			handleBlur();
		});
	}

	// Show or hide error message
	function showError(input, hasError) {
		const errMsg = input.nextElementSibling;
		if (hasError) {
			errMsg.style.display = "block";
			input.style.outline = "1px solid #FF0000";
		} else {
			errMsg.style.display = "none";
			input.style.outline = "none";
		}
	}

	// Text and number input patterns
	const textPattern = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/i;
	const numberPattern = /^[0-9]+$/;

	// Apply validation for text and number inputs
	const textInputs = mainSearchForm.querySelectorAll("[data-text-input]");
	const numberInputs = mainSearchForm.querySelectorAll("[data-number-input]");

	textInputs.forEach((input) => validateInput(input, textPattern));
	numberInputs.forEach((input) => validateInput(input, numberPattern));

	// Button state handling
	function updateButtonState() {
		const isFilled = Array.from(inputs).some((input) => input.value.trim() !== "");
		button.disabled = !isFilled;
	}

	// Check button state on input
	inputs.forEach((input) => {
		input.addEventListener("input", updateButtonState);
	});

	// Initial button state check
	updateButtonState();

	// Form submit
	mainSearchForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const formData = {};

		inputs.forEach((input) => {
			formData[input.name] = input.value.trim();
		});

		// Form Data
		console.log("Form Submitted:", formData);

		fetch("/server-endpoint", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("Server Response:", data);
			})
			.catch((error) => {
				// console.error("Error:", error);
			});

		// Reset the form
		mainSearchForm.reset();
		updateButtonState();
	});
}
