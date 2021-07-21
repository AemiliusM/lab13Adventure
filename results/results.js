import { getPlayer } from '../data/api.js';
import { rateHP, rateRenoun } from './ratescores.js';
import { aliveRenounMessage, deadRenounMessage, hpMessage } from './resultmessage.js';


export function makeProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const renoun = document.getElementById('renoun');
    const user = getPlayer();
    name.textContent = user.name;
    avatar.src = user.image;
    hp.textContent = user.hp;
    renoun.textContent = user.renoun;
}


makeProfile();
const user = getPlayer();
const storyDisplay = document.getElementById('story-display');
const hpResult = rateHP(user.hp);
const renounResult = rateRenoun(user.renoun);
const hpMessages = hpMessage[hpResult];

let renounMessages = null;
if (hpResult === 'dead') {
    renounMessages = deadRenounMessage;
} else {
    renounMessages = aliveRenounMessage;
}
const renounMessage = renounMessages[renounResult];

let story = 'After your Battles, ';
story += user.name + 'the' + user.type + ', ';
story += hpMessages + ' and ' + renounMessage + '.';
console.log(hpMessages);

storyDisplay.textContent = story;

