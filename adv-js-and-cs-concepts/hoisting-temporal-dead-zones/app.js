/**
 * Engine: a program that reads your code and runs it
 *  creating phase (hoisting): allocates memory for function/variable declarations
 *                      function: entire function allocated in memory
 *                      variable: only variable declaration allocated in memory
 *  execution phase: execute code line by line
 */

greet(); // this works in js!

function greet() {
    console.log('Hello! How are you?');
}

// ES5
var foo; // declaration
console.log(foo); // will return undefined
var foo = 'Michael'; // init

/**
 * ES6: variables do get hoisted
 *  temporal dead zone: prevents you from accessing variable before its defined
 */

console.log(bar); // will throw error
let bar = 'Joe';

