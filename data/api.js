export function savePlayer(player) {
    const json = JSON.stringify(player);
    localStorage.setItem('player', json);
}

export function getPlayer() {
    const json = localStorage.getItem('player');
    if (!json) return null;
    const player = JSON.parse(json);
    return player;
}