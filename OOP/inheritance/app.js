function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `My name is ${this.name}. I'm ${this.age} years old.`;
};

function Programmer(name, age, language){
    // inherit from parent constructor
    Person.call(this, name, age);
    this.language = language;
}
// inherit from parent prototype
Programmer.prototype = Object.create(Person.prototype);
// set constructor
Programmer.prototype.constructor = Programmer;

function Fighter(name, age, art){
    Person.call(this, name, age);
    this.art = art;
}
Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;

const a = new Person('John', 22);
const p = new Programmer('Jane', 40, 'C#');
const f = new Fighter('Dan', 24, 'Boxing');
console.log(f.constructor);

