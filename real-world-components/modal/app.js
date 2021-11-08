const trigger = document.querySelector('.trigger');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

function main(){
    trigger.addEventListener('click', function(){
        modal.classList.add('open');
    });

    close.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    window.addEventListener('click', (event) =>{
        if(event.target === modal){
            modal.classList.remove('open');
        }
    });
}

main();
