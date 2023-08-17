// Selecteaza elementul <ul> cu id-ul "categories"
const categoriesLIst = document.querySelector('#categories');

// Gaseste toate elementele <li> cu clasa "item" din lista de categorii
const categoryItems = categoriesLIst.querySelectorAll('.item');

// Numara si afisează numarul total de categorii
console.log(`Number of categories: ${categoryItems.length}`);

// Parcurge fiecare element li.item și afisează informatiile așteptate
categoryItems.forEach((category) => {
    // Găseste titlul categoriei (tag-ul <h2>)
    const categoryName = category.querySelector('h2').textContent;
  
    // Gaseste toate elementele <li> din categoria curentă
    const categoryElements = category.querySelectorAll('li');
  
    // Afisează titlul categoriei și numărul de elemente din acea categorie
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
  });
  
  
  
  
  
  
  