import { sound } from './../data/sound.js';
import Home from './home.js';

const How = (_ =>{
    // cache DOM
    const $hangman = document.querySelector('.hangman');
    const init = _ => {
        render();
        listeners();
    };

    const render = _ => {
        let markup = `
        <h1 class="hangman__title">Instructions</h1>
        <ul class="how">
            <li>When you start the game, the game will automatically choose a random word.</li>
            <li>Your job is to guess the chosen word completely by guessing letters.</li>
            <li>If you guess the word within 7 ties, you win, else you lose!</li>
            <button class="button hangman__trigger">Main Menu</button>
        </ul>
        `;
        $hangman.innerHTML = markup;
    };

    const listeners = _ => {
        document.querySelector('.hangman__trigger').addEventListener('click', _ => {
            sound.click.play();
            Home.init();
        });
    };

    return {
        init
    };
})();

export default How;