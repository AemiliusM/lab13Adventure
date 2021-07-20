import fights from '../data/adventure-data.js';
import findById from '../app.js';
import { getPlayer, savePlayer } from '../data/api.js';

const searchParams = new URLSearchParams(window.location.search);

const fightTitle = document.getElementById('fight-title');
const fightImage = document.getElementById('fight-image');
const fightDesc = document.getElementById('fight-description');
const choices = document.getElementById('choices');
const fightData = findById(fights, searchParams.get('fightId'));
fightTitle.textContent = fightData.title;
fightImage.src = `../assets/fights/${fightData.image}`;
fightDesc.textContent = fightData.description;

const user = getPlayer();
const userChar = user.type;
const fightArry = fightData.choices[userChar];

for (let choice of fightArry){
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
const fightForm = document.getElementById('choice-form');
fightForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const choiceForm = new FormData(fightForm);
    const choiceValue = choiceForm.get('choice');
    const choiceData = findById(fightArry, choiceValue);

    user.renoun += choiceData.renoun;
    user.hp += choiceData.hp;
    user.completed[fights.id] = true;
    savePlayer(user);

    const backLink = document.getElementById('back-link');
    fightDesc.textContent = choiceData.result;
    fightForm.classList.add('hidden');
    backLink.classList.remove('hidden');
});
