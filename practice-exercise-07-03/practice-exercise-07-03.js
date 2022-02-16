class Animal {
    constructor(specie, sound) {
        this.specie = specie;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.specie + ' ' + this.sound);
    }
}

Animal.prototype.sleep = function () {
    return this.specie + ' is sleeping';
}

let snake = new Animal('snake', 'hisses');
let bird = new Animal('bird', 'tweets');

snake.makeSound();
console.log(snake.sleep());
console.log(snake);

bird.makeSound();
console.log(bird.sleep());
console.log(bird);
