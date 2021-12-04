function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `My name is ${this.name}. I'm ${this.age} years old.`;
};

function Programmer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
// method override
Programmer.prototype.greet = function () {
    return `My name is ${this.name}, I am ${this.age}, I program in ${this.language}.`;
};

function Fighter(name, age, art){
    Person.call(this, name, age);
    this.art = art;
}
Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;
// method override
Fighter.prototype.greet = function(){
    return `${Person.prototype.greet.call(this)} I fight using ${this.art}`;
}

const a = new Person('John', 22);
const p = new Programmer('Jane', 40, 'C#');
const f = new Fighter('Nate', 30, 'MMA');

console.log(p.greet());
console.log(f.greet());