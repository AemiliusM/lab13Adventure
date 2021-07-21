import fights from '../data/adventure-data.js';
import { getPlayer } from '../data/api.js';
import { hasBeatAllFighters } from './hasbeatallfighters.js';

const fightList = document.getElementById('fight-list');


const user = getPlayer();

if (user.hp <= 0 || hasBeatAllFighters(user)){
    window.location.replace('../results');
}



for (let fight of fights) {
    if (user.completed[fight.id]){
        createFightSpan(fight);
    } else {
        createFightLink(fight);
    }
}

function createFightSpan(fight){
    const span = document.createElement('span');
    span.innerText = `${fight.title} Battle Finished`;
    fightList.appendChild(span);
}

function createFightLink(fight) {
    const fightHref = `../brawl/?fightId=${fight.id}`;
    const fightLink = document.createElement('a');
    fightLink.href = fightHref;
    fightLink.textContent = fight.title;
    fightList.appendChild(fightLink);
}