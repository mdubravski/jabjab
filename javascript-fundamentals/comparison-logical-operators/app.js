/**
 * 
 * Comparison Operators: >, < , <=, <=, ==, ===
 * Logical Operators: &&(AND), ||(OR), !(NOT)
 * 
 */

let num = 5;

// AND Example
if(num > 0 && num % 2 === 0){
    console.log('positive even');
}

// OR Example
if(num > 0 || num % 2 === 0){
    console.log('num > 0');
}

// NOT Example
if(num > 0 && num % 2 != 0){
    console.log('positive odd');
}