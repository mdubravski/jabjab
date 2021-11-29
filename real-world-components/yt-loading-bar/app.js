const loadingBarItem = document.querySelector('.loading-bar__item');
const btn1 = document.querySelector('.btn__30');
const btn2 = document.querySelector('.btn__60');
const btn3 = document.querySelector('.btn__90');

btn1.addEventListener('click', () =>{
    let width = 1;
    let loadingBar = setInterval(() => {
        if (width >= 30) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = `${width}%`;
        }
    }, 5); 
});

btn2.addEventListener('click', () =>{
    let width = 1;
    let loadingBar = setInterval(() => {
        if (width >= 60) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = `${width}%`;
        }
    }, 5); 
});

btn3.addEventListener('click', () =>{
    let width = 1;
    let loadingBar = setInterval(() => {
        if (width >= 90) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = `${width}%`;
        }
    }, 5); 
});

let width = 1;
let loadingBar = setInterval(() => {
    if (width >= 100) {
        clearInterval(loadingBar);
    } else {
        width++;
        loadingBarItem.style.width = `${width}%`;
    }
}, 5);