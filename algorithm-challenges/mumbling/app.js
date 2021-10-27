/**
 * 
 * code to make input "abcd" -> "A-Bb-Ccc-Dddd-..."
 * kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 */

function repeatAndCapitalize(str, num){
    let ret = "";
    for(let i=0; i< num; i++){
        ret+=str.toLowerCase();
    }
    return ret.charAt(0).toUpperCase() + ret.slice(1);
}

function repeatAndCapitalize1(str, num){
    let ret = "";
    for(let i=0; i< num; i++){
        ret += i === 0 ? str.toUpperCase() : str.toLowerCase();
    }
    return ret;
}

function mumbling1(str){
    let letters = str.split("");
    let ret = [];
    for(let i = 0; i< letters.length; i++){
        ret.push(repeatAndCapitalize1(letters[i], i+1));
    }
    return ret.join("-");
}

function mumbling2(str){
    return str.split("").map((c,i) => c.toUpperCase()+c.toLowerCase().repeat(i)).join("-");
}

function mumbling3(str){
    let ret = [];
    let letters = str.split("");
    let count = 1;
    for(let l of letters){
        ret.push(repeatAndCapitalize1(l, count));
        count++;
    }
    return ret.join("-");
}

console.log(mumbling1("ZkGfaeR"));
console.log(mumbling2("ZkGfaeR"));
console.log(mumbling3("ZkGfaeR"));