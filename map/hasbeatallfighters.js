import fights from '../data/adventure-data.js';
export function hasBeatAllFighters(user){
    for (let fight of fights){
        if (!user.completed[fight.id]){
            return false;
        }
    }
    return true;

}
