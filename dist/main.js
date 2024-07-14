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
      let cells = 0;
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
    const domBoard = document.querySelector('.compboard-cells');
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
  const displayCell = (element, cell, boardType, fleet) => {
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
    const playerBoardHeader = document.querySelector('.boardheader');
    playerBoardHeader.textContent += "Click on a cell in your opponent's grid to attack it. If an X appears, you've made a hit! You'll get to take another turn automatically. If the cell fills in, you did not make a hit; the computer will now take its turn.";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlB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O0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFFbEMrRCwrQ0FBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2JvYXJkRE9NLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rcmFub3J0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va3Jhbm9ydGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tyYW5vcnRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBib2FyZERPTSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IChib2FyZCwgZmxlZXQsIGVuZGdhbWUgPSBudWxsKSA9PiB7XG4gICAgICAgIGxldCBkb21Cb2FyZDtcbiAgICAgICAgaWYgKGVuZGdhbWUpIHtcbiAgICAgICAgICAgIGRvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBib2FyZC1jZWxscycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBkb21Cb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGxldCByb3dzID0gMDtcbiAgICAgICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAwO1xuICAgICAgICAgICAgY29uc3QgZG9tUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb21Sb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBjb25zdCByb3dOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd051bWJlci5jbGFzc0xpc3QuYWRkKCdudW1iZXInKTtcbiAgICAgICAgICAgIHJvd051bWJlci50ZXh0Q29udGVudCA9IHJvd3MgKyAxO1xuICAgICAgICAgICAgZG9tUm93LmFwcGVuZENoaWxkKHJvd051bWJlcik7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkb21DZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICBkb21DZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtyb3dzfS0ke2NlbGxzfWApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDZWxsKGRvbUNlbGwsIGNlbGwsICdwbGF5ZXInLCBmbGVldCk7XG4gICAgICAgICAgICAgICAgZG9tUm93LmFwcGVuZENoaWxkKGRvbUNlbGwpO1xuICAgICAgICAgICAgICAgIGNlbGxzICs9IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKGRvbVJvdyk7XG4gICAgICAgICAgICByb3dzICs9IDE7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gKGJvYXJkLCBmbGVldCkgPT4ge1xuICAgICAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wYm9hcmQtY2VsbHMnKTtcbiAgICAgICAgZG9tQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBsZXQgcm93cyA9IDA7XG4gICAgICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgbGV0IGNlbGxzID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZG9tUm93LmNsYXNzTGlzdC5hZGQoJ2NvbXByb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93TnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICAgICAgICAgICAgcm93TnVtYmVyLnRleHRDb250ZW50ID0gcm93cyArIDE7XG4gICAgICAgICAgICBkb21Sb3cuYXBwZW5kQ2hpbGQocm93TnVtYmVyKTtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRvbUNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcGNlbGwnKTtcbiAgICAgICAgICAgICAgICBkb21DZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtyb3dzfS0ke2NlbGxzfWApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDZWxsKGRvbUNlbGwsIGNlbGwsICdjb21wdXRlcicsIGZsZWV0KTtcbiAgICAgICAgICAgICAgICBkb21Sb3cuYXBwZW5kQ2hpbGQoZG9tQ2VsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKGRvbVJvdyk7XG4gICAgICAgICAgICByb3dzICs9IDE7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBkaXNwbGF5Q2VsbCA9IChlbGVtZW50LCBjZWxsLCBib2FyZFR5cGUsIGZsZWV0KSA9PiB7XG4gICAgICAgIGlmIChjZWxsLnN0YXR1cyA9PT0gbnVsbCAmJiBjZWxsLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLnN0YXR1cyA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3NlZGNlbGwnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLnN0YXR1cyA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Y2VsbCcpO1xuICAgICAgICAgICAgaWYgKGJvYXJkVHlwZSA9PT0gJ3BsYXllcicgfHwgZmxlZXRbY2VsbC5zaGlwXS5zaGlwLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNoaXBDZWxsKGVsZW1lbnQsIGNlbGwsIGZsZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcENlbGwoZWxlbWVudCwgY2VsbCwgZmxlZXQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlTaGlwQ2VsbCA9IChlbGVtZW50LCBjZWxsLCBmbGVldCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXBjZWxsJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZmxlZXRbY2VsbC5zaGlwXS5jb29yZGluYXRlcztcbiAgICAgICAgaWYgKGZsZWV0W2NlbGwuc2hpcF0uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzWzBdWzBdID09PSBjZWxsLmNvb3JkaW5hdGVzWzBdICYmIGNvb3JkaW5hdGVzWzBdWzFdID09PSBjZWxsLmNvb3JkaW5hdGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFscm9vdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXVswXSA9PT0gY2VsbC5jb29yZGluYXRlc1swXSAmJiBjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXVsxXSA9PT0gY2VsbC5jb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbHRhaWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlc1swXVswXSA9PT0gY2VsbC5jb29yZGluYXRlc1swXSAmJiBjb29yZGluYXRlc1swXVsxXSA9PT0gY2VsbC5jb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWxyb290Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdWzBdID09PSBjZWxsLmNvb3JkaW5hdGVzWzBdICYmIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdWzFdID09PSBjZWxsLmNvb3JkaW5hdGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbHRhaWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQm9hcmQgPSAoYWN0dWFsQm9hcmQsIG5leHRCb2FyZCkgPT4ge1xuICAgICAgICBhY3R1YWxCb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbmV4dEJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgaGlkZUJvYXJkIH07XG59XG4iLCJleHBvcnQgY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBudWxsO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgfVxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSAxMjtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3dbal0gPSBuZXcgQ2VsbChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmRbaV0gPSByb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgZmxlZXQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDUpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogMCwgXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBpc1BsYWNlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6IG5ldyBTaGlwKDEpLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogbmV3IFNoaXAoMSksXG4gICAgICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgaXNQbGFjZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBnZXRGbGVldCA9ICgpID0+IGZsZWV0O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgbGV0IHNoaXBJZCA9IDA7XG4gICAgICAgIHdoaWxlIChmbGVldFtzaGlwSWRdLmlzUGxhY2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2hpcElkID49IGZsZWV0Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBzaGlwSWQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGNvbCArIGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGggPiBib2FyZC5sZW5ndGgpIHx8XG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHJvdyArIGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGggPiBib2FyZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZsZWV0W3NoaXBJZF0uc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3JvdywgY29sICsgaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBmbGVldFtzaGlwSWRdLmRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3JvdyArIGksIGNvbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICBpZiAoY2VsbHNFbXB0eShzaGlwQ29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGJvYXJkW2NlbGxbMF1dW2NlbGxbMV1dLnNoaXAgPSBzaGlwSWQ7XG4gICAgICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5jb29yZGluYXRlcy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmbGVldFtzaGlwSWRdLmlzUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbVBsYWNlbXQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbSA9PT0gMSkgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMiksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIGkgLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjZWxsc0VtcHR5ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcy5ldmVyeSgoY2VsbCkgPT4gYm9hcmRbY2VsbFswXV1bY2VsbFsxXV0uc2hpcCA9PT0gbnVsbFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXTtcbiAgICAgICAgaWYgKGNlbGwuc3RhdHVzID09PSAnaGl0JyB8fCBjZWxsLnN0YXR1cyA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwSWQgPSBjZWxsLnNoaXA7XG4gICAgICAgICAgICBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLnN0YXR1cyA9ICdoaXQnO1xuICAgICAgICAgICAgZmxlZXRbc2hpcElkXS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgaWYgKGZsZWV0W3NoaXBJZF0uc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uc3RhdHVzID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmbGVldFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldEZsZWV0LFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJhbmRvbVBsYWNlbXQsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGZsZWV0U3VuayxcbiAgICB9O1xufSIsImltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmRET00nO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gYm9hcmRET00oKTtcbiAgICBjb25zdCBwbGF5ZXJGbGVldCA9IHBsYXllci5ib2FyZC5nZXRGbGVldCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyRmxlZXQgPSBjb21wdXRlci5ib2FyZC5nZXRGbGVldCgpO1xuICAgIGRpc3BsYXkucGxheWVyQm9hcmQocGxheWVyLmJvYXJkLmdldEJvYXJkKCksIHBsYXllckZsZWV0KTtcbiAgICBkaXNwbGF5LmNvbXB1dGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgY29tcHV0ZXJGbGVldCk7XG4gICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXInKTtcbiAgICBjb25zdCBjb21wdXRlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXInKTtcbiAgICBkaXNwbGF5LmhpZGVCb2FyZChjb21wdXRlclNlY3Rpb24sIHBsYXllclNlY3Rpb24pO1xuXG4gICAgY29uc3QgZ2V0U2hpcFJvb3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtYnRuJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2x1bW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXJlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5wbGFjZVNoaXAoTnVtYmVyKGNvbHVtbi52YWx1ZSksIE51bWJlcihyb3cudmFsdWUpLCBkaXJlY3Rpb24udmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5ZXJCb2FyZChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyRmxlZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZ2FtZXR4dCcpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkNob29zZSB5b3VyIFwiO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IE51bWJlcih0ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgKz0gXCJTZWNvbmQgU2hpcCAoTGVuZ3RoID0gNClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiVGhpcmQgU2hpcCAoTGVuZ3RoID0gMylcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCArPSBcIkZvdXJ0aCBTaGlwIChMZW5ndGggPSAzKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiRmlmdGggU2hpcCAoTGVuZ3RoID0gMilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiU2l4dGggU2hpcCAoTGVuZ3RoID0gMilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiU2V2ZW50aCBTaGlwIChTaW5nbGUgQ2VsbClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiRWlnaHRoIFNoaXAgKFNpbmdsZSBDZWxsKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgKz0gXCJOaW50aCBTaGlwIChTaW5nbGUgQ2VsbClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCArPSBcIkZpcnN0IFNoaXAgKExlbmd0aCA9IDUpXCI7ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ICs9IFwiIHJvb3QgY29vcmRpbmF0ZXMgYW5kIGRpcmVjdGlvbiFcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmlkID0gaWQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmJvYXJkLnJhbmRvbVBsYWNlbXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmFuZG9tUG9zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tJyk7XG4gICAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5yYW5kb21QbGFjZW10KCk7XG4gICAgICAgICAgICBkaXNwbGF5LnBsYXllckJvYXJkKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpLCBwbGF5ZXJGbGVldCk7XG4gICAgICAgICAgICBjb21wdXRlci5ib2FyZC5yYW5kb21QbGFjZW10KCk7XG4gICAgICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVnYW1lJyk7XG4gICAgICAgIHByZWdhbWUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkaGVhZGVyJyk7XG4gICAgICAgIHBsYXllckJvYXJkSGVhZGVyLnRleHRDb250ZW50ICs9IFwiQ2xpY2sgb24gYSBjZWxsIGluIHlvdXIgb3Bwb25lbnQncyBncmlkIHRvIGF0dGFjayBpdC4gSWYgYW4gWCBhcHBlYXJzLCB5b3UndmUgbWFkZSBhIGhpdCEgWW91J2xsIGdldCB0byB0YWtlIGFub3RoZXIgdHVybiBhdXRvbWF0aWNhbGx5LiBJZiB0aGUgY2VsbCBmaWxscyBpbiwgeW91IGRpZCBub3QgbWFrZSBhIGhpdDsgdGhlIGNvbXB1dGVyIHdpbGwgbm93IHRha2UgaXRzIHR1cm4uXCI7XG4gICAgICAgIGRpc3BsYXkuaGlkZUJvYXJkKHBsYXllclNlY3Rpb24sIGNvbXB1dGVyU2VjdGlvbik7XG4gICAgICAgIHdhaXRNb3ZlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXAtY2VsbCcpO1xuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBjZWxsLmlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5jb21wdXRlckJvYXJkKGNvbXB1dGVyLmJvYXJkLmdldEJvYXJkKCksIGNvbXB1dGVyRmxlZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wdXRlci5ib2FyZC5mbGVldFN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRHYW1lKCdQbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGVCb2FyZChjb21wdXRlclNlY3Rpb24sIHBsYXllclNlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZUNvbXB1dGVyVHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5mbGVldFN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoJ0NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGVCb2FyZChwbGF5ZXJTZWN0aW9uLCBjb21wdXRlclNlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0TW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlSZXN1bHQgPSAoYXR0YWNrcmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgICAgICAgaWYgKGF0dGFja3Jlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9ICdIaXQhJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrcmVzdWx0ID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9ICdNaXNzISc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dGFja3Jlc3VsdCA9PT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dENvbnRlbnQgPSAnU2hpcCBzdW5rISc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFuYWdlQ29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb21wdXRlci5waWNrQ2VsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlci5sYXN0SGl0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvbXB1dGVyLnJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmxhc3RIaXQgPSBjb29yZGluYXRlcztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmxhc3RIaXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5ZXJCb2FyZChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKSwgcGxheWVyLmJvYXJkLmdldEZsZWV0KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZXMgKz0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zdCByZXVzbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG4gICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGBHYW1lIG92ZXIhICR7d2lubmVyfSB3aW5zIWA7XG4gICAgICAgIHdpbm5lciA9PT0gJ1BsYXllcicgPyBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpIDogY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBkaXNwbGF5LnBsYXllckJvYXJkKGNvbXB1dGVyLmJvYXJkLmdldEJvYXJkKCksIGNvbXB1dGVyRmxlZXQsICdlbmRnYW1lJyk7XG4gICAgICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZW5kZ2FtZScpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZW5kZ2FtZScpO1xuICAgIH07XG5cbiAgICBnZXRTaGlwUm9vdCgpO1xuICAgIGdldFJhbmRvbVBvcygpO1xufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgIH1cblxuICAgIHJhbmRvbUNvb3JkaW5hdGVzKCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIHBpY2tDZWxsKCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdEhpdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBjaG9pY2VzID0gW107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRbMF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlcy5wdXNoKFt0aGlzLmxhc3RIaXRbMF0gLSAxLCB0aGlzLmxhc3RIaXRbMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRbMF0gPCAxMSkge1xuICAgICAgICAgICAgICAgIGNob2ljZXMucHVzaChbdGhpcy5sYXN0SGl0WzBdICsgMSwgdGhpcy5sYXN0SGl0WzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0SGl0WzFdID4gMCkge1xuICAgICAgICAgICAgICAgIGNob2ljZXMucHVzaChbdGhpcy5sYXN0SGl0WzBdLCB0aGlzLmxhc3RIaXRbMV0gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0SGl0WzFdIDwgMTEpIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzLnB1c2goW3RoaXMubGFzdEhpdFswXSwgdGhpcy5sYXN0SGl0WzFdICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGNob2ljZSA9IGNob2ljZXNbcmFuZG9tRGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIC0tY2VsbFNpemU6IDVyZW07XG4gICAgLS1zaGlwYm9yZGVyOiAycHggc29saWQgIzMzMDgwMjtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTc3ODI7XG4gICAgY29sb3I6ICNmN2Y4Zjg7XG4gICAgZm9udC1mYW1pbHk6ICdDaGFrcmEgUGV0Y2gnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmhlYWRlciB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0FudG9uIFNDJywgc2Fucy1zZXJpZjtcbn1cblxuLnByZWdhbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmZvcm0ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMzA4MDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYjFhMTtcbiAgICBjb2xvcjogIzFhMGMwOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMS41cmVtIDVyZW07XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMXJlbSAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA0NXZ3O1xufVxuXG4ucHJlZ2FtZXR4dCB7XG4gICAgbWFyZ2luOiAxLjVyZW07XG59XG5cbnNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4ICNmN2Y4Zjg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkOTNlMzk7XG5cbn1cblxuI2RpcmVjdGlvbiB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xufVxuXG4ucHJlZ2FtZXR4dCwgI2Zvcm1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbn1cblxuI2Zvcm1idG4sICNyYW5kb20ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2YmEwO1xuICAgIGNvbG9yOiAjZjdmOGY4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2Zvcm1idG46YWN0aXZlLCAjcmFuZG9tOmFjdGl2ZSB7XG4gICAgdG9wOiAycHg7XG59XG5cbiNyYW5kb20ge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLnJlc3VsdCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJvYXJkcyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwdnc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5ib2FyZGhlYWRlciwgLmNvbXBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYm9hcmQsIC5jb21wYm9hcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxldHRlcnMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5sZXR0ZXIge1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBlbmQ7XG59XG5cbi5udW1iZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsU2l6ZSk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubGV0dGVycywgLnJvdywgLmNvbXByb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTMsIDFmcik7XG59XG5cbi5jZWxsLCAuY29tcGNlbGwge1xuICAgIGhlaWdodDogdmFyKC0tY2VsbFNpemUpO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsU2l6ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYjFhMTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMxYTBjMDk7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcbiAgICBmb250LWZhbWlseTogJ0NoYWtyYSBQZXRjaCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2VsbFNpemUpIC0gMXJlbSk7XG59XG5cbi5zaGlwY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOWU5YTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zaGlwYm9yZGVyKTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zaGlwYm9yZGVyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2hpcGJvcmRlcik7XG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaGlwYm9yZGVyKTtcbn1cblxuLmhvcml6b250YWxyb290IHtcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2hpcGJvcmRlcik7XG59XG5cbi52ZXJ0aWNhbHJvb3Qge1xuICAgIGJvcmRlci10b3A6IHZhcigtLXNoaXBib3JkZXIpO1xufVxuXG4uaG9yaXpvbnRhbHRhaWwge1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoaXBib3JkZXIpO1xufVxuXG4udmVydGljYWx0YWlsIHtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zaGlwYm9yZGVyKTtcbn1cblxuLm1pc3NlZGNlbGw6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5wbGF5ZXIuZW5kZ2FtZSB7XG4gICAgbGVmdDogN3Z3O1xufVxuXG4uY29tcHV0ZXIuZW5kZ2FtZSB7XG4gICAgbGVmdDogNTB2dztcbn1cblxuLmhpdGNlbGw6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG4gICAgY29udGVudDogXCJYXCI7XG4gICAgY29sb3I6ICNkOTNlMzk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGxlZnQ6IDI1dnc7XG4gICAgfVxuXG4gICAgLnBsYXllci5lbmRnYW1lIHtcbiAgICAgICAgbGVmdDogM3Z3O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIGJvZHkge1xuICAgICAgICAtLWNlbGxTaXplOiA0LjVyZW07XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGxlZnQ6IDIwdnc7XG4gICAgfVxuXG4gICAgLmNvbXB1dGVyLmVuZGdhbWUge1xuICAgICAgICBsZWZ0OiAyMHZ3O1xuICAgICAgICB0b3A6IG1heCg2MHZoLCA3MHZ3KTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGJvZHkge1xuICAgICAgICAtLWNlbGxTaXplOiAyLjVyZW07XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGxlZnQ6IDE1dnc7XG4gICAgfVxuXG4gICAgLnBsYXllci5lbmRnYW1lIHtcbiAgICAgICAgbGVmdDogMTV2dztcbiAgICB9XG5cbiAgICAuY29tcHV0ZXIuZW5kZ2FtZSB7XG4gICAgICAgIGxlZnQ6IDE1dnc7XG4gICAgICAgIHRvcDogbWF4KDc1dmgsIDkwdncpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7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ZTogNjAlO1xcbiAgICAtLWNlbGxTaXplOiA1cmVtO1xcbiAgICAtLXNoaXBib3JkZXI6IDJweCBzb2xpZCAjMzMwODAyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5Nzc4MjtcXG4gICAgY29sb3I6ICNmN2Y4Zjg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2hha3JhIFBldGNoJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0FudG9uIFNDJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByZWdhbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzMwODAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViMWExO1xcbiAgICBjb2xvcjogIzFhMGMwOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gNXJlbTtcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDFyZW0gMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiA0NXZ3O1xcbn1cXG5cXG4ucHJlZ2FtZXR4dCB7XFxuICAgIG1hcmdpbjogMS41cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4ICNmN2Y4Zjg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZDkzZTM5O1xcblxcbn1cXG5cXG4jZGlyZWN0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbn1cXG5cXG4ucHJlZ2FtZXR4dCwgI2Zvcm1idG4ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxufVxcblxcbiNmb3JtYnRuLCAjcmFuZG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODZiYTA7XFxuICAgIGNvbG9yOiAjZjdmOGY4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm1idG46YWN0aXZlLCAjcmFuZG9tOmFjdGl2ZSB7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4jcmFuZG9tIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ucmVzdWx0IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzB2dztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5ib2FyZGhlYWRlciwgLmNvbXBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJvYXJkLCAuY29tcGJvYXJkIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxldHRlcnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmxldHRlciB7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBlbmQ7XFxufVxcblxcbi5udW1iZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsU2l6ZSk7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxldHRlcnMsIC5yb3csIC5jb21wcm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTMsIDFmcik7XFxufVxcblxcbi5jZWxsLCAuY29tcGNlbGwge1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGxTaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGxTaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYjFhMTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMWEwYzA5O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdDaGFrcmEgUGV0Y2gnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tY2VsbFNpemUpIC0gMXJlbSk7XFxufVxcblxcbi5zaGlwY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzllOWE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zaGlwYm9yZGVyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpcGJvcmRlcik7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1zaGlwYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaGlwYm9yZGVyKTtcXG59XFxuXFxuLmhvcml6b250YWxyb290IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNoaXBib3JkZXIpO1xcbn1cXG5cXG4udmVydGljYWxyb290IHtcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tc2hpcGJvcmRlcik7XFxufVxcblxcbi5ob3Jpem9udGFsdGFpbCB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoaXBib3JkZXIpO1xcbn1cXG5cXG4udmVydGljYWx0YWlsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpcGJvcmRlcik7XFxufVxcblxcbi5taXNzZWRjZWxsOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLmVuZGdhbWUge1xcbiAgICBsZWZ0OiA3dnc7XFxufVxcblxcbi5jb21wdXRlci5lbmRnYW1lIHtcXG4gICAgbGVmdDogNTB2dztcXG59XFxuXFxuLmhpdGNlbGw6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgICBjb2xvcjogI2Q5M2UzOTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIHNlY3Rpb24ge1xcbiAgICAgICAgbGVmdDogMjV2dztcXG4gICAgfVxcblxcbiAgICAucGxheWVyLmVuZGdhbWUge1xcbiAgICAgICAgbGVmdDogM3Z3O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICAtLWNlbGxTaXplOiA0LjVyZW07XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgICBsZWZ0OiAyMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5jb21wdXRlci5lbmRnYW1lIHtcXG4gICAgICAgIGxlZnQ6IDIwdnc7XFxuICAgICAgICB0b3A6IG1heCg2MHZoLCA3MHZ3KTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICAtLWNlbGxTaXplOiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgICBsZWZ0OiAxNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIuZW5kZ2FtZSB7XFxuICAgICAgICBsZWZ0OiAxNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5jb21wdXRlci5lbmRnYW1lIHtcXG4gICAgICAgIGxlZnQ6IDE1dnc7XFxuICAgICAgICB0b3A6IG1heCg3NXZoLCA5MHZ3KTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZXBsYXknO1xuXG5HYW1lKCk7Il0sIm5hbWVzIjpbImJvYXJkRE9NIiwicGxheWVyQm9hcmQiLCJib2FyZCIsImZsZWV0IiwiZW5kZ2FtZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRvbUJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyb3dzIiwiZm9yRWFjaCIsInJvdyIsImNlbGxzIiwiZG9tUm93IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJvd051bWJlciIsImFwcGVuZENoaWxkIiwiY2VsbCIsImRvbUNlbGwiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5Q2VsbCIsImNvbXB1dGVyQm9hcmQiLCJlbGVtZW50IiwiYm9hcmRUeXBlIiwic3RhdHVzIiwic2hpcCIsImlzU3VuayIsImRpc3BsYXlTaGlwQ2VsbCIsImNvb3JkaW5hdGVzIiwiZGlyZWN0aW9uIiwiaGlkZUJvYXJkIiwiYWN0dWFsQm9hcmQiLCJuZXh0Qm9hcmQiLCJyZW1vdmUiLCJDZWxsIiwiY29uc3RydWN0b3IiLCJTaGlwIiwiR2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJzaXplIiwiaSIsImoiLCJnZXRCb2FyZCIsImlkIiwiaXNQbGFjZWQiLCJnZXRGbGVldCIsInBsYWNlU2hpcCIsImNvbCIsInNoaXBJZCIsInNoaXBDb29yZGluYXRlcyIsInB1c2giLCJjZWxsc0VtcHR5IiwicmFuZG9tUGxhY2VtdCIsInJhbmRvbSIsIk1hdGgiLCJyb3VuZCIsInJlc3VsdCIsImZsb29yIiwiZXZlcnkiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiZmxlZXRTdW5rIiwiUGxheWVyIiwiQ29tcHV0ZXIiLCJHYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJkaXNwbGF5IiwicGxheWVyRmxlZXQiLCJjb21wdXRlckZsZWV0IiwicGxheWVyU2VjdGlvbiIsImNvbXB1dGVyU2VjdGlvbiIsImdldFNoaXBSb290IiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbHVtbiIsIk51bWJlciIsInZhbHVlIiwidGV4dCIsInN0YXJ0R2FtZSIsImdldFJhbmRvbVBvcyIsInJhbmRvbUJ0biIsInByZWdhbWUiLCJwbGF5ZXJCb2FyZEhlYWRlciIsIndhaXRNb3ZlIiwiY29tcHV0ZXJDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsImRpc3BsYXlSZXN1bHQiLCJlbmRHYW1lIiwic2V0VGltZW91dCIsIm1hbmFnZUNvbXB1dGVyVHVybiIsImF0dGFja3Jlc3VsdCIsImF0dGVtcHRzIiwicGlja0NlbGwiLCJsYXN0SGl0IiwicmFuZG9tQ29vcmRpbmF0ZXMiLCJ0cmllcyIsIndpbm5lciIsInJldXNsdCIsIngiLCJ5IiwiY2hvaWNlcyIsInJhbmRvbURpcmVjdGlvbiIsImNob2ljZSIsImhpdHMiXSwic291cmNlUm9vdCI6IiJ9