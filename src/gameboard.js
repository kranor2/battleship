import { Ship } from './ship';
import { Cell } from './cell';

export function Gameboard() {
    const createBoard = () => {
        const size = 12;
        const board = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row[j] = new Cell([i, j]);
            }
            board[i] = row;
        }
        return board;
    };

    const board = createBoard();

    const getBoard = () => board;

    const fleet = [
        {
            ship: new Ship(5),
            coordinates: [],
            direction: 'horizontal',
            id: 0, 
            isPlaced: false,
        },
        {
            ship: new Ship(4),
            coordinates: [],
            direction: 'horizontal',
            id: 1,
            isPlaced: false,
        },
        {
            ship: new Ship(3),
            coordinates: [],
            direction: 'horizontal',
            id: 2,
            isPlaced: false,
        },
        {
            ship: new Ship(3),
            coordinates: [],
            direction: 'horizontal',
            id: 3,
            isPlaced: false,
        },
        {
            ship: new Ship(2),
            coordinates: [],
            direction: 'horizontal',
            id: 4,
            isPlaced: false,
        },
        {
            ship: new Ship(2),
            coordinates: [],
            direction: 'horizontal',
            id: 5,
            isPlaced: false,
        },
        {
            ship: new Ship(1),
            coordinates: [],
            direction: 'horizontal',
            id: 6,
            isPlaced: false,
        },
        {
            ship: new Ship(1),
            coordinates: [],
            direction: 'horizontal',
            id: 7,
            isPlaced: false,
        },
        {
            ship: new Ship(1),
            coordinates: [],
            direction: 'horizontal',
            id: 8,
            isPlaced: false,
        },
    ];

    const getFleet = () => fleet;

    const placeShip = (col, row, direction) => {
        let shipId = 0;
        while (fleet[shipId].isPlaced === true) {
            if (shipId >= fleet.length) break;
            shipId += 1;
        }
        if ((direction === 'horizontal' && col + fleet[shipId].ship.length > board.length) ||
            (direction === 'vertical' && row + fleet[shipId].ship.length > board.length)) {
                return false;
            }
        const shipCoordinates = [];
        for(let i = 0; i < fleet[shipId].ship.length; i++) {
            if (direction === 'horizontal') {
                fleet[shipId].direction = 'horizontal';
                shipCoordinates.push([row, col + i]);
            } else if (direction === 'vertical') {
                fleet[shipId].direction = 'vertical';
                shipCoordinates.push([row + i, col]);
            }
        }    
        if (cellsEmpty(shipCoordinates)) {
            shipCoordinates.forEach((cell) => {
                board[cell[0]][cell[1]].ship = shipId;
                fleet[shipId].coordinates.push(cell);
            });
            fleet[shipId].isPlaced = true;
            return true;
        } else {
            return false;
        }
    };

    const randomPlacemt = () => {
        for (let i = 0; i < fleet.length; i++) {
            let direction = 'horizontal';
            const random = Math.round(Math.random());
            if (random === 1) direction = 'vertical';
            const result = placeShip(
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 12),
                direction
            );
            if (result !== true) i -= 1;
        }
    };

    const cellsEmpty = (coordinates) => {
        return coordinates.every((cell) => board[cell[0]][cell[1]].ship === null
        );
    };

    const receiveAttack = (coordinates) => {
        let cell = board[coordinates[0]][coordinates[1]];
        if (cell.status === 'hit' || cell.status === 'miss') {
            return false;
        } else if (cell.ship !== null) {
            const shipId = cell.ship;
            board[coordinates[0]][coordinates[1]].status = 'hit';
            fleet[shipId].ship.hit();
            if (fleet[shipId].ship.isSunk() === true) {
                return 'sunk';
            } else {
                return 'hit';
            }
        } else {
            board[coordinates[0]][coordinates[1]].status = 'miss';
            return 'miss';
        }
    };

    const fleetSunk = () => {
        return fleet.every((ship) => ship.ship.isSunk() === true);
    };

    return {
        getBoard,
        getFleet,
        placeShip,
        randomPlacemt,
        receiveAttack,
        fleetSunk,
    };
}