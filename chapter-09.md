# Chapter 9

Solutions to exercises from chapter 8 in the book Javascript from Beginner to Professional.

## Practice Exercise 9.1

### Part 1

Opened a webpage in google chrome and then opened the browser console using F12. Executed the command `console.dir(window)` in the browser console for a web page. This command resulted in display of a three view of all the content of the webpage.

### Part 2

Located a `document` object under the root Window object.

### Part 3

Could see that `outerHeight` was 1047 pixels and `outerWidth` 974 pixels. Tested to output these values to the console using the below two commands.

```txt
console.log(window.outerHeight)
```

```txt
console.log(window.outerWidth)
```

## Practice Exercise 9.2

The browser console command `console.dir(window)` will display a large tree structure. By investigating the tree it can be seen that the property `protocol` is a child of `location` which in turn is a child of `window`.

This means that the following command can be used to output the value of `protocol`.

```txt
console.log(window.location.protocol)
```

The same strategy can be used to get the value of href.

```txt
console.log(window.location.href)
```
