# Chapter 3

Solutions to exercises from chapter 3 in the book Javascript from Beginner to Professional.

## Practice Exercise 3.1

Exercise to test arrays. The symbol `>` is used to indicate output in the console, lines below not starting with this symbol is input in the console.

### Part 1

Exercise to create a an array representing a shopping list with 3 items.

The shopping list was entered in the browser console see input and corresponding output below.

```txt
shoppingList = ["Milk", "Bread", "Apples"]
> (3) ['Milk', 'Bread', 'Apples']
```

### Part 2

Exercise to check the length of the shopping list using the console.

The length of an array is retrieved using the built in property `length`, see below for details.

```txt
shoppingList.length
> 3
```

### Part 3

Exercise to update the entry "Bread" to "Bananas".

Entries in an array can be accessed using the index of the entry. "Bread" is in this case stored at index 1. Below so is it showed how "Bread" was changed to "Bananas" in the list.

```txt
shoppingList[1] = "Bananas"
> 'Bananas'
```

### Part 4

Exercise to output the entire list to the console.

Can simply type the name of the shopping list array in the console to output the content.

```txt
shoppingList
> (3) ['Milk', 'Bananas', 'Apples']
```

Can also use `console.log()` to display the content of the shopping list, which can be considered better since this can also be used in an actual JavaScript.

```txt
console.log(shoppingList)
> (3) ['Milk', 'Bananas', 'Apples']
```

## Practice Exercise 3.2

Exercise to test array methods. The symbol `>` is used to indicate output in the console, lines below not starting with this symbol is input in the console.

### 3.2.1

Creation of an empty array to use as a shopping list.

```txt
let shoppingList1 = []
> undefined
```

Add `Milk`, `Bread`, and `Apples` to the shopping list.

```txt
shoppingList1.push('Milk', 'Bread', 'Apples')
> 3
```
