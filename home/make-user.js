function makePlayer(formData) {
    const player = {
        name: formData.get('name'),
        type: formData.get('monster'),
        
        hp: 100,
        renoun: 0,
        completed: {}
    };
    
    return player;
}

export default makePlayer;