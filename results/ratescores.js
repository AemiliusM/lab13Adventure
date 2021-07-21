export function rateHP(hp) {
    if (hp === 0) {
        return 'dead';
    }
    else if (hp <= 80) {
        return 'scarred';
    }
    else if (hp <= 30) {
        return 'broken';
    } else
        return 'untouched';
}


export function rateRenoun(renoun) {
    if (renoun <= 9) {
        return 'Whisper';
    }
    if (renoun >= 10) {
        return 'Warlord';
    }
    if (renoun <= 20) {
        return 'King';
    }
}