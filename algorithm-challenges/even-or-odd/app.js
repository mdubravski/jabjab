/**
 * 
 * function for telling if a number is even or odd
 * 
 */

function evenOrOdd1(num){
    if(num % 2 === 0){
        return "EVEN";
    }else{
        return "ODD";
    }
}

function evenOrOdd2(num){
    if(num % 2 === 0){
        return "EVEN";
    }
    return "ODD";
}

function evenOrOdd3(num){
    return num%2===0 ? "EVEN" : "ODD";
}

console.log(evenOrOdd1(7));
console.log(evenOrOdd2(8));
console.log(evenOrOdd3(9));