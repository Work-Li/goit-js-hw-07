const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');
const elements = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  return liEl;
});

ingredientsContainer.append(...elements);

