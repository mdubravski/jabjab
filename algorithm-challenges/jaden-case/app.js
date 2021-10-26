/**
 * 
 *  functions to change string into jaden case formatting
 *  kata: https://www.codewars.com/kata/5390bac347d09b7da40006f6
 * 
 */

String.prototype.toJadenCase = function (){
    return this.split(" ").map(item => item[0].toUpperCase()+item.slice(1)).join(" ");
}

function toJadenCase1(str){
    let words = str.split(" ");
    for(let i = 0; i < words.length;i++){
        words[i] = words[i].at(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
}

function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}

function toJadenCase2(str){
    let words = str.split(" ");
    let result = [];
    for(let w of words){
        result.push(capitalize(w));
    }
    return result.join(" ");
}

let str = "hello my name is michael";
console.log(str.toJadenCase());
console.log(toJadenCase1(str));
console.log(toJadenCase2(str));