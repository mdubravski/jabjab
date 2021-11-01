const todoEl = document.querySelector(".todo");
const todosEl = document.querySelectorAll(".todo__item")
const todosEl1 = document.getElementsByClassName("todo__item")

console.log(todoEl); // ul
console.log(todosEl); // node list
console.log(todosEl1); // HTML collection

// parent nodes
console.log(todoEl.parentNode.parentNode);
console.log(todosEl[0].parentNode);

// child nodes
// also returns whitespace indentation as text nodes
console.log(todoEl.childNodes);
console.log(todoEl.lastChild);
console.log(todoEl.firstChild);

// child elements
console.log(todoEl.children);
console.log(todoEl.firstElementChild);
console.log(todoEl.lastElementChild);

// sibling nodes
console.log(todoEl.previousSibling);
console.log(todoEl.nextSibling);

// sibling elements
console.log(todoEl.previousElementSibling);
console.log(todoEl.nextElementSibling);

console.log(todoEl.firstElementChild.nextElementSibling);
