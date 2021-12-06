/**
 * Recursion is just another mehtod for soliving a problem 
 *  - a function calling itself within itself
 *  - break problem into smaller and smaller problems until base case
 */

// example 0, factorial

function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

function factorialR(num) {
    if (num === 1) return 1; // base case
    return num * factorial(num - 1); // recursive call
}

console.log(factorial(4));
console.log(factorialR(4));

// example 1, sum all the numbers in an array 

function sum(arr) {
    let total = 0;
    for (let a of arr) {
        total += a;
    }
    return total;
}

function sumR(arr) {
    if (arr.length === 0) return 0; // base case
    return arr.pop() + sumR(arr); // recursive call
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sumR([1, 2, 3, 4, 5]));

// example 2, add digits (sum all digits in a number)
function addDigits(n){
    let total = 0;
    let digits = Array.from(String(n), Number);
    for(let d of digits){
        total += d;
    }
    return total;
}

function addDigitsR(n){
    if (n.length === 0) return 0;
    return Number(String(n)[0]) + addDigits(Number(String(n).substring(1)));
}

// another implementaion
// (n % 10) gets last digit
// (Math.floor(n/10)) gets rest of digits
function addDigitsR1(n){
    if (n < 10) return n;
    return (n % 10) + addDigitsR1(Math.floor(n/10));
}

console.log(addDigits(19));
console.log(addDigitsR(456));
console.log(addDigitsR1(456));

// example 3, setTimeout() countdown

function countDown(n){
    console.log(n);
    let id = setTimeout(() => {
        if(n === 0){
            clearTimeout(id);
        }else{
            countDown(n-1);
        }
    }, 500);
}

countDown(10);
