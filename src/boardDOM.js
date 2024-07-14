export function boardDOM() {
    const playerBoard = (board, fleet, endgame = null) => {
        let domBoard;
        if (endgame) {
            domBoard = document.querySelector('.compboard-cells');
        } else {
            domBoard = document.querySelector('.cells');
        }
        domBoard.textContent = "";
        let rows = 0;
        board.forEach((row) => {
            let squares = 0;
            const domRow = document.createElement('div');
            domRow.classList.add('row');
            const rowNumber = document.createElement('div');
            rowNumber.classList.add('number');
            rowNumber.textContent = rows + 1;
            domRow.appendChild(rowNumber);
            row.forEach((cell) => {
                const domCell = document.createElement('button');
                domCell.classList.add('cell');
                domCell.setAttribute('id', `${rows}-${cells}`);
                displayCell(domCell, cell, 'player', fleet);
                domRow.appendChild(domCell);
                cells += 1;
            });
            domBoard.appendChild(domRow);
            rows += 1;
        });
    };

    const computerBoard = (board, fleet) => {
        const domBoard = document.querySelector('compboard-cells');
        domBoard.textContent = "";
        let rows = 0;
        board.forEach((row) => {
            let cells = 0;
            const domRow = document.createElement('div');
            domRow.classList.add('comprow');
            const rowNumber = document.createElement('div');
            rowNumber.classList.add('number');
            rowNumber.textContent = rows + 1;
            domRow.appendChild(rowNumber);
            row.forEach((cell) => {
                const domCell = document.createElement('button');
                domCell.classList.add('compcell');
                domCell.setAttribute('id', `${rows}-${cells}`);
                displayCell(domCell, cell, 'computer', fleet);
                domRow.appendChild(domCell);
            });
            domBoard.appendChild(domRow);
            rows += 1;
        });
    };

    const displayCell = (element, square, boardType, fleet) => {
        if (cell.status === null && cell.ship === null) {
            return;
        } else if (cell.status === 'miss') {
            element.classList.add('missedcell');
        } else if (cell.status === 'hit') {
            element.classList.add('hitcell');
            if (boardType === 'player' || fleet[cell.ship].ship.isSunk() === true) {
                displayShipCell(element, cell, fleet);
            }
        } else if (boardType === 'player') {
            displayShipCell(element, cell, fleet);
        }
    };

    const displayShipCell = (element, cell, fleet) => {
        element.classList.add('shipcell');
        const coordinates = fleet[cell.ship].coordinates;
        if (fleet[cell.ship].direction === 'horizontal') {
            element.classList.add('horizontal');
            if (coordinates[0][0] === cell.coordinates[0] && coordinates[0][1] === cell.coordinates[1]) {
                element.classList.add('horizontalroot');
            } else if (coordinates[coordinates.length - 1][0] === cell.coordinates[0] && coordinates[coordinates.length - 1][1] === cell.coordinates[1]) {
                element.classList.add('horizontaltail');
            }
        } else {
            element.classList.add('vertical');
            if (coordinates[0][0] === cell.coordinates[0] && coordinates[0][1] === cell.coordinates[1]) {
                element.classList.add('verticalroot');
            } else if (coordinates[coordinates.length - 1][0] === cell.coordinates[0] && coordinates[coordinates.length - 1][1] === cell.coordinates[1]) {
                element.classList.add('verticaltail');
            }
        }
    };

    const hideBoard = (actualBoard, nextBoard) => {
        actualBoard.classList.add('hidden');
        nextBoard.classList.remove('hidden');
    };

    return { playerBoard, computerBoard, hideBoard };
}
