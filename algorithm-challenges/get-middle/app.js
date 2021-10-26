/**
 * 
 * functions for getting middle of array
 * 
 */

function getMiddle1(s){
    middle = Math.floor(s.length/2) - 1;
    if(s.length % 2 === 0){
        return s[middle]+s[middle+1];
    }
    return s[middle+1];
}

function getMiddle2(s){
    if(s.length % 2 === 0){
        return s.slice((s.length/2) - 1, (s.length/2) + 1);
    }
    return s.slice((s.length/2), (s.length/2) + 1);
}

function getMiddle3(s){
    return s.length % 2 === 0 ? middle = s[s.length/2 -1] + s[s.length/2] 
    : middle = s[Math.floor(s.length/2)];
}

console.log(getMiddle1("testing")); // "t"
console.log(getMiddle2("middle")); // "dd"
console.log(getMiddle3("foobar")); // "A"
