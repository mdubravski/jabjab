/**
 * 
 *  reccomeend to use querySelector
 * 
 */

// access a single element 
let logo = document.getElementById("logo");
console.log(logo);

logo = document.querySelector("#logo");
logo.style.color = 'tomato';
logo.style.backgroundColor = 'dodgerblue';

let chore = document.querySelector(".chore");
console.log(chore);

// accessing multiple elements
let chores = document.getElementsByClassName("chore");
console.log(chores);

let choresByTag = document.getElementsByTagName("li");
console.log(choresByTag);

let paragraphs  = document.querySelectorAll(".random-paragraph");
console.log(paragraphs);
paragraphs.forEach(x => x.style.backgroundColor = 'tomato');
paragraphs.forEach(x => x.style.color = 'white');


