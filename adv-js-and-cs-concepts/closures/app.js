/**
 * Closures: any function that is using a variable outside 
 *           of its own fucntion declaration is a closure.
 */

// example 0
// closure
let a = 6;
let prod = function () {
    let b = 7;
    return a * b;
};

// example 1
// closure is an inner function that uses its outer functions's variables
function outer(){
    let varA = 'hi';
    function inner(){
        return varA + 'ho'; 
    }
    return inner();
}

let myFunc = outer();
console.log(myFunc);

// example 2
// creating functions w/ preserved data
function greeting(type){
    return function (name){
        console.log(`${type}, ${name}!`);
    }
}
const sayHello = greeting('hello');
const sayHi = greeting('hi')
const sayBonjour = greeting('bonjour');

sayHello('Michael')
sayHi('John');
sayBonjour('Nick');

// example 3
// use closures to make html genrator function
function html(tag){
    return function(value){
        return `<${tag}>${value}</${tag}>`;
    }
}

const h1 = html('h1');
const div = html('div');
const p = html ('p');

console.log(h1('Heading 1'));
console.log(div('wrapper'));
console.log(p('paragraph'));

// example 4
// module design pattern using closures to emulate private variables
// closures store references to outer functions's variables

function nameModule(){
    let name = 'default'; // private
    // public methods
    return {
        getName: function(){ 
            return name;
        },
        setName: function(newName){
            name = newName;
        }
    }
}

const mine =nameModule();
console.log(mine.getName());
mine.setName('Michael');
console.log(mine.getName());

