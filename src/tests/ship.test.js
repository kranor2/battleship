import { Ship } from '../ship';

describe('Ship', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship(2);
    });
    test('increase hits by increment 1', () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    });

    test('isSunk returns true when hits = length', () => {
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});