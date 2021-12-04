// pass by value example
// myName gets changed nameCopy does not
// allocating new memory for nameCopy
let myName = 'Michael'; // 0x435
let nameCopy = myName;  // 0x386

myName += " Dubravski";

console.log(myName);
console.log(nameCopy);

// pass by reference example
// objects pass by reference (reference types)
// both fruits anf fruitsCopy get changed
// not allocating new memory space, fruitsCopy points to fruits in memory
let fruits = ['cherry', 'mango']; // 0x123
let fruitsCopy = fruits;  // 0x123

fruits.push('apple', 'banana');

console.log(fruits);
console.log(fruitsCopy);

