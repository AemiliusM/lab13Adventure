function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export default findById;

// const SentinalFight = {
//     id: 'sentinal-fight',
//     title: 'Sentinals Have Been Spotted In NY, Will You Save The Mutants?',
//     map: {
//         top: '89%',
//         left: '44%'
//     },
//     image: 'sentinal.jpg',
//     description:`
//   You have made your way to NY city and in the distance you hear and buildings being destroyed! Suddenly there is a massive robot crashing through the building to your left. Defend Yourself! `,
//     choices:{ 
//         Kong: [{
//             id: 'punch',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: 'kick',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: 'bite',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
            
            
//         }],
//         dragon: [{
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
            
            
//         }],
//         sentinalchoices: [{
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
            
            
//         }],
//         paulbunionchoices: [{
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
//         }, {
//             id: '',
//             description: ``,
//             result: ``,
//             hp: 1,
//             renoun: 1,
            
            
//         }],
//     }
// };
// const choices = SentinalFight.choices;
// console.log(choices.Kong);

// ittereate over choices find kong
