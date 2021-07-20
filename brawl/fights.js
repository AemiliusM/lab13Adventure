import fights from '../data/adventure-data.js';
import findById from '../app.js';

const searchParams = new URLSearchParams(window.location.search);

const fightTitle = document.getElementById('fight-title');
const fightImage = document.getElementById('fight-image');
const fightDesc = document.getElementById('fight-description');
const choices = document.getElementById('choices');
const fight = findById(fights, searchParams.get('fightId'));

fightTitle.textContent = fight.title;
fightImage.src = `../assets/fights/${fight.image}`;
fightDesc.textContent = fight.description;

for (let choice of fight.choices){
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(radio, span);
    choices.append(label);
}
