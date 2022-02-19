// Part 1 - Output of pi to the console using the Math object.
console.log('Part 1');
console.log('pi is ' + Math.PI);
console.log('\n');

// Part 2 - About ceil, floor, and rounding.
console.log('Part 2');
let number = 5.7;
console.log('ceil of ' + number + ' is ' + Math.ceil(number));
console.log('floor of ' + number + ' is ' + Math.floor(number));
console.log('round of ' + number + ' is ' + Math.round(number));
console.log('\n');

// Part 3 - Generation of random number between 0 and 10 including 10.
console.log("Part 3");
console.log('generated number ' + Math.floor(Math.random() * 11));
console.log('\n');

// Part 4 - Generation of random number between 1 and 10 including 10.
console.log('Part 4');
console.log('generated number ' + Math.floor(Math.random() * 10 + 1));
console.log('\n');

// Part 5 - Generation of random number between 1 and 10 including 10.
console.log('Part 5');
console.log('generated number ' + Math.floor(Math.random() * 10 + 1));
console.log('\n');

// Part 6 - Generation of random number between 1 and 100 including 100.
console.log('Part 6');
console.log('generated number ' + Math.floor(Math.random() * 100 + 1));
console.log('\n');

// Part 7 - Generation of 100 random numbers between 1 to 100 using a function.
let randomNumbers = [];
const numbersNeeded = 100;
for (let numberCounter = 0; numberCounter < numbersNeeded; numberCounter++) {
    randomNumbers.push(randomGenerator(1,100));
}
console.log('Part 7');
console.log('Generated random numbers ' + randomNumbers);

// Function to generate between min and max including max.
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}