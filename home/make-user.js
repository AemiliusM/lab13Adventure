function makePlayer(formData) {
    const player = {
        name: formData.get('name'),
        type: formData.get('monster'),
        hp: 100,
        renoun: 0,
        completed: {}
    };
    console.log(player);
    return player;
}

export default makePlayer;