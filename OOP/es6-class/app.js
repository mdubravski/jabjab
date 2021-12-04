/**
 *  ES6 Classes
 * 
 *  Class syntax similar to other languages.
 *  Behind the scenes constructor functions and prototypes
 *  are still being used.
 */

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `My name is ${this.name}, I am ${this.age} years old`;
    }
}

class Programmer extends Person{
    constructor(name, age, language){
        super(name,age);
        this.language = language;
    }

    talk(){
        return `Hello!`;
    }
}

class Fighter extends Person{
    constructor(name,age,art){
        super(name,age);
        this.art = art;
    }

    fight(){
        return `Im fighting`;
    }

    greet(){
        return `${super.greet()}, I fight using ${this.art}`;
    }
}

const a = new Person('Michael', 22);
const p = new Programmer('Dan', 30, 'Java');
const f = new Fighter('Nate', 35, 'MMA');

console.log(f.greet());
console.log(p.talk());