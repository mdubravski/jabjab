/**
 * Generate a random number between 1 and 6 
 * 
 * @returns random number between 1 - 6
 */
function rollDice(){
    return Math.floor(Math.random() * (7 - 1)) + 1;
}

const rollBtn = document.querySelector('.roll');
const dots = document.querySelectorAll('.dice__dot');


rollBtn.addEventListener('click', () => {
    let roll = rollDice();
    console.log(roll);
    
    // reset styling
    for(let d of dots){
        d.classList.remove("show");
    }
    dots[0].classList.remove("d1-a");

    // handle which dots to display
    switch(roll){
        case 1:
            dots[0].classList.add("show");
            break;
        case 2:
            dots[1].classList.add("show");
            dots[3].classList.add("show");
            break;
        case 3:
            dots[0].classList.add("show");
            dots[1].classList.add("show");
            dots[3].classList.add("show");
            break;
        case 4:
            dots[1].classList.add("show");
            dots[2].classList.add("show");
            dots[3].classList.add("show");
            dots[4].classList.add("show");
            break;
        case 5:
            dots[0].classList.add("show");
            dots[1].classList.add("show");
            dots[2].classList.add("show");
            dots[3].classList.add("show");
            dots[4].classList.add("show");
            break;
        case 6:
            dots[1].classList.add("show");
            dots[2].classList.add("show");
            dots[3].classList.add("show");
            dots[4].classList.add("show");
            dots[5].classList.add("show");
            dots[0].classList.add("d1-a");
            dots[0].classList.add("show");
            break;
    }
});


