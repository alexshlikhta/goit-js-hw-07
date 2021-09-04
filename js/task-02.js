const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((el) => {
	ingredientsList.appendChild(document.createElement("li")).innerText = el;
});
