// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js";
import { flsModules } from "./modules.js";
import Choices from "choices.js";
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
						input.style.borderColor = "#FF0000";
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

// Selects

const customSearchSelects = document.querySelectorAll(".js-choice");

const customSelectClasses = {
	containerOuter: ["choices", "select-dropdown"],
};

customSearchSelects.forEach((select) => {
	const choices = new Choices(select, {
		allowHTML: true,
		itemSelectText: "",
		searchPlaceholderValue: select.getAttribute("data-search-text"),
		noResultsText: select.getAttribute("data-no-results-text"),
		searchEnabled: select.getAttribute("data-search-enabled") === "true",
		classNames: {
			...customSelectClasses,
		},
	});

	setTimeout(() => {
		choices.choiceList.element.setAttribute("data-simplebar", "");
	}, 0);

	addIconsToSelect(select);
});

// Adding icons function

function addIconsToSelect(select) {
	// Add icons to the custom dropdown
	const leftIconClass = select.getAttribute("data-icon-left");
	const rightIconClass = select.getAttribute("data-icon-right");

	// Locate the custom dropdown generated by the library
	const choicesInner = select.parentElement;

	// Create icon elements and append them
	if (leftIconClass) {
		const leftIcon = document.createElement("i");
		leftIcon.className = leftIconClass;
		choicesInner.insertAdjacentElement("afterbegin", leftIcon);
		choicesInner.classList.add("has-icons-left");
	}

	if (rightIconClass) {
		const rightIcon = document.createElement("i");
		rightIcon.className = rightIconClass;
		choicesInner.insertAdjacentElement("beforeend", rightIcon);
		choicesInner.classList.add("has-icons-right");
	}

	if (rightIconClass || leftIconClass) {
		choicesInner.classList.add("has-icons");
	}
}

// Funerals select filter

function filterSelected(selectElementId, listSelector, limit) {
	const selectElement = document.getElementById(selectElementId);
	let itemsToFilter = Array.from(document.querySelectorAll(listSelector));
	const filterDefaultAmount = parseInt(selectElement.getAttribute("data-default-amount"), 10);
	limit = limit || filterDefaultAmount;

	// Initially show only the first `limit` items
	itemsToFilter.forEach(function (item, index) {
		if (index < limit) {
			item.style.display = "list-item";
		} else {
			item.style.display = "none";
		}
	});

	selectElement.addEventListener("change", function () {
		const selectedOption = this.value;

		// Sort alphabetically by data-value if "all" is selected
		if (selectedOption === "all") {
			itemsToFilter.sort((a, b) => {
				const dataValueA = a.getAttribute("data-value").toLowerCase();
				const dataValueB = b.getAttribute("data-value").toLowerCase();
				return dataValueA.localeCompare(dataValueB);
			});

			// Clear the existing list and append sorted items
			const parentElement = itemsToFilter[0].parentElement;
			parentElement.innerHTML = "";
			itemsToFilter.forEach((item) => parentElement.appendChild(item));
		}

		// Apply filtering based on the selected option
		itemsToFilter.forEach(function (item) {
			if (
				selectedOption === "" ||
				selectedOption === "all" ||
				item.getAttribute("data-value") === selectedOption
			) {
				item.style.display = "list-item";
			} else {
				item.style.display = "none";
			}
		});
	});
}

filterSelected("funeralsSelect", "#funeralList li", 4);
filterSelected("funeralsSelect", "#funeralList li");
