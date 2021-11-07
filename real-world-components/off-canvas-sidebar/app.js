const nav = document.querySelector('nav');
const content = document.querySelector('.content');
const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('span');

function toggleNav(){
    hamburger.addEventListener('click', function(){
        nav.classList.toggle('open');
        content.classList.toggle('shift');
        addClass(bars);
    });
}

function addClass(list){
    for(el of list){
        el.classList.toggle('change');
    }
}

toggleNav();
