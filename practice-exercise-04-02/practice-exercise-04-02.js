ageString = prompt('Enter your age');
age = Number.parseInt(ageString);
message = '';
if (age >= 21) {
    message = 'Welcome in, you can buy alcohol.';
} else if (age >= 19) {
    message = 'Welcome in, but you can not buy alcohol.';
} else {
    message = 'Welcome back when you are older.';
}
console.log(message);
