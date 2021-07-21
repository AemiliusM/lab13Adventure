const KongFight = {
    id: 'kong-fight',
    title: 'Can You Take On The King?',
    map: {
        top: '50%',
        left: '90%'
    },
    image: 'Kong.jpeg',
    description:`
        You have made your way to Skull Island and in the distance you hear and ape roar! Suddenly there is a massive Gorilla charging you. Defend Yourself! `,
    choices:{ 
        Kong: [{
            id: 'punch',
            description: `You wind up for a massive Kong punch!`,
            result: `The massive Gorilla did not expect the punch and is knocked out! Your renoun grows, may others tremble`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'throw',
            description: `when the enimy is close you reach out for a grapple `,
            result: `You mis-time your grab, and the Gorilla smashes into you. You lose a few teeth and are sent packing -50hp`,
            hp: -50,
            renoun: 0,
        }, {
            id: 'retreat',
            description: `you see the terrifying Gorilla and turn to run`,
            result: `You escape but while running through the jungle you are called a coward by all.`,
            hp: 0,
            renoun: -2,
            
    
        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid`,
            hp: 1,
            renoun: 1,
        }, {
            id: 'flee',
            description: `You see the bull coming at you and turn to run. `,
            result: `the bull catches you and spears you`,
            hp: 1,
            renoun: 1,
            
    
        }],
    }
};
const DragonFight = {
    id: 'dragon-fight',
    title: 'Enter The Dragon Den?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'dragon.jpeg',
    description:`
        You have made your way to The Dragon Den and in the distance you see and Dragon soar into the sky! Suddenly the Dragon breaks through the clouds and is above you. Defend Yourself! `,
    choices:{ 
        Kong: [{
            id: 'punch',
            description: `You wind up for a massive Kong punch!`,
            result: `The Dragon soars just out of reach and you miss, the Dragon punishes you for this by spewing fire down your back. You run and hide until the Dragon leaves`,
            hp: -50,
            renoun: 0,
        }, {
            id: 'throw',
            description: `when the enemy is close you reach out for a grapple `,
            result: `You hold fast on the Dragons wings as it tries to swipe at your head. You pull with all your might and dislocate one of the wings. The Dragon cries in pain and passes out`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'retreat',
            description: `you see the terrifying Dragon and turn to run`,
            result: `As you are fleeing, the souls of the dead laugh at you.`,
            hp: 0,
            renoun: -2,
            
    
        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
    
        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid`,
            hp: 1,
            renoun: 1,
        }, {
            id: 'flee',
            description: `You see the bull coming at you and turn to run. `,
            result: `the bull catches you and spears you`,
            hp: 1,
            renoun: 1,
            
    
        }],
    }
};
const SentinalFight = {
    id: 'sentinal-fight',
    title: 'Sentinals Have Been Spotted In NY, Will You Save The Mutants?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'sentinel.jpeg',
    description:`
        You have made your way to NY city and in the distance you hear and buildings being destroyed! Suddenly there is a massive robot crashing through the building to your left. Defend Yourself! `,
    choices:{ 
        Kong: [{
            id: 'punch',
            description: `You wind up for a massive Kong punch!`,
            result: `The Robot tries to block your fist, but destroys his arms. You quickly finish it off with another punch to the head. -5hp for hitting metal`,
            hp: -5,
            renoun: 5,
        }, {
            id: 'throw',
            description: `when the enimy is close you reach out for a grapple `,
            result: `You try to grab the Robot but your hands keep slipping, as you try to re-grasp, it fires a beam into your chest. You get launched into the rubble and awake hours later. -50hp`,
            hp: -50,
            renoun: 0,
        }, {
            id: 'retreat',
            description: `you see the terrifying Robot and turn to run`,
            result: `As you are running you trip several times, each time the Robot laughing louder and louder. -5hp for tripping`,
            hp: -5,
            renoun: -2,
        

        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
        

        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid`,
            hp: 1,
            renoun: 1,
        }, {
            id: 'flee',
            description: `You see the bull coming at you and turn to run. `,
            result: `the bull catches you and spears you`,
            hp: 1,
            renoun: 1,
        

        }],
    }
};
const PaulBunionFight = {
    id: 'paul-bunion-fight',
    title: 'There is a tale of a man and a bull, care to find out if its real?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'paulb.jpeg',
    description:`
        You have made your way to a forest in the American frontier and in the distance you hear the chopping of trees. Suddenly there is a massive Blue Bull charging you. Defend Yourself! `,
    choices:{ 
        Kong: [{
            id: 'punch',
            description: `You wind up for a massive Kong punch!`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'throw',
            description: `when the enimy is close you reach out for a grapple `,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'retreat',
            description: `you see the terrifying enemy and turn to run`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: ``,
            hp: 1,
            renoun: 1,
            
    
        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: ``,
            hp: 1,
            renoun: 1,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid`,
            hp: 1,
            renoun: 1,
        }, {
            id: 'flee',
            description: `You see the bull coming at you and turn to run. `,
            result: `the bull catches you and spears you`,
            hp: 1,
            renoun: 1,
            
    
        }],
    }
};
const fights = [
    PaulBunionFight,
    SentinalFight,
    DragonFight,
    KongFight,
];
export default fights;