const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const addItems = ingredients.map((ingredient) => {
  const addItem = document.createElement("li");
  addItem.textContent = ingredient;
  addItem.classList.add("item");
  return addItem;
});
ingredientsList.append(...addItems);