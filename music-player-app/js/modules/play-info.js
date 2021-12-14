import Playlist from "./playlist.js";

const PlayInfo = (_ => {

    // data/state
    const state = {
        songsLength: 0,
        isPlaying: false
    };

    // cache DOM
    const playerCountEl = document.querySelector('.player__count');
    const playerTriggerEl = document.querySelector('.player__trigger');
    
    const init = _ =>{
        render();
        listeners();
    };

    const render = _ => {
        playerCountEl.innerHTML = `${state.songsLength} songs`;
        playerTriggerEl.innerHTML = state.isPlaying ? 'Pause' : 'Play';
    };

    const setState = obj => {
        state.songsLength = obj.songsLength;
        state.isPlaying = obj.isPlaying;
        render();
    };

    const listeners =_ => {
        playerTriggerEl.addEventListener('click', _ => {
            state.isPlaying = state.isPlaying ? false : true;
            render();
            Playlist.flip();
        });
    };

    return {
        init,
        setState
    };
})();

export default PlayInfo;