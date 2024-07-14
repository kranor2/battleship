import { Player, Computer } from './player';
import { boardDOM } from './boardDOM';

export function Game() {
    const player = new Player();
    const computer = new Computer();
    const display = boardDOM();
    const playerFleet = player.board.getFleet();
    const computerFleet = computer.board.getFleet();
    display.playerBoard(player.board.getBoard(), playerFleet);
    display.computerBoard(computer.board.getBoard(), computerFleet);
    const playerSection = document.querySelector('.player');
    const computerSection = document.querySelector('.computer');
    display.hideBoard(computerSection, playerSection);

    const getShipRoot = () => {
        const btn = document.querySelector('#formbtn');
        btn.addEventListener('click', () => {
            const column = document.querySelector('#column');
            const row = document.querySelector('#row');
            const direction = document.querySelector('#direction');
            const result = player.board.placeShip(Number(column.value), Number(row.value), direction.value);

            if (result === true) {
                display.playerBoard(player.board.getBoard(), playerFleet);
                const text = document.querySelector('.pregametxt');
                text.textContent = "Choose your ";
                let id = Number(text.id);
                switch (id) {
                    case 1:
                        const random = document.querySelector('#random');
                        random.classList.add('hidden');
                        text.textContent += "Second Ship (Length = 4)";
                        break;
                    case 2:
                        text.textContent += "Third Ship (Length = 3)";
                        break;
                    case 3: 
                        text.textContent += "Fourth Ship (Length = 3)";
                        break;       
                    case 4:
                        text.textContent += "Fifth Ship (Length = 2)";
                        break;
                    case 5:
                        text.textContent += "Sixth Ship (Length = 2)";
                        break;
                    case 6:
                        text.textContent += "Seventh Ship (Single Cell)";
                        break;
                    case 7:
                        text.textContent += "Eighth Ship (Single Cell)";
                        break;
                    case 8:
                        text.textContent += "Ninth Ship (Single Cell)";
                        break;
                    default:
                        text.textContent += "First Ship (Length = 5)";                         
                }
                text.textContent += " root coordinates and direction!";
                text.id = id += 1;
                if (id > 9) {
                    computer.board.randomPlacemt();
                    startGame();
                }
            }
        });
    };

    const getRandomPos = () => {
        const randomBtn = document.querySelector('#random');
        randomBtn.addEventListener('click', () => {
            player.board.randomPlacemt();
            display.playerBoard(player.board.getBoard(), playerFleet);
            computer.board.randomPlacemt();
            startGame();
        });
    };

    const startGame = () => {
        const pregame = document.querySelector('.pregame');
        pregame.classList.add('hidden');
        const playerBoardHeader = document.querySelector('.boardheader');
        playerBoardHeader.textContent += "Click on a cell in your opponent's grid to attack it. If an X appears, you've made a hit! You'll get to take another turn automatically. If the cell fills in, you did not make a hit; the computer will now take its turn.";
        display.hideBoard(playerSection, computerSection);
        waitMove();
    };

    const waitMove = () => {
        const computerCells = document.querySelectorAll('.comp-cell');
        computerCells.forEach((cell) => {
            cell.addEventListener('click', () => {
                const coordinates = cell.id.split('-');
                const result = computer.board.receiveAttack(coordinates);
                if (result === false) {
                    return false;
                }
                displayResult(result);
                display.computerBoard(computer.board.getBoard(), computerFleet);
                if (computer.board.fleetSunk() === true) {
                    endGame('Player');
                } else {
                    display.hideBoard(computerSection, playerSection);
                    setTimeout(() => {
                        manageComputerTurn();
                        if (player.board.fleetSunk() === true) {
                            endGame('Computer');
                        } else {
                            setTimeout(() => {
                                display.hideBoard(playerSection, computerSection);
                                waitMove();
                            }, 1000);
                        }
                    }, 1000);
                }
            });
        });
    };

    const displayResult = (attackresult) => {
        const result = document.querySelector('.result');
        if (attackresult === 'hit') {
            result.textContent = 'Hit!';
            return;
        }
        if (attackresult === 'miss') {
            result.textContent = 'Miss!';
            return;
        }
        if (attackresult === 'sunk') {
            result.textContent = 'Ship sunk!';
        }
    };

    const manageComputerTurn = () => {
        let attempts = 0;
        while (true) {
            let coordinates = undefined;
            if (attempts < 100) {
                coordinates = computer.pickCell();
            } else {
                computer.lastHit = null;
                coordinates = computer.randomCoordinates();
            }
            const result = player.board.receiveAttack(coordinates);
            if (result !== false) {
                if (result === 'hit') {
                    computer.lastHit = coordinates;
                } else if (result === 'sunk') {
                    computer.lastHit = null;
                }
                displayResult(result);
                display.playerBoard(player.board.getBoard(), player.board.getFleet());
                break;
            }
            tries += 1;
        }
    };

    const endGame = (winner) => {
        const reuslt = document.querySelector('.result');
        result.textContent = `Game over! ${winner} wins!`;
        winner === 'Player' ? playerSection.classList.remove('hidden') : computerSection.classList.remove('hidden');
        display.playerBoard(computer.board.getBoard(), computerFleet, 'endgame');
        playerSection.classList.add('endgame');
        computerSection.classList.add('endgame');
    };

    getShipRoot();
    getRandomPos();
}