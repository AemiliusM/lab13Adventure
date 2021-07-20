import fights from '../data/adventure-data.js';
const fightList = document.getElementById('fight-list');

for (let fight of fights) {
    const fightHref = `../brawl/?fightId=${fight.id}`;
    const fightLink = document.createElement('a');
    fightLink.href = fightHref;
    fightLink.textContent = fight.title;
    fightList.appendChild(fightLink);
    
}
