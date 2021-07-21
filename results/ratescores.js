export function rateHP(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 80) {
        return 'scarred';
    }
    if (hp <= 30) {
        return 'broken';
    } else
        return 'untouched';
}


export function rateRenoun(renoun) {
    if (renoun <= 0) {
        return 'Whisper';
    }
    if (renoun >= 7) {
        return 'Warlord';
    }
    if (renoun <= 12) {
        return 'King';
    }
}