const inputEl = document.querySelector("#validation-input");
const validSymbolsNumber = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
	if (inputEl.value.length === validSymbolsNumber) {
		inputEl.className = "valid";
	} else {
		inputEl.className = "invalid";
	}
});
