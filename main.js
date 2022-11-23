'use strict'



const number1 = '1️⃣'
const number2 = '2️⃣'
const mineMark = '🚩'
const mine = '💣'
var numOfMines = 2
const gGame = {
    isON: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard = buildBoard()


function onInit() {

    gBoard = buildBoard()
    renderBoard(gBoard)
    
}



function buildBoard() {
    const board = []
    var boardSize = 4
    for (var i = 0; i < boardSize; i++) {
        board[i] = []
        for (var j = 0; j < boardSize; j++) {
            board[i][j] = {
                minesAround: 0,
                isShown: true,
                isMine: false,
                isMarked: false,
                type: null
            }

            if (board[i][j].isMine = true) {
                board[i][j].type === mine
                
            }
        }
    }

    board[1][1] = board[2][2] = mine
    console.table(board)
    return board
}

function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j]
            var className = ''
            // if(currCell.isShown = false) className = 'untouched'

            // if (cell.isMine) className = 'boom'
            // if (cell.isMarked) className += ' marked'

            // var cellClass = getClassName({ i: i, j: j })
            // console.log('cellClass:', cellClass)

            // if (currCell.type === FLOOR) cellClass += ' floor'
            // else if (currCell.type === WALL) cellClass += ' wall'

            strHTML += `\t<td data-i="${i}" data-j="${j}" class="cell ${className}"
                onclick="cellClicked(this,${i},${j})" >${cell} \n`

            // if (currCell.gameElement === GAMER) {
            //     strHTML += GAMER_IMG
            // } else if (currCell.gameElement === BALL) {
            //     strHTML += BALL_IMG
            // }

            strHTML += '\t</td>\n'
        }
        strHTML += '</tr>\n'



    }



    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}



function cellClicked(elCell, i, j) {





}
var d = positionTheConst(gBoard)
console.log(d);

// var a = positionMines(1,1)
// console.log(a);
function positionTheConst(board) {
   
   
    // board[i][j].minesAround = mineAroundCheck(i,j)

return    board[2][1].minesAround
}

// var c = mineCheck(2,1)
// console.log(c);

function mineAroundCheck(cellI, cellJ) {
    var contMinesAround = 0
    var boardSize = 4

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= boardSize) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= boardSize) continue
            if (gBoard[i][j].isMine) contMinesAround++



        }
    } return contMinesAround

}

function renderCell(i, j, value) {
    const elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`)
    elCell.innerHTML = value
    return elCell

}












