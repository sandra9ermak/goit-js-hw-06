const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArr = ingredients.map(item => {
  const createElem = document.createElement('li');
  createElem.textContent = item;
  createElem.classList.add('item');
  return createElem;
})
document.querySelector('#ingredients').append(...newArr);

console.log(newArr);