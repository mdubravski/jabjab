console.log('This is a demo!');


let h1 = document.querySelector("h1");
h1.style.color = "blue";

let content = document.createElement("p");
content.innerText = "This is content inside <p>";
document.querySelector("body").appendChild(content);