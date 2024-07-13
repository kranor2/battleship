import { Gameboard } from './gameboard';

class Player {
    constructor() {
        this.board = Gameboard();
    }
}

class Computer extends Player {
    constructor() {
        super();
        this.lastHit = null;
    }

    randomCoordinates() {
        const x = Math.floor(Math.random() * 12);
        const y = Math.floor(Math.random() * 12);
        return [x, y];
    }

    pickCell() {
        while (true) {
            if (this.lastHit === null) {
                return this.randomCoordinates();
            }
            
            let choices = [];

            if (this.lastHit[0] > 0) {
                choices.push([this.lastHit[0] - 1, this.lastHit[1]]);
            }
            if (this.lastHit[0] < 11) {
                choices.push([this.lastHit[0] + 1, this.lastHit[1]]);
            }
            if (this.lastHit[1] > 0) {
                choices.push([this.lastHit[0], this.lastHit[1] - 1]);
            }
            if (this.lastHit[1] < 11) {
                choices.push([this.lastHit[0], this.lastHit[1] + 1]);
            }
            
            let randomDirection = Math.floor(Math.random() * choices.length);
            let choice = choices[randomDirection];
            return choice;
        }
    }
}

export { Player, Computer };