const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Selectează elementul <ul> cu id-ul "ingredients"
const ingredientsList = document.querySelector('#ingredients');

// Creează și adaugă elementele <li> în lista de ingrediente
ingredients.forEach((ingredient) => {
 
  // Creează un element <li>
  const liElement = document.createElement('li');
  
  // Adaugă clasa "item" la elementul <li>
  liElement.classList.add('item');
  
  // Adaugă textul ingredientului în elementul <li>
  liElement.textContent = ingredient;

  // Adaugă elementul <li> în lista de ingrediente
  ingredientsList.appendChild(liElement);
});
