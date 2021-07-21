import { getPlayer } from '../data/api.js';
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
