const categoriesList = document.querySelectorAll('li.item');
const listLenght = categoriesList.length;

console.log(`Number of categories: ${listLenght}`);

categoriesList.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.getElementsByTagName('li').length}`);
});
