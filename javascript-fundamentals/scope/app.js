/**
 * 
 * scope = determines how you can access variables
 * global = can be accessed globaly throughout code
 * local  = can be accessed within a function
 * block  = use 'let' or 'const' scoped within codeblock 
 * 
 * use block scope whenever you can!
 * const variables cannot be changed they are CONSTANT!
 * 
 */

// global variable
var fullName = "Michael Dubravski";

function foo(){
    // this is a local variable
    var age = 22;
}

// block variable
let result = "good";
const PI = 3.14;