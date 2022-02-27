# Chapter 10

Solutions to exercises from chapter 10 in the book Javascript from Beginner to Professional.

## Practice Exercise 10.1

Exercise to experiment with traversing the DOM tree hierarchy.

The sample HTML website in the below link was used for this exercise.

[practice-exercise-10-01.html](practice-exercise-10-01/practice-exercise-10-01.html)

### Part 1

Opened the document body of the website using the browser console command `console.dir(document)`. This displayed a large tree structure in the console.

### Part 2

Manually navigated down the tree structure, could for example go into `main` and then into the list and find child list element with the text "One".

### Part 3

Tested out a console command to reach the list element with the text "One".

```txt
console.dir(document.body.children[0].children[0].children[0].children[0].textContent)
```

## Self-check Quiz 1

The output of the following code is to be determined.

```js
let step = 3;
 
for (let i = 0; i < 1000; i += step) {
    if (i > 10) {
        break;
    }
    console.log(i);
}
```

The variable `i` will in the for loop be updated to `0, 3, 6, 9` and this is printed to the console. Next `i` becomes `12` causing a break out of the for loop and end of execution.

To summarize the output will be:

```txt
0
3
6
9
```