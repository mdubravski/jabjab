/**
 *  Inheritence
 *      Classical
 *          - think java class syntax
 *          - not avaiable in js w/o using ES6 syntax
 *      Prototypal
 *          - constructor pattern (ES6 syntax)
 *          - prototypal pattern
 */

// prototypal pattern
let person = {
    greet: function(){
        console.log(`Hello! My name is ${this.name}`);
    }
};
// prototypal pattern inheritence
let programmer = Object.create(person);
programmer.code = function(){
   console.log(`I like to code in ${this.lang}`);
};

let fighter = Object.create(person);
fighter.fight = function(){
    console.log(`I am fighting`);
};

let p = Object.create(programmer);
let q = Object.create(person);
let f = Object.create(fighter);
p.name = 'Michael';
p.lang = 'Prolog';
q.name = 'Joe';

p.code();
q.greet();
f.fight();