const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsList = document.querySelector("#ingredients");

const setIngredientsList = ingredients.map((ingredientName) => {
	let liElement = document.createElement("li");
	liElement.textContent = ingredientName;
	return liElement;
});

ingredientsList.append(...setIngredientsList);