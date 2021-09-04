const controlEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${controlEl.value}px`;

controlEl.addEventListener("input", () => {
	text.style.fontSize = `${controlEl.value}px`;
});
