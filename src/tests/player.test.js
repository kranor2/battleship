import { Player, Computer } from '../player';

describe('Player', () => {
    const player = new Player();
    test('player has their own board', () => {
        expect(player.board.getBoard()).toBeDefined();
    });
});

describe('Computer', () => {
    const computer = new Computer();
    test('computer has its own board', () => {
        expect(computer.board.getBoard()).toBeDefined();
    });

    test('random coordinates = correct coordinates', () => {
        const coordinates = computer.randomCoordinates();
        expect(coordinates[0]).toBeGreaterThanOrEqual(0);
        expect(coordinates[0]).toBeLessThan(12);
        expect(coordinates[1]).toBeGreaterThanOrEqual(0);
        expect(coordinates[1]).toBeLessThan(12);
    });

    test('pickCell returns good cell placement', () => {
        computer.lastHit = [4, 5];
        const choice = computer.pickCell();
        let result = null;
        if ((choice[0] === 3 && choice[1] === 5) ||
            (choice[0] === 5 && choice[1] === 5) ||
            (choice[0] === 4 && choice[1] === 4) ||
            (choice[0] === 4 && choice[1] === 6)) {
                result = true;
        } else {
                result = false;
        }
        expect(result).toBeTruthy();
    });
});