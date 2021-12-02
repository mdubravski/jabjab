// parameterized constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// prototype
Car.prototype.stats = function () {
    return `${this.make} ${this.model}`;
}

Car.prototype.drive = function () {
    return `${this.stats()} is driving.`;
}

// creating objects

let car1 = new Car('Lambo', 'Aventador');
let car2 = new Car('Ford', 'F-150');
console.log(car1.stats());
console.log(car2.drive());