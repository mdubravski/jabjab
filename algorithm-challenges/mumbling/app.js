/**
 * 
 * code to make input "abcd" -> "A-Bb-Ccc-Dddd-..."
 * 
 */

function repeatAndCapitalize(str, num){
    let ret = "";
    for(let i=0; i< num; i++){
        ret+=str.toLowerCase();
    }
    return ret.charAt(0).toUpperCase() + ret.slice(1);
}

function mumbling1(str){
    let letters = str.split("");
    let ret = [];
    for(let i = 0; i< letters.length; i++){
        ret.push(repeatAndCapitalize(letters[i], i+1));
    }
    return ret.join("-");
}

function mumbling2(str){
    return str.split("").map((c,i) => c.toUpperCase()+c.toLowerCase().repeat(i)).join("-");
}

function mumbling3(str){

}

console.log(mumbling1("ZkGfaeR"));
console.log(mumbling2("ZkGfaeR"));
console.log(mumbling3("ZkGfaeR"));