console.log('Part 1.');
console.log('Create an empty array to use as a shopping list')
let shoppingList = [];
console.log('ShoppingList content: ' + shoppingList + '\n');

console.log('Part 2.');
console.log('Add Milk, Bread, and Apples to the shopping list.');
shoppingList.push('Milk', 'Bread', 'Apples');
console.log('ShoppingList content: ' + shoppingList + '\n');

console.log('Part 3.');
console.log('Update Bread with Bananas and Eggs, i.e. replace Bread.')
shoppingList.splice(1, 1, 'Bananas', 'Eggs');
console.log('ShoppingList content: ' + shoppingList + '\n');

console.log('Part 4.');
console.log('Remove the last item and output it into the console.');
last = shoppingList.pop();
console.log('Removed ' + last + " from the shoppingList.");
console.log('ShoppingList content: ' + shoppingList + '\n');