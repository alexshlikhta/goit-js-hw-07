const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const outputElOldText = document.querySelector("#name-output").textContent;

inputEl.addEventListener("input", () => {
	inputEl.value === "" ? (outputEl.textContent = outputElOldText) : (outputEl.textContent = inputEl.value);
});
