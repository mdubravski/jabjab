const btn = document.querySelector('button');
const myIn = document.querySelector('input');

let count = 0;
function increment(){
    count++;
    document.querySelector('span').innerText = count.toString();
}

btn.addEventListener('click', increment);
btn.removeEventListener('dblclick', increment);




