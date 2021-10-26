/**
 * 
 * functions = reuseable code blocks that can be invoked/called to do a task
 *             can return value using 'return' keyword
 * 
 *                      fucntion func(parameters){
 *                         add function defintion
 *                      }
 * 
 */

function sayHello(name){
    console.log('Hello',name);
    console.log('Hi',name);
    console.log('Greetings',name);
}

function add(a, b){
    return a + b;
}

function isDivisibleByTwo(num){
    return num%2==0;
}

function getSign(num){
    if(num > 0){
        return "POSITIVE";
    }else if(num < 0){
        return "NEGATIVE";
    }else{
        return "ZERO";
    }
}

sayHello("Michael");
sayHello("Peter");
console.log(add(5,3));
console.log(add("cool","beans"));
console.log(isDivisibleByTwo(10));
console.log(isDivisibleByTwo(9));
console.log(getSign(0));
console.log(getSign(10));
console.log(getSign(-88));