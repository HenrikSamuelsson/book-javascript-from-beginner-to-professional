class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return this.firstname + ' ' + this.lastname;
    }
}

let superman = new Person('Clark', 'Kent');
let batman = new Person('Bruce', 'Wayne');

console.log(superman.fullname());
console.log(batman.fullname());
