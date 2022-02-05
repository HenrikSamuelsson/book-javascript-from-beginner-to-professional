# Chapter 1

Exercise solutions from chapter 1 in the book Javascript from Beginner to Professional.

## Practice Exercise 1.1

### Part 1

Opened the browser console in Google Chrome Browser running on a Windows computer using the function key `F12`. Then typed `4 + 10` in the console followed by pressing the `Enter` key. The result was that `14` was presented in the console. This means that the console is able to perform arithmetic calculations.

### Part 2

Tested the statement `console.log("Henrik")` in the same console as in part 1 above. The result was that my name, Henrik, was presented as output in the console. This means that this statement can be used to debug while developing web pages.

## Practice Exercise 1.2

Exercise to create a Java script in an HTML page. Resulting code is pasted below or see the actual file in the link.

[practice-exercise-01-02.html](practice-exercise-01-02/practice-exercise-01-02.html)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Practice Exercise 1.2</title>
    </head>

    <body>
        <p>
            Solution to practice exercise 1.2 from the book JavaScript from
            Beginner to Professional.
        </p>
        <p>
            This page includes a JavaScript that outputs the string Hello world! in the
            browser console.
        </p>
        <script>
            console.log("Hello world!");
        </script>
    </body>
</html>
```

## Practice Exercise 1.3

Exercise where an external JavaScript is linked to a HTML file. The resulting code for both the HTML and the JavaScript is copy pasted below or see the actual files in the links.

[practice-exercise-01-03.html](practice-exercise-01-03/practice-exercise-01-03.html)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Practice Exercise 1.3</title>
    </head>

    <body>
        <p>
            Solution to practice exercise 1.3 from the book JavaScript from
            Beginner to Professional.
        </p>
        <p>
            This page includes a link to a JavaScript that outputs the string
            Hello world! in the browser console.
        </p>
        <script
            type="text/javascript"
            src="practice-exercise-01-03.js"
        ></script>
    </body>
</html>
```

[practice-exercise-01-03.js](practice-exercise-01-03/practice-exercise-01-03.js)

```javascript
console.log("Hello world!");
```
