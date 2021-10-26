/**
 * 
 *  different functions for counting the number of vowels in a given string
 * 
 */

function countVowels1(str){
    str=str.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for(let i=0; i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

function countVowels2(str){
    str = str.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for(let s of str){
        if(vowels.includes(s)){
            count++;
        }
    }
    return count;
}

function countVowels3(str){
    let count = 0;
    for(let s of str){
        switch(s){
            case "a":
                count++;
                break;
            case "e":
                count++;
                break;
            case "i":
                count++;
                break;
            case "o":
                count++;
                break;
            case "u":
                count++;
                break;
            default:
                break;
         }
    }
    return count;
}

let s = "Hi how are you?";
console.log(countVowels1(s));
console.log(countVowels2(s));
console.log(countVowels3(s));