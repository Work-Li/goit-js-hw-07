const allCategories = document.querySelectorAll('.item');
console.log(`В списке ${allCategories.length} категории.`);
 

allCategories.forEach(categoria => console.log(`Категория: ${categoria.firstElementChild.textContent}
Количество элементов: ${categoria.lastElementChild.children.length}`)
);


