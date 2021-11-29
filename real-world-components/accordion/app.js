const accordion = document.querySelectorAll('.accordion__item');

function addAccordionFunctionality(){
    for(let e of accordion){
        e.firstElementChild.addEventListener('click', () => {
            let accDetails = e.firstElementChild.nextElementSibling;
            if(accDetails.style.maxHeight){
                accDetails.style.maxHeight = null;
                e.querySelector('.accordion__icon').textContent='+';
            }else{
                accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
                e.querySelector('.accordion__icon').textContent='-'; 
            }
        });
    }
}

addAccordionFunctionality();