import Home from "./home.js";
import { sound } from './../data/sound.js';

const Game = (_ => {
    // state
    const letters = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ,'n', 'o' ,'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const words = ['apple', 'ball', 'cat', 'dog','elephant', 'car', 'house', 'javascript', 'internet', 'people', 'software', 'developer', 'business', 'money'];
    let chosenWord;
    let guessWord;
    let lives;
    let guesses;

    //cache DOM
    const $hangman = document.querySelector('.hangman');

    const init = _ => {
        // choose a word
        chosenWord = chooseWord();
        // build out guessing word to render
        guessWord = Array(chosenWord.length).fill('_');
        guesses = [];
        lives = 7;
        // show initial page
        showInitPage();
        // run event listeners
        listeners();
    };

    // choose random word 
    const chooseWord = _ =>{
        return words[Math.floor(Math.random()*words.length)];
    };

    const showInitPage = _ => {
        let markup = `
            <p class="hangman__stats">
                Lives: <span class="hangman__lives">${lives}</span>
            </p>
            <h1 class="hangman__title">Hangman</h1>
            <canvas class="hangman__board" height="155px"></canvas>
            <div class="hangman__word">${guessWord.join('')}</div>
            <p class="hangman__instructions">Pick a letter below to guess the whole word</p>
            <ul class="hangman__letters">
                ${createLetters()}
            </ul>
            <button class="button hangman__trigger">Main Menu</button>
        `;
        $hangman.innerHTML = markup;
    };

    const createLetters = _ => {
        let markup = ``;
        letters.forEach(letter => {
            const isActive = isAlreadyTaken(letter) ? 'hangman__letter--active' : '';
            markup += `
                <li class="hangman__letter ${isActive}">${letter}</li>
            `;
        });
        return markup;
    };

    const listeners = _ => {
        $hangman.addEventListener('click', event => {
            if (event.target.matches('.hangman__trigger')){
                sound.click.play();
                Home.init();
            }

            if(event.target.matches('.hangman__letter')){
                sound.click.play();
                check(event.target.innerHTML);
            }
        });
    };

    const isAlreadyTaken = letter => {
        return guesses.includes(letter);
    };

    const check = letter => {
        if(isAlreadyTaken(letter)) return;

        guesses.push(letter);

        if(chosenWord.includes(letter)){
            updateGuessWord(letter);
        }else{
            lives--;
        }
        render();
        isGameOver();
    };

    const updateGuessWord = letter => {
        chosenWord.split('').forEach((elem, index) => {
            if(elem === letter){
                guessWord[index] = elem;
            }
        });
    };

    const render = _ => {
        document.querySelector('.hangman__lives').innerHTML = lives;
        document.querySelector('.hangman__word').innerHTML = guessWord.join('');
        document.querySelector('.hangman__letters').innerHTML = createLetters();
    };

    const hasWon = _ => guessWord.join('') === chosenWord;

    const hasLost = _ => lives <= 0;

    const isGameOver = _ => {
        if(hasWon()){
            sound.win.play();
            alert('Win');
        }
        if(hasLost()){
            sound.lose.play();
            alert('Lose');
        }
    }

    return {
        init
    };
})();

export default Game;