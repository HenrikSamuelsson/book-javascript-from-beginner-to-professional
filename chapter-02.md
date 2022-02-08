# Chapter 2

Solutions to exercises from chapter 2 in the book Javascript from Beginner to Professional.

## Practice Exercise 2.1

Exercise to determine the type of the variables in the below list.

```javascript
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;
```

The following Javascript will solve the exercise.

```javascript
let str1 = 'Laurence';
console.log(str1, typeof str1)

let str2 = "Svekis"; 
console.log(str2, typeof str2)

let val1 = undefined;
console.log(val1, typeof val1)

let val2 = null;
console.log(val2, typeof val2)

let myNum = 1000;
console.log(myNum, typeof myNum)
```

The resulting print to the console when running the above script was per below console output.

```txt
Laurence string
Svekis string
undefined undefined
null object
1000 number
```

## Practice Exercise 2.2

Exercise to develop the below script, that print a sentence to the console based on variable content.

```js
let myName = "Henrik";
let myAge = 48;
let canCodeJavaScript = true;

console.log(
    `Hello, my name is ${myName}, I am ${myAge} years old and I can code` +
    `JavaScript: ${canCodeJavaScript}`
);
```

The resulting print to the console when running the above script was per below console output.

```txt
Hello, my name is Henrik, I am 48 years old and I can codeJavaScript: true
```

# Practice Exercise 2.3

Exercise to develop a script that calculates the hypotenuse of a right-angled triangle.