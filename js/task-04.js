let counterValue = 0;

const counterNode = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const totalValue = document.getElementById("value");

function incrementValue(counterValue) {
	counterValue += 1;
	counterNode.textContent = counterValue;
}

function decrementValue(counterValue) {
	counterValue -= 1;
	counterNode.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
	counterValue = parseInt(totalValue.textContent);
	incrementValue(counterValue);
});

decrementBtn.addEventListener("click", () => {
	counterValue = parseInt(totalValue.textContent);
	decrementValue(counterValue);
});
