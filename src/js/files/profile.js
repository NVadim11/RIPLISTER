// import { menuClose, menuOpen } from "./functions.js"

import usersDB from "../JSON/accounts.json";

//Constants
const personalsEditForm = document.getElementById("personalsEdit__form");

const profilePictureInput = document.getElementById("profilePictureInput");
const profileEditPictureInput = document.getElementById("profileEditPictureInput");

const editValidationMsg = document.querySelector(".personalsEdit__invalidInformation");
const editBusyNickname = document.querySelector(".personalsEdit__busyNickname");
const invalidNickname = document.querySelector(".personalsEdit__invalidNickname");
const editBusyEmail = document.querySelector(".personalsEdit__busyEmail");
const editBusyNumber = document.querySelector(".personalsEdit__busyNumber");
const editCurrPass = document.querySelector(".personalsEdit__currPassErr");
const editNewPass = document.querySelector(".personalsEdit__newPassErr");
const editRepeatPass = document.querySelector(".personalsEdit__repeatPassErr");

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
	personalsEditImage.addEventListener("click", function (e) {
		e.preventDefault();
		profileEditPictureInput.click();
	});
	profileEditPictureInput.addEventListener("change", function (e) {
		e.preventDefault();
		const image = this.files[0];
		console.log(image);
		if (image.size < 1000000) {
			const reader = new FileReader();
			reader.onload = () => {
				const allImg = persolalsEditPhotoBox.querySelectorAll("img");
				allImg.forEach((item) => item.remove());
				const imgUrl = reader.result;
				const img = document.createElement("img");
				img.src = imgUrl;
				persolalsEditPhotoBox.appendChild(img);
				console.log(img);
			};
			reader.readAsDataURL(image);
		} else {
			alert("Image size must be less than 1MB");
		}
	});
}

// show hide password
function toggleDisplaySVG(elementID) {
	(function (style) {
		style.display = style.display === "none" ? "" : "none";
	})(document.getElementById(elementID).style);
}

if (showPass) {
	showPass.addEventListener("click", function (e) {
		const type = currentPassword.getAttribute("type") === "password" ? "text" : "password";
		currentPassword.setAttribute("type", type);
		toggleDisplaySVG("passHiddenSVG");
	});
}

if (showNewPass) {
	showNewPass.addEventListener("click", function (e) {
		const type = newPassword.getAttribute("type") === "password" ? "text" : "password";
		newPassword.setAttribute("type", type);
		toggleDisplaySVG("newPassHiddenSVG");
	});
}

if (showRepeatPass) {
	showRepeatPass.addEventListener("click", function (e) {
		const type = repreatPassword.getAttribute("type") === "password" ? "text" : "password";
		repreatPassword.setAttribute("type", type);
		toggleDisplaySVG("repeatPassHiddenSVG");
	});
}

// show hide state
if (editBtn) {
	editBtn.addEventListener("click", function (e) {
		personalsEditWrapper.classList.add("_active");
		personalsWrapper.classList.add("_hide");
	});
}

if (closeEditBtn) {
	closeEditBtn.addEventListener("click", function (e) {
		personalsEditWrapper.classList.remove("_active");
		personalsWrapper.classList.remove("_hide");
	});
}

// form validate
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
			attribute: "ignore",
			isValid: (input) => input.value.trim() == "",
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
		let formGroupError = false;
		for (const option of validationOptions) {
			if (input) {
				if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
					input.classList.add("validationError");
					input.style.borderColor = "#FF0000";
					editValidationMsg.style.display = "flex";
					formGroupError = true;
				}
				if (!formGroupError || input.hasAttribute("ignore")) {
					input.classList.remove("validationError");
					input.style.border = "0.0625rem solid #AAA";
					editValidationMsg.style.display = "none";
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
			formToValidate.querySelectorAll(".personalsEdit__input-field")
		);

		return formGroups.every((formGroup) => validateSingleFormGroup(formGroup));
	};

	if (saveBtn)
		saveBtn.addEventListener("click", (event) => {
			event.preventDefault();
			const formValid = validateAllFormGroups(formElement);
			if (formValid) {
				callback(formElement);
			}
		});
}

if (document.getElementById("personalsEdit__nickname")) {
	document.getElementById("personalsEdit__nickname").addEventListener("change", (e) => {
		const input = document.getElementById("personalsEdit__nickname").value;
		if (input.match(/^[a-zA-Z0-9]*$/i)) {
			invalidNickname.style.display = "none";
		} else {
			invalidNickname.style.display = "flex";
		}
	});
}

function savePersonalData(formElement) {
	const formObject = Array.from(formElement.elements)
		.filter((element) => element.type !== "submit" && element.type !== "label")
		.reduce((accumulator, element) => ({ ...accumulator, [element.id]: element.value }), {});

	if (usersDB.users.find((user) => user.nickname === formObject.personalsEdit__nickname)) {
		editBusyNickname.style.display = "flex";
		document.getElementById("personalsEdit__nickname").classList.add("validationError");
		document.getElementById("personalsEdit__nickname").focus();
		return false;
	} else {
		editBusyNickname.style.display = "none";
	}

	if (usersDB.users.find((user) => user.email === formObject.personalsEdit__email)) {
		editBusyEmail.style.display = "flex";
		document.getElementById("personalsEdit__email").classList.add("validationError");
		document.getElementById("personalsEdit__email").focus();
		return false;
	} else {
		editBusyEmail.style.display = "none";
	}

	if (usersDB.users.find((user) => user.phone_numbr === formObject.personalsEdit__phone)) {
		editBusyNumber.style.display = "flex";
		document.getElementById("personalsEdit__phone").classList.add("validationError");
		document.getElementById("personalsEdit__phone").focus();
		return false;
	} else {
		editBusyNumber.style.display = "none";
	}

	if (
		document.getElementById("personalsEdit__newPass").value !==
		document.getElementById("personalsEdit__repeatPass").value
	) {
		document.getElementById("personalsEdit__repeatPass").focus();
		document.querySelector(".personalsEdit__repeatPassErr").style.display = "flex";
		return false;
	} else {
		document.querySelector(".personalsEdit__repeatPassErr").style.display = "none";
	}
	console.log(formObject);
	// Submitting to API
}

