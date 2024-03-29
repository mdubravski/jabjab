import {songsList} from '../data/songs.js';
import PlayInfo from './play-info.js';
import TrackBar from './track-bar.js';

const Playlist = (_ => {

    // data/state
    let songs = songsList;
    let curPlayingIndex = 0;
    let currentSong = new Audio(songs[curPlayingIndex].url);

    //cache DOM
    const playListEl = document.querySelector('.playlist');

    const init = _ => {
        render();
        listeners();
        PlayInfo.setState({
            songsLength: songs.length,
            isPlaying: !currentSong.paused
        });
    };

    const render = _ => {
        let markup = '';

        const toggleIcon = (itemIndex) => {
            if (curPlayingIndex === itemIndex) {
                return currentSong.paused ? 'fa-play' : 'fa-pause';
            } else {
                return 'fa-play';
            }
        };

        songs.forEach((songObj, index) => {
            markup += `
            <li class="playlist__song ${index === curPlayingIndex ? 'playlist__song--active' : ''}">
                <div class="play-pause">
                    <i class="fa ${toggleIcon(index)} pp-icon"></i>
                </div>
                <div class="playlist__song-details">
                    <span class="playlist__song-name">${songObj.title}</span>
                    <br>
                    <span class="playlist__song-artist">${songObj.artist}</span>
                </div>
                <div class="playlist__song-duration">
                    <span class="playlist__song-duration">${songObj.time}</span>
                </div>
            </li>
            `;
        });
        playListEl.innerHTML = markup;
    };

    const mainPlay = (index) => {
        if (curPlayingIndex === index) {
            togglePlayPause();
        } else {
            curPlayingIndex = index;
            changeAudioSrc();
            togglePlayPause();
        }
        PlayInfo.setState({
            songsLength: songs.length,
            isPlaying: !currentSong.paused
        });
    };

    const changeAudioSrc = _ => {
        currentSong.src = songs[curPlayingIndex].url;
    };

    const togglePlayPause = _ => {
        return currentSong.paused ? currentSong.play() : currentSong.pause();
    };

    const playNext = _ => {
        if (songs[curPlayingIndex] + 1) {
            curPlayingIndex++;
            changeAudioSrc();
            togglePlayPause();
            render();
        }
    };

    const listeners = _ => {
        playListEl.addEventListener('click', event => {
            if (event.target && event.target.matches('.fa')) {
                const listElem = event.target.parentNode.parentNode;
                const listElemIndex = [...listElem.parentElement.children].indexOf(listElem);
                mainPlay(listElemIndex);
                
                render();
            }
        });

        currentSong.addEventListener('timeupdate', _ => {
            TrackBar.setState(currentSong);
        });

        currentSong.addEventListener('ended', _ => {
            playNext();
        });
    };

    const flip = _ => {
        togglePlayPause();
        render();
    };

    return {
        init,
        flip
    };
})();

export default Playlist;