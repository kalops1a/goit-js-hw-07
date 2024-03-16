const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');
const categoryCount = categoryItems.length;

console.log('Number of categories:', categoryCount);
categoryItems.forEach(category => {
     const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName} `)
    console.log(`Elements: ${itemCount}`)
})