if (personalsEditForm) {
	validateForm("#personalsEdit__form", savePersonalData);
}

// Модуль роботи з табами =======================================================================================================================================================================================================================
// export function tabs() {
// 	const tabs = document.querySelectorAll('[data-tabs]');
// 	let tabsActiveHash = [];

// 	if (tabs.length > 0) {
// 		const hash = getHash();
// 		if (hash && hash.startsWith('tab-')) {
// 			tabsActiveHash = hash.replace('tab-', '').split('-');
// 		}
// 		tabs.forEach((tabsBlock, index) => {
// 			tabsBlock.classList.add('_tab-init');
// 			tabsBlock.setAttribute('data-tabs-index', index);
// 			tabsBlock.addEventListener("click", setTabsAction);
// 			initTabs(tabsBlock);
// 		});

// 		// Отримання слойлерів з медіа-запитами
// 		let mdQueriesArray = dataMediaQueries(tabs, "tabs");
// 		if (mdQueriesArray && mdQueriesArray.length) {
// 			mdQueriesArray.forEach(mdQueriesItem => {
// 				// Подія
// 				mdQueriesItem.matchMedia.addEventListener("change", function () {
// 					setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
// 				});
// 				setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
// 			});
// 		}
// 	}
// 	// Встановлення позицій заголовків
// 	function setTitlePosition(tabsMediaArray, matchMedia) {
// 		tabsMediaArray.forEach(tabsMediaItem => {
// 			tabsMediaItem = tabsMediaItem.item;
// 			let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
// 			let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
// 			let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
// 			let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
// 			tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
// 			tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
// 			tabsContentItems.forEach((tabsContentItem, index) => {
// 				if (matchMedia.matches) {
// 					tabsContent.append(tabsTitleItems[index]);
// 					tabsContent.append(tabsContentItem);
// 					tabsMediaItem.classList.add('_tab-spoller');
// 				} else {
// 					tabsTitles.append(tabsTitleItems[index]);
// 					tabsMediaItem.classList.remove('_tab-spoller');
// 				}
// 			});
// 		});
// 	}
// 	// Робота з контентом
// 	function initTabs(tabsBlock) {
// 		let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
// 		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
// 		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
// 		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

// 		if (tabsActiveHashBlock) {
// 			const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
// 			tabsActiveTitle ? tabsActiveTitle.classList.remove('_tab-active') : null;
// 		}
// 		if (tabsContent.length) {
// 			//tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
// 			//tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
// 			tabsContent.forEach((tabsContentItem, index) => {
// 				tabsTitles[index].setAttribute('data-tabs-title', '');
// 				tabsContentItem.setAttribute('data-tabs-item', '');

// 				if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
// 					tabsTitles[index].classList.add('_tab-active');
// 				}
// 				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
// 			});
// 		}
// 	}
// 	function setTabsStatus(tabsBlock) {
// 		let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
// 		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
// 		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
// 		function isTabsAnamate(tabsBlock) {
// 			if (tabsBlock.hasAttribute('data-tabs-animate')) {
// 				return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
// 			}
// 		}
// 		const tabsBlockAnimate = isTabsAnamate(tabsBlock);
// 		if (tabsContent.length > 0) {
// 			const isHash = tabsBlock.hasAttribute('data-tabs-hash');
// 			tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
// 			tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
// 			tabsContent.forEach((tabsContentItem, index) => {
// 				if (tabsTitles[index].classList.contains('_tab-active')) {
// 					if (tabsBlockAnimate) {
// 						_slideDown(tabsContentItem, tabsBlockAnimate);
// 					} else {
// 						tabsContentItem.hidden = false;
// 					}
// 					if (isHash && !tabsContentItem.closest('.popup')) {
// 						setHash(`tab-${tabsBlockIndex}-${index}`);
// 					}
// 				} else {
// 					if (tabsBlockAnimate) {
// 						_slideUp(tabsContentItem, tabsBlockAnimate);
// 					} else {
// 						tabsContentItem.hidden = true;
// 					}
// 				}
// 			});
// 		}
// 	}
// 	function setTabsAction(e) {
// 		const el = e.target;
// 		if (el.closest('[data-tabs-title]')) {
// 			const tabTitle = el.closest('[data-tabs-title]');
// 			const tabsBlock = tabTitle.closest('[data-tabs]');
// 			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
// 				let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
// 				tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
// 				tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
// 				tabTitle.classList.add('_tab-active');
// 				setTabsStatus(tabsBlock);
// 			}
// 			e.preventDefault();
// 		}
// 	}
// }
