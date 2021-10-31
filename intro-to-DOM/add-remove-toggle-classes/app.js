const para = document.querySelector("p");
const btn = document.querySelector('.btn');
const span = document.querySelector('span');
const body = document.querySelector('body');
const switch1 = document.querySelector('.switch');

btn.onclick = function(){
    if(para.classList.length === 0){
        para.classList.add('red-giant');
    }else{
        para.classList.remove('red-giant');
    }
}


// body.classList.toggle('on');

switch1.onclick = function(){
    body.classList.toggle('on');
}


