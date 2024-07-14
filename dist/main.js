/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boardDOM.js":
/*!*************************!*\
  !*** ./src/boardDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardDOM: () => (/* binding */ boardDOM)
/* harmony export */ });
function boardDOM() {
  const playerBoard = function (board, fleet) {
    let endgame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let domBoard;
    if (endgame) {
      domBoard = document.querySelector('.compboard-cells');
    } else {
      domBoard = document.querySelector('.cells');
    }
    domBoard.textContent = "";
    let rows = 0;
    board.forEach(row => {
      let squares = 0;
      const domRow = document.createElement('div');
      domRow.classList.add('row');
      const rowNumber = document.createElement('div');
      rowNumber.classList.add('number');
      rowNumber.textContent = rows + 1;
      domRow.appendChild(rowNumber);
      row.forEach(cell => {
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
    board.forEach(row => {
      let cells = 0;
      const domRow = document.createElement('div');
      domRow.classList.add('comprow');
      const rowNumber = document.createElement('div');
      rowNumber.classList.add('number');
      rowNumber.textContent = rows + 1;
      domRow.appendChild(rowNumber);
      row.forEach(cell => {
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
  return {
    playerBoard,
    computerBoard,
    hideBoard
  };
}

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
  constructor(coordinates) {
    this.status = null;
    this.ship = null;
    this.coordinates = coordinates;
  }
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/cell.js");


function Gameboard() {
  const createBoard = () => {
    const size = 12;
    const board = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row[j] = new _cell__WEBPACK_IMPORTED_MODULE_1__.Cell([i, j]);
      }
      board[i] = row;
    }
    return board;
  };
  const board = createBoard();
  const getBoard = () => board;
  const fleet = [{
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5),
    coordinates: [],
    direction: 'horizontal',
    id: 0,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4),
    coordinates: [],
    direction: 'horizontal',
    id: 1,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    coordinates: [],
    direction: 'horizontal',
    id: 2,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3),
    coordinates: [],
    direction: 'horizontal',
    id: 3,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2),
    coordinates: [],
    direction: 'horizontal',
    id: 4,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2),
    coordinates: [],
    direction: 'horizontal',
    id: 5,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(1),
    coordinates: [],
    direction: 'horizontal',
    id: 6,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(1),
    coordinates: [],
    direction: 'horizontal',
    id: 7,
    isPlaced: false
  }, {
    ship: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(1),
    coordinates: [],
    direction: 'horizontal',
    id: 8,
    isPlaced: false
  }];
  const getFleet = () => fleet;
  const placeShip = (col, row, direction) => {
    let shipId = 0;
    while (fleet[shipId].isPlaced === true) {
      if (shipId >= fleet.length) break;
      shipId += 1;
    }
    if (direction === 'horizontal' && col + fleet[shipId].ship.length > board.length || direction === 'vertical' && row + fleet[shipId].ship.length > board.length) {
      return false;
    }
    const shipCoordinates = [];
    for (let i = 0; i < fleet[shipId].ship.length; i++) {
      if (direction === 'horizontal') {
        fleet[shipId].direction = 'horizontal';
        shipCoordinates.push([row, col + i]);
      } else if (direction === 'vertical') {
        fleet[shipId].direction = 'vertical';
        shipCoordinates.push([row + i, col]);
      }
    }
    if (cellsEmpty(shipCoordinates)) {
      shipCoordinates.forEach(cell => {
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
      const result = placeShip(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), direction);
      if (result !== true) i -= 1;
    }
  };
  const cellsEmpty = coordinates => {
    return coordinates.every(cell => board[cell[0]][cell[1]].ship === null);
  };
  const receiveAttack = coordinates => {
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
    return fleet.every(ship => ship.ship.isSunk() === true);
  };
  return {
    getBoard,
    getFleet,
    placeShip,
    randomPlacemt,
    receiveAttack,
    fleetSunk
  };
}

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardDOM */ "./src/boardDOM.js");


function Game() {
  const player = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();
  const computer = new _player__WEBPACK_IMPORTED_MODULE_0__.Computer();
  const display = (0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.boardDOM)();
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
    helpContent.textContent = "Click on a cell in your opponent's grid to attack it. If an X appears, you've made a hit! You'll get to take another turn automatically. If the cell fills in, you did not make a hit; the computer will now take its turn.";
    display.hideBoard(playerSection, computerSection);
    waitMove();
  };
  const waitMove = () => {
    const computerCells = document.querySelectorAll('.comp-cell');
    computerCells.forEach(cell => {
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
  const displayResult = attackresult => {
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
  const endGame = winner => {
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

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

class Player {
  constructor() {
    this.board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
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


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }
  hit() {
    this.hits += 1;
  }
  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 60%;
    --cellSize: 5rem;
    --shipborder: 2px solid #330802;
}

body {
    padding: 1rem;
    display: grid;
    background-color: #597782;
    color: #f7f8f8;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 400;
}

header {
    justify-self: center;
    font-size: 5rem;
    margin: 1rem;
    font-family: 'Anton SC', sans-serif;
}

.pregame {
    display: grid;
    justify-self: center;
    font-size: 1.5rem;
}

form {
    border: 3px solid #330802;
    background-color: #beb1a1;
    color: #1a0c09;
    border-radius: 5px;
    padding: 1.5rem 5rem;
    margin: 1.5rem;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 2rem;
    align-items: center;
    min-width: 45vw;
}

.pregametxt {
    margin: 1.5rem;
}

select {
    padding: 0.5rem;
    border: 1px #f7f8f8;
    outline: 1px solid #d93e39;

}

#direction {
    grid-column: 2 / 4;
}

.pregametxt, #formbtn {
    grid-column: 1 / 4;
}

#formbtn, #random {
    position: relative;
    padding: 1.5rem;
    outline: none;
    background-color: #086ba0;
    color: #f7f8f8;
    border: none;
    border-radius: 7.5px;
    justify-self: center;
}

#formbtn:active, #random:active {
    top: 2px;
}

#random {
    margin: 1rem;
}

.result {
    justify-self: center;
    font-size: 2.5rem;
    padding: 1rem;
}

.boards {
    justify-self: center;
    padding: 2rem;
    display: flex;
    text-align: center;
}

section {
    position: absolute;
    left: 30vw;
    transition: all 0.5s;
}

.boardheader, .compheader {
    font-size: 1.5rem;
}

.board, .compboard {
    padding: 1rem;
    display: grid;
}

.letters {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
}

.letter {
    place-content: center end;
}

.number {
    display: grid;
    font-size: 1.5rem;
    height: var(--cellSize);
    align-content: center;
}

.letters, .row, .comprow {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
}

.cell, .compcell {
    height: var(--cellSize);
    width: var(--cellSize);
    background-color: #beb1a1;
    border: 0.5px solid #1a0c09;
    padding: 0;
    box-shadow: 0px 0px 1px black;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 300;
    font-size: calc(var(--cellSize) - 1rem);
}

.shipcell {
    background-color: #939e9a;
    border: none;
}

.horizontal {
    border-top: var(--shipborder);
    border-bottom: var(--shipborder);
}

.vertical {
    border-left: var(--shipborder);
    border-right: var(--shipborder);
}

.horizontalroot {
    border-left: var(--shipborder);
}

.verticalroot {
    border-top: var(--shipborder);
}

.horizontaltail {
    border-bottom: var(--shipborder);
}

.verticaltail {
    border-bottom: var(--shipborder);
}

.missedcell::after {
    position: relative;
    top: 10%;
    background-color: black;
}

.player.endgame {
    left: 7vw;
}

.computer.endgame {
    left: 50vw;
}

.hitcell::after {
    position: relative;
    top: 10%;
    content: "X";
    color: #d93e39;
}

button:hover {
    cursor: pointer;
}

.hidden {
    visibility: hidden;
    max-height: 0;
    opacity: 0;
}

@media (max-width: 1200px) {
    section {
        left: 25vw;
    }

    .player.endgame {
        left: 3vw;
    }
}

@media (max-width: 1100px) {
    body {
        --cellSize: 4.5rem;
    }

    section {
        left: 20vw;
    }

    .computer.endgame {
        left: 20vw;
        top: max(60vh, 70vw);
    }
}

@media (max-width: 800px) {
    body {
        --cellSize: 2.5rem;
    }

    section {
        left: 15vw;
    }

    .player.endgame {
        left: 15vw;
    }

    .computer.endgame {
        left: 15vw;
        top: max(75vh, 90vw);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,0BAA0B;;AAE9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,yBAAyB;IACzB,2BAA2B;IAC3B,UAAU;IACV,6BAA6B;IAC7B,uCAAuC;IACvC,gBAAgB;IAChB,uCAAuC;AAC3C;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;AACd;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,SAAS;IACb;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;QACV,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;QACV,oBAAoB;IACxB;AACJ","sourcesContent":[":root {\n    font-size: 60%;\n    --cellSize: 5rem;\n    --shipborder: 2px solid #330802;\n}\n\nbody {\n    padding: 1rem;\n    display: grid;\n    background-color: #597782;\n    color: #f7f8f8;\n    font-family: 'Chakra Petch', sans-serif;\n    font-weight: 400;\n}\n\nheader {\n    justify-self: center;\n    font-size: 5rem;\n    margin: 1rem;\n    font-family: 'Anton SC', sans-serif;\n}\n\n.pregame {\n    display: grid;\n    justify-self: center;\n    font-size: 1.5rem;\n}\n\nform {\n    border: 3px solid #330802;\n    background-color: #beb1a1;\n    color: #1a0c09;\n    border-radius: 5px;\n    padding: 1.5rem 5rem;\n    margin: 1.5rem;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem 2rem;\n    align-items: center;\n    min-width: 45vw;\n}\n\n.pregametxt {\n    margin: 1.5rem;\n}\n\nselect {\n    padding: 0.5rem;\n    border: 1px #f7f8f8;\n    outline: 1px solid #d93e39;\n\n}\n\n#direction {\n    grid-column: 2 / 4;\n}\n\n.pregametxt, #formbtn {\n    grid-column: 1 / 4;\n}\n\n#formbtn, #random {\n    position: relative;\n    padding: 1.5rem;\n    outline: none;\n    background-color: #086ba0;\n    color: #f7f8f8;\n    border: none;\n    border-radius: 7.5px;\n    justify-self: center;\n}\n\n#formbtn:active, #random:active {\n    top: 2px;\n}\n\n#random {\n    margin: 1rem;\n}\n\n.result {\n    justify-self: center;\n    font-size: 2.5rem;\n    padding: 1rem;\n}\n\n.boards {\n    justify-self: center;\n    padding: 2rem;\n    display: flex;\n    text-align: center;\n}\n\nsection {\n    position: absolute;\n    left: 30vw;\n    transition: all 0.5s;\n}\n\n.boardheader, .compheader {\n    font-size: 1.5rem;\n}\n\n.board, .compboard {\n    padding: 1rem;\n    display: grid;\n}\n\n.letters {\n    font-size: 1.5rem;\n    padding-bottom: 0.5rem;\n}\n\n.letter {\n    place-content: center end;\n}\n\n.number {\n    display: grid;\n    font-size: 1.5rem;\n    height: var(--cellSize);\n    align-content: center;\n}\n\n.letters, .row, .comprow {\n    display: grid;\n    grid-template-columns: repeat(13, 1fr);\n}\n\n.cell, .compcell {\n    height: var(--cellSize);\n    width: var(--cellSize);\n    background-color: #beb1a1;\n    border: 0.5px solid #1a0c09;\n    padding: 0;\n    box-shadow: 0px 0px 1px black;\n    font-family: 'Chakra Petch', sans-serif;\n    font-weight: 300;\n    font-size: calc(var(--cellSize) - 1rem);\n}\n\n.shipcell {\n    background-color: #939e9a;\n    border: none;\n}\n\n.horizontal {\n    border-top: var(--shipborder);\n    border-bottom: var(--shipborder);\n}\n\n.vertical {\n    border-left: var(--shipborder);\n    border-right: var(--shipborder);\n}\n\n.horizontalroot {\n    border-left: var(--shipborder);\n}\n\n.verticalroot {\n    border-top: var(--shipborder);\n}\n\n.horizontaltail {\n    border-bottom: var(--shipborder);\n}\n\n.verticaltail {\n    border-bottom: var(--shipborder);\n}\n\n.missedcell::after {\n    position: relative;\n    top: 10%;\n    background-color: black;\n}\n\n.player.endgame {\n    left: 7vw;\n}\n\n.computer.endgame {\n    left: 50vw;\n}\n\n.hitcell::after {\n    position: relative;\n    top: 10%;\n    content: \"X\";\n    color: #d93e39;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.hidden {\n    visibility: hidden;\n    max-height: 0;\n    opacity: 0;\n}\n\n@media (max-width: 1200px) {\n    section {\n        left: 25vw;\n    }\n\n    .player.endgame {\n        left: 3vw;\n    }\n}\n\n@media (max-width: 1100px) {\n    body {\n        --cellSize: 4.5rem;\n    }\n\n    section {\n        left: 20vw;\n    }\n\n    .computer.endgame {\n        left: 20vw;\n        top: max(60vh, 70vw);\n    }\n}\n\n@media (max-width: 800px) {\n    body {\n        --cellSize: 2.5rem;\n    }\n\n    section {\n        left: 15vw;\n    }\n\n    .player.endgame {\n        left: 15vw;\n    }\n\n    .computer.endgame {\n        left: 15vw;\n        top: max(75vh, 90vw);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");


(0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.Game)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxV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OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFFbENpRSwrQ0FBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2JvYXJkRE9NLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBib2FyZERPTSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IChib2FyZCwgZmxlZXQsIGVuZGdhbWUgPSBudWxsKSA9PiB7XG4gICAgICAgIGxldCBkb21Cb2FyZDtcbiAgICAgICAgaWYgKGVuZGdhbWUpIHtcbiAgICAgICAgICAgIGRvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBib2FyZC1jZWxscycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBkb21Cb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGxldCByb3dzID0gMDtcbiAgICAgICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlcyA9IDA7XG4gICAgICAgICAgICBjb25zdCBkb21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvbVJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93TnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICAgICAgICAgICAgcm93TnVtYmVyLnRleHRDb250ZW50ID0gcm93cyArIDE7XG4gICAgICAgICAgICBkb21Sb3cuYXBwZW5kQ2hpbGQocm93TnVtYmVyKTtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRvbUNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGRvbUNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Jvd3N9LSR7Y2VsbHN9YCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNlbGwoZG9tQ2VsbCwgY2VsbCwgJ3BsYXllcicsIGZsZWV0KTtcbiAgICAgICAgICAgICAgICBkb21Sb3cuYXBwZW5kQ2hpbGQoZG9tQ2VsbCk7XG4gICAgICAgICAgICAgICAgY2VsbHMgKz0gMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQoZG9tUm93KTtcbiAgICAgICAgICAgIHJvd3MgKz0gMTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSAoYm9hcmQsIGZsZWV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29tcGJvYXJkLWNlbGxzJyk7XG4gICAgICAgIGRvbUJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbGV0IHJvd3MgPSAwO1xuICAgICAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgIGxldCBjZWxscyA9IDA7XG4gICAgICAgICAgICBjb25zdCBkb21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvbVJvdy5jbGFzc0xpc3QuYWRkKCdjb21wcm93Jyk7XG4gICAgICAgICAgICBjb25zdCByb3dOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd051bWJlci5jbGFzc0xpc3QuYWRkKCdudW1iZXInKTtcbiAgICAgICAgICAgIHJvd051bWJlci50ZXh0Q29udGVudCA9IHJvd3MgKyAxO1xuICAgICAgICAgICAgZG9tUm93LmFwcGVuZENoaWxkKHJvd051bWJlcik7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkb21DZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXBjZWxsJyk7XG4gICAgICAgICAgICAgICAgZG9tQ2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cm93c30tJHtjZWxsc31gKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q2VsbChkb21DZWxsLCBjZWxsLCAnY29tcHV0ZXInLCBmbGVldCk7XG4gICAgICAgICAgICAgICAgZG9tUm93LmFwcGVuZENoaWxkKGRvbUNlbGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChkb21Sb3cpO1xuICAgICAgICAgICAgcm93cyArPSAxO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheUNlbGwgPSAoZWxlbWVudCwgc3F1YXJlLCBib2FyZFR5cGUsIGZsZWV0KSA9PiB7XG4gICAgICAgIGlmIChjZWxsLnN0YXR1cyA9PT0gbnVsbCAmJiBjZWxsLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLnN0YXR1cyA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3NlZGNlbGwnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLnN0YXR1cyA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Y2VsbCcpO1xuICAgICAgICAgICAgaWYgKGJvYXJkVHlwZSA9PT0gJ3BsYXllcicgfHwgZmxlZXRbY2VsbC5zaGlwXS5zaGlwLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNoaXBDZWxsKGVsZW1lbnQsIGNlbGwsIGZsZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcENlbGwoZWxlbWVudCwgY2VsbCwgZmxlZXQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlTaGlwQ2VsbCA9IChlbGVtZW50LCBjZWxsLCBmbGVldCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXBjZWxsJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZmxlZXRbY2VsbC5zaGlwXS5jb29yZGluYXRlcztcbiAgICAgICAgaWYgKGZsZWV0W2NlbGwuc2hpcF0uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzWzBdWzBdID09PSBjZWxsLmNvb3JkaW5hdGVzWzBdICYmIGNvb3JkaW5hdGVzWzBdWzFdID09PSBjZWxsLmNvb3JkaW5hdGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFscm9vdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXVswXSA9PT0gY2VsbC5jb29yZGluYXRlc1swXSAmJiBjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXVsxXSA9PT0gY2VsbC5jb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbHRhaWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlc1swXVswXSA9PT0gY2VsbC5jb29yZGluYXRlc1swXSAmJiBjb29yZGluYXRlc1swXVsxXSA9PT0gY2VsbC5jb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWxyb290Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdWzBdID09PSBjZWxsLmNvb3JkaW5hdGVzWzBdICYmIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdWzFdID09PSBjZWxsLmNvb3JkaW5hdGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbHRhaWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQm9hcmQgPSAoYWN0dWFsQm9hcmQsIG5leHRCb2FyZCkgPT4ge1xuICAgICAgICBhY3R1YWxCb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbmV4dEJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgaGlkZUJvYXJkIH07XG59XG4iLCJleHBvcnQgY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBudWxsO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgfVxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSAxMjtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3dbal0gPSBuZXcgQ2VsbChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmRbaV0gPSByb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgZmxlZXQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDUpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogMCwgXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDEpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMSksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBnZXRGbGVldCA9ICgpID0+IGZsZWV0O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgbGV0IHNoaXBJZCA9IDA7XG4gICAgICAgIHdoaWxlIChmbGVldFtzaGlwSWRdLmlzUGxhY2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2hpcElkID49IGZsZWV0Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBzaGlwSWQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGNvbCArIGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGggPiBib2FyZC5sZW5ndGgpIHx8XG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHJvdyArIGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGggPiBib2FyZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3JvdywgY29sICsgaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBmbGVldFtzaGlwSWRdLmRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3JvdyArIGksIGNvbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICBpZiAoY2VsbHNFbXB0eShzaGlwQ29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGJvYXJkW2NlbGxbMF1dW2NlbGxbMV1dLnNoaXAgPSBzaGlwSWQ7XG4gICAgICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5jb29yZGluYXRlcy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmbGVldFtzaGlwSWRdLmlzUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbVBsYWNlbXQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbSA9PT0gMSkgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMiksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIGkgLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjZWxsc0VtcHR5ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcy5ldmVyeSgoY2VsbCkgPT4gYm9hcmRbY2VsbFswXV1bY2VsbFsxXV0uc2hpcCA9PT0gbnVsbFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXTtcbiAgICAgICAgaWYgKGNlbGwuc3RhdHVzID09PSAnaGl0JyB8fCBjZWxsLnN0YXR1cyA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwSWQgPSBjZWxsLnNoaXA7XG4gICAgICAgICAgICBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLnN0YXR1cyA9ICdoaXQnO1xuICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgaWYgKGZsZWV0W3NoaXBJZF0uc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uc3RhdHVzID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmbGVldFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldEZsZWV0LFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJhbmRvbVBsYWNlbXQsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGZsZWV0U3VuayxcbiAgICB9O1xufSIsImltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmRET00nO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gYm9hcmRET00oKTtcbiAgICBjb25zdCBwbGF5ZXJGbGVldCA9IHBsYXllci5ib2FyZC5nZXRGbGVldCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyRmxlZXQgPSBjb21wdXRlci5ib2FyZC5nZXRGbGVldCgpO1xuICAgIGRpc3BsYXkucGxheWVyQm9hcmQocGxheWVyLmJvYXJkLmdldEJvYXJkKCksIHBsYXllckZsZWV0KTtcbiAgICBkaXNwbGF5LmNvbXB1dGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgY29tcHV0ZXJGbGVldCk7XG4gICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXInKTtcbiAgICBjb25zdCBjb21wdXRlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXInKTtcbiAgICBkaXNwbGF5LmhpZGVCb2FyZChjb21wdXRlclNlY3Rpb24sIHBsYXllclNlY3Rpb24pO1xuXG4gICAgY29uc3QgZ2V0U2hpcFJvb3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtYnRuJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2x1bW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXJlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5wbGFjZVNoaXAoTnVtYmVyKGNvbHVtbi52YWx1ZSksIE51bWJlcihyb3cudmFsdWUpLCBkaXJlY3Rpb24udmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5ZXJCb2FyZChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyRmxlZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZ2FtZXR4dCcpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkNob29zZSB5b3VyIFwiO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IE51bWJlcih0ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgKz0gXCJTZWNvbmQgU2hpcCAoTGVuZ3RoID0gNClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiVGhpcmQgU2hpcCAoTGVuZ3RoID0gMylcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCArPSBcIkZvdXJ0aCBTaGlwIChMZW5ndGggPSAzKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiRmlmdGggU2hpcCAoTGVuZ3RoID0gMilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiU2l4dGggU2hpcCAoTGVuZ3RoID0gMilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiU2V2ZW50aCBTaGlwIChTaW5nbGUgQ2VsbClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiRWlnaHRoIFNoaXAgKFNpbmdsZSBDZWxsKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgKz0gXCJOaW50aCBTaGlwIChTaW5nbGUgQ2VsbClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCArPSBcIkZpcnN0IFNoaXAgKExlbmd0aCA9IDUpXCI7ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiIHJvb3QgY29vcmRpbmF0ZXMgYW5kIGRpcmVjdGlvbiFcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmlkID0gaWQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmJvYXJkLnJhbmRvbVBsYWNlbXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmFuZG9tUG9zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tJyk7XG4gICAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5yYW5kb21QbGFjZW10KCk7XG4gICAgICAgICAgICBkaXNwbGF5LnBsYXllckJvYXJkKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXJGbGVldCk7XG4gICAgICAgICAgICBjb21wdXRlci5ib2FyZC5yYW5kb21QbGFjZW10KCk7XG4gICAgICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVnYW1lJyk7XG4gICAgICAgIHByZWdhbWUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGhlbHBDb250ZW50LnRleHRDb250ZW50ID0gXCJDbGljayBvbiBhIGNlbGwgaW4geW91ciBvcHBvbmVudCdzIGdyaWQgdG8gYXR0YWNrIGl0LiBJZiBhbiBYIGFwcGVhcnMsIHlvdSd2ZSBtYWRlIGEgaGl0ISBZb3UnbGwgZ2V0IHRvIHRha2UgYW5vdGhlciB0dXJuIGF1dG9tYXRpY2FsbHkuIElmIHRoZSBjZWxsIGZpbGxzIGluLCB5b3UgZGlkIG5vdCBtYWtlIGEgaGl0OyB0aGUgY29tcHV0ZXIgd2lsbCBub3cgdGFrZSBpdHMgdHVybi5cIjtcbiAgICAgICAgZGlzcGxheS5oaWRlQm9hcmQocGxheWVyU2VjdGlvbiwgY29tcHV0ZXJTZWN0aW9uKTtcbiAgICAgICAgd2FpdE1vdmUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcC1jZWxsJyk7XG4gICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGNlbGwuaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BsYXlSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmNvbXB1dGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgY29tcHV0ZXJGbGVldCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmZsZWV0U3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoJ1BsYXllcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZUJvYXJkKGNvbXB1dGVyU2VjdGlvbiwgcGxheWVyU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLmZsZWV0U3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kR2FtZSgnQ29tcHV0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZUJvYXJkKHBsYXllclNlY3Rpb24sIGNvbXB1dGVyU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXRNb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheVJlc3VsdCA9IChhdHRhY2tyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuICAgICAgICBpZiAoYXR0YWNrcmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgICAgICAgcmVzdWx0LnRleHRDb250ZW50ID0gJ0hpdCEnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2tyZXN1bHQgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgcmVzdWx0LnRleHRDb250ZW50ID0gJ01pc3MhJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrcmVzdWx0ID09PSAnc3VuaycpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9ICdTaGlwIHN1bmshJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYW5hZ2VDb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvbXB1dGVyLnBpY2tDZWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyLmxhc3RIaXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29tcHV0ZXIucmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIubGFzdEhpdCA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnc3VuaycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIubGFzdEhpdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BsYXlSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXllckJvYXJkKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXIuYm9hcmQuZ2V0RmxlZXQoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmllcyArPSAxO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldXNsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgICAgICAgcmVzdWx0LnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciEgJHt3aW5uZXJ9IHdpbnMhYDtcbiAgICAgICAgd2lubmVyID09PSAnUGxheWVyJyA/IHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRpc3BsYXkucGxheWVyQm9hcmQoY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgY29tcHV0ZXJGbGVldCwgJ2VuZGdhbWUnKTtcbiAgICAgICAgcGxheWVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdlbmRnYW1lJyk7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdlbmRnYW1lJyk7XG4gICAgfTtcblxuICAgIGdldFNoaXBSb290KCk7XG4gICAgZ2V0UmFuZG9tUG9zKCk7XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgfVxufVxuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMik7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgcGlja0NlbGwoKSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0SGl0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNob2ljZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdEhpdFswXSA+IDApIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzLnB1c2goW3RoaXMubGFzdEhpdFswXSAtIDEsIHRoaXMubGFzdEhpdFsxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdEhpdFswXSA8IDExKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlcy5wdXNoKFt0aGlzLmxhc3RIaXRbMF0gKyAxLCB0aGlzLmxhc3RIaXRbMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRbMV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlcy5wdXNoKFt0aGlzLmxhc3RIaXRbMF0sIHRoaXMubGFzdEhpdFsxXSAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRbMV0gPCAxMSkge1xuICAgICAgICAgICAgICAgIGNob2ljZXMucHVzaChbdGhpcy5sYXN0SGl0WzBdLCB0aGlzLmxhc3RIaXRbMV0gKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCByYW5kb21EaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY2hvaWNlID0gY2hvaWNlc1tyYW5kb21EaXJlY3Rpb25dO1xuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9OyIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgLS1jZWxsU2l6ZTogNXJlbTtcbiAgICAtLXNoaXBib3JkZXI6IDJweCBzb2xpZCAjMzMwODAyO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5Nzc4MjtcbiAgICBjb2xvcjogI2Y3ZjhmODtcbiAgICBmb250LWZhbWlseTogJ0NoYWtyYSBQZXRjaCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaGVhZGVyIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQW50b24gU0MnLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJlZ2FtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuZm9ybSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMzMDgwMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViMWExO1xuICAgIGNvbG9yOiAjMWEwYzA5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxLjVyZW0gNXJlbTtcbiAgICBtYXJnaW46IDEuNXJlbTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxcmVtIDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDQ1dnc7XG59XG5cbi5wcmVnYW1ldHh0IHtcbiAgICBtYXJnaW46IDEuNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggI2Y3ZjhmODtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2Q5M2UzOTtcblxufVxuXG4jZGlyZWN0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XG59XG5cbi5wcmVnYW1ldHh0LCAjZm9ybWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xufVxuXG4jZm9ybWJ0biwgI3JhbmRvbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODZiYTA7XG4gICAgY29sb3I6ICNmN2Y4Zjg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jZm9ybWJ0bjphY3RpdmUsICNyYW5kb206YWN0aXZlIHtcbiAgICB0b3A6IDJweDtcbn1cblxuI3JhbmRvbSB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4ucmVzdWx0IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYm9hcmRzIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzB2dztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmJvYXJkaGVhZGVyLCAuY29tcGhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5ib2FyZCwgLmNvbXBib2FyZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubGV0dGVycyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLmxldHRlciB7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGVuZDtcbn1cblxuLm51bWJlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxTaXplKTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sZXR0ZXJzLCAucm93LCAuY29tcHJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMywgMWZyKTtcbn1cblxuLmNlbGwsIC5jb21wY2VsbCB7XG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsU2l6ZSk7XG4gICAgd2lkdGg6IHZhcigtLWNlbGxTaXplKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViMWExO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIzFhMGMwOTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2hha3JhIFBldGNoJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jZWxsU2l6ZSkgLSAxcmVtKTtcbn1cblxuLnNoaXBjZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5ZTlhO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGJvcmRlci10b3A6IHZhcigtLXNoaXBib3JkZXIpO1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoaXBib3JkZXIpO1xufVxuXG4udmVydGljYWwge1xuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1zaGlwYm9yZGVyKTtcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoaXBib3JkZXIpO1xufVxuXG4uaG9yaXpvbnRhbHJvb3Qge1xuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1zaGlwYm9yZGVyKTtcbn1cblxuLnZlcnRpY2Fscm9vdCB7XG4gICAgYm9yZGVyLXRvcDogdmFyKC0tc2hpcGJvcmRlcik7XG59XG5cbi5ob3Jpem9udGFsdGFpbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpcGJvcmRlcik7XG59XG5cbi52ZXJ0aWNhbHRhaWwge1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoaXBib3JkZXIpO1xufVxuXG4ubWlzc2VkY2VsbDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnBsYXllci5lbmRnYW1lIHtcbiAgICBsZWZ0OiA3dnc7XG59XG5cbi5jb21wdXRlci5lbmRnYW1lIHtcbiAgICBsZWZ0OiA1MHZ3O1xufVxuXG4uaGl0Y2VsbDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwJTtcbiAgICBjb250ZW50OiBcIlhcIjtcbiAgICBjb2xvcjogI2Q5M2UzOTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbGVmdDogMjV2dztcbiAgICB9XG5cbiAgICAucGxheWVyLmVuZGdhbWUge1xuICAgICAgICBsZWZ0OiAzdnc7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIC0tY2VsbFNpemU6IDQuNXJlbTtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbGVmdDogMjB2dztcbiAgICB9XG5cbiAgICAuY29tcHV0ZXIuZW5kZ2FtZSB7XG4gICAgICAgIGxlZnQ6IDIwdnc7XG4gICAgICAgIHRvcDogbWF4KDYwdmgsIDcwdncpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIC0tY2VsbFNpemU6IDIuNXJlbTtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbGVmdDogMTV2dztcbiAgICB9XG5cbiAgICAucGxheWVyLmVuZGdhbWUge1xuICAgICAgICBsZWZ0OiAxNXZ3O1xuICAgIH1cblxuICAgIC5jb21wdXRlci5lbmRnYW1lIHtcbiAgICAgICAgbGVmdDogMTV2dztcbiAgICAgICAgdG9wOiBtYXgoNzV2aCwgOTB2dyk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHVDQUF1QztJQUN2QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixvQkFBb0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiA2MCU7XFxuICAgIC0tY2VsbFNpemU6IDVyZW07XFxuICAgIC0tc2hpcGJvcmRlcjogMnB4IHNvbGlkICMzMzA4MDI7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk3NzgyO1xcbiAgICBjb2xvcjogI2Y3ZjhmODtcXG4gICAgZm9udC1mYW1pbHk6ICdDaGFrcmEgUGV0Y2gnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24gU0MnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJlZ2FtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMzA4MDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWIxYTE7XFxuICAgIGNvbG9yOiAjMWEwYzA5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSA1cmVtO1xcbiAgICBtYXJnaW46IDEuNXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXJlbSAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDQ1dnc7XFxufVxcblxcbi5wcmVnYW1ldHh0IHtcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggI2Y3ZjhmODtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkOTNlMzk7XFxuXFxufVxcblxcbiNkaXJlY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxufVxcblxcbi5wcmVnYW1ldHh0LCAjZm9ybWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG59XFxuXFxuI2Zvcm1idG4sICNyYW5kb20ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NmJhMDtcXG4gICAgY29sb3I6ICNmN2Y4Zjg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybWJ0bjphY3RpdmUsICNyYW5kb206YWN0aXZlIHtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbiNyYW5kb20ge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5yZXN1bHQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzMHZ3O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLmJvYXJkaGVhZGVyLCAuY29tcGhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYm9hcmQsIC5jb21wYm9hcmQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubGV0dGVycyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubGV0dGVyIHtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGVuZDtcXG59XFxuXFxuLm51bWJlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxTaXplKTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGV0dGVycywgLnJvdywgLmNvbXByb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMywgMWZyKTtcXG59XFxuXFxuLmNlbGwsIC5jb21wY2VsbCB7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbFNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbFNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViMWExO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMxYTBjMDk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0NoYWtyYSBQZXRjaCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1jZWxsU2l6ZSkgLSAxcmVtKTtcXG59XFxuXFxuLnNoaXBjZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOWU5YTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGJvcmRlci10b3A6IHZhcigtLXNoaXBib3JkZXIpO1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zaGlwYm9yZGVyKTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNoaXBib3JkZXIpO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoaXBib3JkZXIpO1xcbn1cXG5cXG4uaG9yaXpvbnRhbHJvb3Qge1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2hpcGJvcmRlcik7XFxufVxcblxcbi52ZXJ0aWNhbHJvb3Qge1xcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zaGlwYm9yZGVyKTtcXG59XFxuXFxuLmhvcml6b250YWx0YWlsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpcGJvcmRlcik7XFxufVxcblxcbi52ZXJ0aWNhbHRhaWwge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zaGlwYm9yZGVyKTtcXG59XFxuXFxuLm1pc3NlZGNlbGw6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIuZW5kZ2FtZSB7XFxuICAgIGxlZnQ6IDd2dztcXG59XFxuXFxuLmNvbXB1dGVyLmVuZGdhbWUge1xcbiAgICBsZWZ0OiA1MHZ3O1xcbn1cXG5cXG4uaGl0Y2VsbDo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICAgIGNvbG9yOiAjZDkzZTM5O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgc2VjdGlvbiB7XFxuICAgICAgICBsZWZ0OiAyNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIuZW5kZ2FtZSB7XFxuICAgICAgICBsZWZ0OiAzdnc7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIC0tY2VsbFNpemU6IDQuNXJlbTtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uIHtcXG4gICAgICAgIGxlZnQ6IDIwdnc7XFxuICAgIH1cXG5cXG4gICAgLmNvbXB1dGVyLmVuZGdhbWUge1xcbiAgICAgICAgbGVmdDogMjB2dztcXG4gICAgICAgIHRvcDogbWF4KDYwdmgsIDcwdncpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIC0tY2VsbFNpemU6IDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uIHtcXG4gICAgICAgIGxlZnQ6IDE1dnc7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllci5lbmRnYW1lIHtcXG4gICAgICAgIGxlZnQ6IDE1dnc7XFxuICAgIH1cXG5cXG4gICAgLmNvbXB1dGVyLmVuZGdhbWUge1xcbiAgICAgICAgbGVmdDogMTV2dztcXG4gICAgICAgIHRvcDogbWF4KDc1dmgsIDkwdncpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lcGxheSc7XG5cbkdhbWUoKTsiXSwibmFtZXMiOlsiYm9hcmRET00iLCJwbGF5ZXJCb2FyZCIsImJvYXJkIiwiZmxlZXQiLCJlbmRnYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZG9tQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInJvd3MiLCJmb3JFYWNoIiwicm93Iiwic3F1YXJlcyIsImRvbVJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb3dOdW1iZXIiLCJhcHBlbmRDaGlsZCIsImNlbGwiLCJkb21DZWxsIiwic2V0QXR0cmlidXRlIiwiY2VsbHMiLCJkaXNwbGF5Q2VsbCIsImNvbXB1dGVyQm9hcmQiLCJlbGVtZW50Iiwic3F1YXJlIiwiYm9hcmRUeXBlIiwic3RhdHVzIiwic2hpcCIsImlzU3VuayIsImRpc3BsYXlTaGlwQ2VsbCIsImNvb3JkaW5hdGVzIiwiZGlyZWN0aW9uIiwiaGlkZUJvYXJkIiwiYWN0dWFsQm9hcmQiLCJuZXh0Qm9hcmQiLCJyZW1vdmUiLCJDZWxsIiwiY29uc3RydWN0b3IiLCJTaGlwIiwiR2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJzaXplIiwiaSIsImoiLCJnZXRCb2FyZCIsImlkIiwiaXNQbGFjZWQiLCJnZXRGbGVldCIsInBsYWNlU2hpcCIsImNvbCIsInNoaXBJZCIsInNoaXBDb29yZGluYXRlcyIsInB1c2giLCJjZWxsc0VtcHR5IiwicmFuZG9tUGxhY2VtdCIsInJhbmRvbSIsIk1hdGgiLCJyb3VuZCIsInJlc3VsdCIsImZsb29yIiwiZXZlcnkiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiZmxlZXRTdW5rIiwiUGxheWVyIiwiQ29tcHV0ZXIiLCJHYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJkaXNwbGF5IiwicGxheWVyRmxlZXQiLCJjb21wdXRlckZsZWV0IiwicGxheWVyU2VjdGlvbiIsImNvbXB1dGVyU2VjdGlvbiIsImdldFNoaXBSb290IiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbHVtbiIsIk51bWJlciIsInZhbHVlIiwidGV4dCIsInN0YXJ0R2FtZSIsImdldFJhbmRvbVBvcyIsInJhbmRvbUJ0biIsInByZWdhbWUiLCJoZWxwQ29udGVudCIsIndhaXRNb3ZlIiwiY29tcHV0ZXJDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsImRpc3BsYXlSZXN1bHQiLCJlbmRHYW1lIiwic2V0VGltZW91dCIsIm1hbmFnZUNvbXB1dGVyVHVybiIsImF0dGFja3Jlc3VsdCIsImF0dGVtcHRzIiwicGlja0NlbGwiLCJsYXN0SGl0IiwicmFuZG9tQ29vcmRpbmF0ZXMiLCJ0cmllcyIsIndpbm5lciIsInJldXNsdCIsIngiLCJ5IiwiY2hvaWNlcyIsInJhbmRvbURpcmVjdGlvbiIsImNob2ljZSIsImhpdHMiXSwic291cmNlUm9vdCI6IiJ9