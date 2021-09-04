const categoriesNumber = document.querySelector("#categories").children.length;
const categoriesGroups = document.querySelectorAll(".item");

console.log(`В списке ${categoriesNumber} категории.`);

categoriesGroups.forEach((el) => {
	console.log(
		"\n",
		`Категория: ${el.querySelector("h2").textContent}`,
		"\n",
		`Количество элементов: ${el.querySelectorAll("li").length}`
	);
});
