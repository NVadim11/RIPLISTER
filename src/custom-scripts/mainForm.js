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
			// input.style.borderColor = "1px solid green";
		} else {
			errMsg.style.display = "none";
			// input.style.borderColor = "";
		}
	}

	// Text and number input patterns
	const textPattern = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'’]+$/i;
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
				console.error("Error:", error);
			});

		// Reset the form
		mainSearchForm.reset();
		updateButtonState();
	});
}
