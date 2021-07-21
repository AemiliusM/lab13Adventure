import { savePlayer } from '../data/api.js';
import makePlayer from './make-user.js';

const playerSignUp = document.getElementById('player-sign-up');


playerSignUp.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(playerSignUp);
    const player = makePlayer(formData);
    savePlayer(player);
    window.location = '../map/';

});
