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
            result: `When the Gorilla is within reach, you thrust your tail and strike it through the chest and then throw its limp body off to the side. `,
            hp: 0,
            renoun: 5,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: `When the Gorilla is within reach, you let out a strong blaze from your mouth scorching the ground in front of you. You notice too late, the Gorilla leaped over your flames and smashes your head into the ground. You awake hours later missing teeth and confused. `,
            hp: -45,
            renoun: 0,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: `You assend off the ground and you notice something flying toward you. It is a huge log! You quickly evade and fly away hearing a massive roar as you reach the coast, as if it were mocking you. `,
            hp: 0,
            renoun: -3,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: `When the Gorilla is in range you fire your beam but the Gorilla is too quick and dodges! You quickly charge another blast but the Gorilla has closed the distance. It leaps on to your back and takes a massive bite from your neck. The beam goes off and blasts the ground sending you both flying. -60hp`,
            hp: -60,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: `When the Gorilla gets close you fire off your punch! The Gorilla dodges, but your arm snakes back and grabs his leg from behind. You start whipping the Gorilla around smashing trees and rocks until it is lifeless.`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: `You assend off the ground and you notice something flying toward you. It is a huge log! You quickly evade and fly away hearing a massive roar as you reach the coast, as if it were mocking you.`,
            hp: 0,
            renoun: -2,
            
    
        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: `Your swing your axe as the Gorilla steps into reach. The Gorilla dodges the axe and the head breaks off on the ground. You stand there stunned, and the Gorilla blasts you into the trees. -45hp`,
            hp: -45,
            renoun: 0,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid, charging the Gorilla. Blue spears  the Gorilla and you finish it off with your axe.`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'flee',
            description: `You see the Gorilla coming at you and turn to run. `,
            result: `the Gorilla catches you and beats you into the ground -45hp`,
            hp: -45,
            renoun: -4,
            
    
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
        You have made your way to The Dragon Den and in the distance you see a Dragon soar into the sky! Moments later the Dragon breaks through the clouds and is above you. Defend Yourself! `,
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
            result: `As you are fleeing, the Dragon shoots fireballs singeing your feet with each step the souls of the dead laugh at you.`,
            hp: -20,
            renoun: -2,
            
    
        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: `As the Dragon swoops by, you thrust your tail for its heart. You miss and while reeling back your tail, the Dragon catches your wing with a massive slash of its claws. You make a run for it but take a fire ball to the side and are sent off the edge of a cliff.   -80hp `,
            hp: -80,
            renoun: 0,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: `As the Dragon swoops down, it lets out a huge ball of fire! You send your own blast in return, expelled like a rail gun, it consumes the other blast and engulfing the Dragon in a magma scatter shot. The Dragon plummets to the ground, quiet.  `,
            hp: 0,
            renoun: 5,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: `You soar into the air and just before you reach the clouds, a ball of fire rages past you misting the clouds above. You see the Dragon with smoke plumming from its mouth. You fly faster and escape before it can attack again. `,
            hp: 0,
            renoun: -2,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: `When the beam is ready you wait for the dragon to get close and fire. You shred its wings and it comes crashing down. You finish it off with one more blast. `,
            hp: 0,
            renoun: 5,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: `When the Dragon is in range, you fire off your punch. The Dragon continously dodges your snake like arm until it is tied in knots. While you cannot move the dragon swoops in and grabs you. Asending to the clouds before dropping you, the Dragon roars. -60hp`,
            hp: -60,
            renoun: 0,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: `You try to fly away but the dragon blasts one of your thrusters and you crash into a mountian -40hp`,
            hp: -40,
            renoun: -3,
    
        }],
        Paulbunion: [{
            id: 'axe',
            description: `you strike a pose ready to swing your axe`,
            result: `The Dragon soars just out of reach and you miss, the Dragon punishes you for this by spewing fire down your back. You run and hide until the Dragon leaves`,
            hp: -50,
            renoun: 1,
        }, {
            id: 'bull',
            description: `You call Blue!`,
            result: `Your bull companion comes rushing to your aid! While the Dragon is busy with Blue, you launch your axe and it hits the dragon in the chest. The Dragon tries to breath fire, but the pressure is too much and it spews from the axe wound burning its insides.`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'flee',
            description: `You see the Dragon coming at you and turn to run. `,
            result: `The Dragon sees you trying to escape and rains down fire, burning your feet as you run. -30hp `,
            hp: -30,
            renoun: -3,
            
    
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
            result: `Your thrust your tail at the Robot but its armor is too thick and your tail bounces off. The Robot blasts a beam from its mouth, knocking you through 2 buildings. -45hp `,
            hp: -45,
            renoun: 0,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: `You release an infernal blast and melt the Robot down to its core. `,
            hp: 0,
            renoun: 5,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: `As you asend an energy beam knocks you out of the sky and you crash outside the city. -30hp `,
            hp: -30,
            renoun: 0,
        

        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: `You fire off the beam at the Robot. the Robot dodges and quickly smashes you through a building behind you. It charges its own beam and blasts you further into the rubble. -45hp `,
            hp: 1,
            renoun: 1,
        }, {
            id: 'extendo',
            description: `your motors start whirring powering up extendo punch`,
            result: `You start firing of punches left and right, blasting pieces of metal off the Robot until it is left with just its legs.`,
            hp: 0,
            renoun: 5,
        }, {
            id: 'fly',
            description: `you see the enemy is tough and start charge your thrusters to fly`,
            result: `You blast off but as you are leaving, one of your thrusters is shot and you crash into 3 buildings. -30hp`,
            hp: -30,
            renoun: -3,
        

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
            result: `You strike the bull square in the jaw knocking it upward, breaking a horn as it lands. A giant appears and starts swinging an axe furiously. You dodge and grab the horn. Turning around you hear the axe cutting the air. In one motion you pierce the giants heart and the axe falls. `,
            hp: 0,
            renoun: 7,
        }, {
            id: 'throw',
            description: `when the enimy is close you reach out for a grapple `,
            result: `You hold your ground and clash with the bull holding its horns as it thrashes around. While wrangling the bull, a giant approaches from behind and swings his axe grazing your side. You immeaditatetly throw off the bull and take another hit to your sholder. Just as fast the giant kicks you and send you into some brush. You manage to escape but are followed through the forest until you leave. -70hp `,
            hp: -70,
            renoun: 0,
        }, {
            id: 'retreat',
            description: `you see the terrifying bull and turn to run`,
            result: `You start to run but the bull is faster. It catches you in the back and rams you into a tree. After throwing you to the ground it trots off feeling victorious. You leave the forest after laying there for awhile. -60hp`,
            hp: 1,
            renoun: -4,
            
    
        }],
        Dragon: [{
            id: 'tailwhip',
            description: `you wind up your tail for a strike`,
            result: `As the bull draws near you thrust your tail at the bull's head. Your tail breaks one of the horns but does not stop the bull. The bull spears you and knocks you to the ground. While pinned a Giant with an axe appears and starts charging. You are able to free yourself and escape but suffer massive bleading. -48hp`,
            hp: -48,
            renoun: 0,
        }, {
            id: 'fire',
            description: `you take a deep breath ready to blast flames`,
            result: `As the Bull draws near you expell a massive ball of fire, roasting the bull alive. As the bull cries out, a Giant appears with an axe in hand. He starts charging you as you draw in another breath. While the Giant has its axe overhead, you spit out a super hot flameball that melts the axe head encasing the Giants head.`,
            hp: 0,
            renoun: 7,
        }, {
            id: 'fly',
            description: `you notice the enemy is too strong, you start flapping to fly`,
            result: `You start to rise and the Bull can no longer reach you. As you reach the tree tops an axe comes slicing through the air! You dodge barely, and hear the Giant roaring "Get Back Here!"`,
            hp: 0,
            renoun: -5,
            
    
        }],
        Sentinal: [{
            id: 'beam',
            description: `you charge your energy beam`,
            result: `When the Bull is in range you fire your beam at the Bull crippling its leg! You quickly charge another blast but a Giant has appeared and swings an axe. The axe lands in your back. The beam goes off and blasts the ground sending you both flying.`,
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