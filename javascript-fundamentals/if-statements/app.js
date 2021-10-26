/**
 * 
 * if(condition){
 *      doSomething()
 * }else{
 *      doSomethingElse();
 * }
 * 
 */

// simple rock-paper-scissors game
// rock=1, paper=2, scissors=3
let choice = window.prompt("Enter rock, paper, scissors ");
choice = String(choice.toLowerCase().trim());
let computerChoice = Math.floor((Math.random()*3) + 1);

// convert choice to int
if(choice == "rock"){
    choice = 1;
}else if(choice == "paper"){
    choice = 2;
}else{
    choice = 3;
}

// game logic
if(choice == 1){
    if(computerChoice == 1){
        console.log(`Tie! Player: ${choice} Computer: ${computerChoice}`);
    }else if(computerChoice == 2){
        console.log(`You Lose! Player: ${choice} Computer: ${computerChoice}`);
    }else{
        console.log(`Win! Player: ${choice} Computer: ${computerChoice}`);
    }
}else if(choice == 2){
    if(computerChoice == 1){
        console.log(`Win! Player: ${choice} Computer: ${computerChoice}`);
    }else if(computerChoice == 2){
        console.log(`Tie! Player: ${choice} Computer: ${computerChoice}`);
    }else{
        console.log(`You Lose! Player: ${choice} Computer: ${computerChoice}`);
    }
}else{
    if(computerChoice == 1){
        console.log(`You Lose! Player: ${choice} Computer: ${computerChoice}`);
    }else if(computerChoice == 2){
        console.log(`Win! Player: ${choice} Computer: ${computerChoice}`);
    }else{
        console.log(`Tie! Player: ${choice} Computer: ${computerChoice}`);
    }
}

