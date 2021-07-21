function makePlayer(formData) {
    let monsterPic = '';
    switch (formData.get('monster')){
        case 'Kong':
            monsterPic = '../assets/fights/Kongplayer.jpeg';
            break;
        case 'Sentinal':
            monsterPic = '../assets/fights/Sentinelplayer.png'; 
            break;
        case 'Dragon':
            monsterPic = '../assets/fights/Dragonplayer.jpeg';
            break;
        case 'Paulbunion':
            monsterPic = '../assets/fights/Paulbplayer.jpeg';
            break; 
    }   
    const player = {
        name: formData.get('name'),
        type: formData.get('monster'),
        image: monsterPic,
        hp: 100,
        renoun: 0,
        completed: {}
    };
    
    
    return player;
}

export default makePlayer;