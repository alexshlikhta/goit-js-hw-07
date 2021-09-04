const inputEl = document.querySelector('input[type="number"]');
const boxesContainer = document.querySelector("#boxes");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
let amount = 0;

function createBoxes(amount) {
	let boxSize = 30;

	for (let i = 0; i < amount; i++) {
		let color = Array.from({ length: 3 }, () => Math.floor(Math.random() * 255)).join(",");

		if (boxesContainer.children.length >= 1) {
			boxSize = parseInt(boxesContainer.lastChild.style.width) + 10;
		}

		let newEl = document.createElement("div");

		newEl.style["width"] = `${boxSize}px`;
		newEl.style["height"] = `${boxSize}px`;
		newEl.style["background-color"] = `rgb(${color})`;
		newEl.style["display"] = "inline-block";
		newEl.style["margin"] = "10px";

		boxesContainer.appendChild(newEl);
	}
}

renderBtn.addEventListener("click", () => {
	amount = parseInt(inputEl.value);
	createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
	boxesContainer.innerHTML = "";
});
