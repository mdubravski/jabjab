/**
 * for loops = run block of code for a specified number of iterations
 * 
 *               for(index, condition, step){
 *                   doSomething();
 *               }
 * 
 */

// print from 0-10
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// print from 10-0
for(let i = 10; i >= 0; i--){
    console.log(i);
}

// sum 1-100
let total = 0;
for(let i = 1; i <= 100; i++){
    total+=i;
}
console.log('total:',total);

