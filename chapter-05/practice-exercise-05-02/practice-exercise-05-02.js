let counter = 0;
const step = 3;
const target = 100;

console.log('target = ' + target);
console.log('step = ' + step);
console.log('counter = ' + counter);

while (target >= counter) {
    counter += step;
    console.log('counter = ' + counter);
}
console.log('Done!')
