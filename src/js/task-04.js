let counterValue = 0;

const counterNode = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function incrementValue(counterValue) {
	counterValue += 1;
	counterNode.textContent = counterValue;
}

function decrementValue(counterValue) {
	counterValue -= 1;
	counterNode.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
	counterValue = parseInt(document.getElementById("value").textContent);
	incrementValue(counterValue);
});

decrementBtn.addEventListener("click", () => {
	counterValue = parseInt(document.getElementById("value").textContent);
	decrementValue(counterValue);
});
