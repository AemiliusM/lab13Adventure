import { getPlayer } from '../data/api.js';
import { fightData } from '../brawl/fights.js';




function makeProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const renoun = document.getElementById('renoun');
    const user = getPlayer();
    name.textContent = user.name;
    avatar.src = `../assets/fights/${fightData.image}`;
    hp.textContent = user.hp;
    renoun.textContent = user.renoun;
}

export default makeProfile;