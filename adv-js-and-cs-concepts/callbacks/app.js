/**
 * Callback Fuction: a function that is passed into another function as an argument and then invoked in the body of other function.
 */

// callback example 0
// function first(name){
//     console.log(`Yo, ${name}`);
// }

function second(alias, callback){
    callback(alias);
}

second('Michael', (name) => {
    console.log(`Yo, ${name}`);
});

// callback example 1
document.addEventListener('click', (event) => {
    // do something
});

// callback example 2
// const greeter = (name, language) => {
//     if(language === 'english'){
//         return `Hello, ${name}`;
//     }else if(language === 'spanish'){
//         return `Hola, ${name}`;
//     }else if(language === 'italian'){
//         return `Ciao, ${name}`;
//     }else{
//         return `I dont know ${language}`;
//     }
// };

// Functionial programming example

const greeter = (name, callback) => {
    return callback(name);
};

const english = (name) => {
    return `Hello , ${name}`;
};

const spanish = (name) => {
    return `Hola , ${name}`;
};

const italian = (name) => {
    return `Ciao , ${name}`;
};

console.log(greeter('Michael', english));
console.log(greeter('Michael', spanish));
console.log(greeter('Michael', italian));

// callback example 3
// Functionial programming example

// const squareZap = (array) => {
//     let out = [];
//     for(let el of array){
//         out.push(Math.pow(el,2));
//     }
//     return out;
// };

// const doubleZap = (array) =>{
//     let out =[];
//     for(let el of array){
//         out.push((el+el));
//     }
//     return out;
// }

// const sqrtZap = (array) => {
//     let out = [];
//     for(let el of array){
//         out.push(Math.round(Math.sqrt(el) * 100) / 100);
//     }
//     return out;
// }

// const upperCaseZap = (array) => {
//     let out =[];
//     for(let el of array){
//         out.push(el.toUpperCase());
//     }
//     return out;
// }

const squareZap = (item) => {
    return Math.pow(item,2);
};

const doubleZap = (item) =>{
    return item + item;
};

const sqrtZap = (item) => {
    return Math.round(Math.sqrt(item) * 100) / 100;
};

const upperCaseZap = (item) => {
    return item.toUpperCase();
};

const masterZap = (array, callback) => {
    let out = [];
    for(let el of array){
        out.push(callback(el));
    }
    return out;
};

console.log(masterZap([1,2,3,4,5,6,7,8,9,10], squareZap));
console.log(masterZap([1,2,3,4,5,6,7,8,9,10], doubleZap));
console.log(masterZap([1,2,3,4,5,6,7,8,9,10], sqrtZap));
console.log(masterZap(['a','b','c','d'], upperCaseZap));
console.log(masterZap([1,2,3,4,5,6,7,8,9,10], (item) => {
    return Math.sin(item);
}));