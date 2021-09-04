const inputEl = document.querySelector("#validation-input");
const validSymbolsNumber = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
	// inputEl.value.length >= validSymbolsNumber ? inputEl.className = "valid" : inputEl.className = "invalid";
	// can't choose
	if (inputEl.value.length >= validSymbolsNumber && inputEl.value.length !== 0) {
		inputEl.className = "valid";
	} else if (inputEl.value.length < validSymbolsNumber && inputEl.value.length !== 0) {
		inputEl.className = "invalid";
	} else {
		inputEl.className = "";
	}
});
