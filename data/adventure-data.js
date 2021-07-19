const kongFight = {
    id: 'kong-fight',
    title: 'Can You Take On The King?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'kong.jpg',
    description:`
        You have made your way to Skull Island and in the distance you hear and ape roar! Suddenly there is a massive Gorilla charging you. Defend Yourself! `,
    choices: [{
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
        

    }]
};
const dragonFight = {
    id: 'dragon-fight',
    title: 'Enter The Dragon Den?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'dragon.jpg',
    description:`
        You have made your way to The Dragon Den and in the distance you see and Dragon soar into the sky! Suddenly the Dragon breaks through the clouds and is above you. Defend Yourself! `,
    choices: [{
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
        

    }]
};
const SentinalFight = {
    id: 'sentinal-fight',
    title: 'Sentinals Have Been Spotted In NY, Will You Save The Mutants?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'sentinal.jpg',
    description:`
        You have made your way to NY city and in the distance you hear and buildings being destroyed! Suddenly there is a massive robot crashing through the building to your left. Defend Yourself! `,
    choices:{ 
        Kong: [{
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
        dragon: [{
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
        sentinalchoices: [{
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
        paulbunionchoices: [{
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: '',
            description: ``,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
    }
};
const paulBunionFight = {
    id: 'kong-fight',
    title: 'Can You Take On The King?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'paul-bunion.jpg',
    description:`
        You have made your way to Skull Island and in the distance you hear and ape roar! Suddenly there is a massive Gorilla charging you. Defend Yourself! `,
    choices: [{
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 1,
        renoun: 1,
        

    }]
};
const fights = [
    paulBunionFight,
    SentinalFight,
    dragonFight,
    kongFight,
];
export default fights;