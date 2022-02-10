// Part 1. Create an empty array to use as a shopping list
let shoppingList1 = [];
console.log('Part 1.');
console.log('shoppingList1: ' + shoppingList1);

// Part 2. Add Milk, Bread, and Apples to the shopping list.
shoppingList1.push('Milk', 'Bread', 'Apples');
console.log('Part 2.');
console.log('shoppingList1: ' + shoppingList1);

// Part 3. Update Bread with Bananas and Eggs.
shoppingList1.splice(1, 1, 'Bananas', 'Eggs');
console.log('Part 3.');
console.log('shoppingList1: ' + shoppingList1);
