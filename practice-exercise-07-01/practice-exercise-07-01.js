class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let superman = new Person('Clark', 'Kent');
let batman = new Person('Bruce', 'Wayne');

console.log(superman.firstname + ' ' + superman.lastname);
console.log(batman.firstname + ' ' + batman.lastname);
