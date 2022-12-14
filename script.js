//create 16 rows of divs and make them show in flex with a column direction
//add 16 squares per row and make them show in a row direction

//need them to start out white with a black border that doesn't take up extra space or add onto the width and height
//change to no border and fill the background with color.

const sketchPadScreen = document.querySelector(".sketchPadScreen");

let numRows = 10;
let numColumns = 10;

addRows();
addSquares();
makeScreenWork();







//reset button functionality
const changeNumSquaresBtn = document.querySelector(".erase");

changeNumSquaresBtn.addEventListener("click", (e) => {
    let newNum = parseInt(prompt("How many squares would you like per row? Please enter a valid number between 1 and 100."));
    if (newNum != NaN && newNum >= 1 && newNum <= 100) {
        clearSquares()
        numRows = Math.floor(newNum);
        numColumns = Math.floor(newNum);
        addRows();
        addSquares();
        makeScreenWork();
    } else {
        return;
    }
})


//shake button functionality
const shakeBtn = document.querySelector(".shakeBtn");

shakeBtn.addEventListener("click", (e) => {
    const everySquare = document.querySelectorAll("square");
    for (let square of everySquare) {
        square.style.backgroundColor = "white";
    }
})

//add functionality to the squares (sketch screen)
function makeScreenWork () {
    const everySquare = document.querySelectorAll("square");
    for (let square of everySquare) {
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "black";
        })
    }
}

//grid creation functions
function createRow() {
    const row = document.createElement("row");
    row.style.display = "flex";
    return row;
}

function addRows () {
    for (let i = 0; i < numRows; i++) {
        const row = createRow()
        sketchPadScreen.appendChild(row)
    }
}

function addSquares() {
    const rowList = document.querySelectorAll("row");
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            const square = createSquare();
            rowList[i].appendChild(square);
        }
    }
}

function createSquare() {
    let squareSize = 480/numRows;
    const square = document.createElement("square");
    square.style.borderStyle = "solid";
    square.style.borderColor = "black";
    square.style.minHeight = squareSize.toString() + "px"
    square.style.minWidth = squareSize.toString() + "px"
    square.style.boxSizing = "border-box";
    square.style.borderWidth = "thin";
    square.style.backgroundColor = "white";
    return square;
}

//board reset functions
function clearSquares () {
    for (let i = 0; i < numRows; i++) {
        var child = sketchPadScreen.lastElementChild;
        sketchPadScreen.removeChild(child);
    }
}


/*

//round is played when buttons are pressed, unless a player has reached 5--then it resets
for (const choiceBtn of choiceBtns) {
    choiceBtn.addEventListener("click", (e) => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
        playRound(e.target.id, getComputerChoice())
    });
}

//reset button + functionality
const resetButtonContainer = document.querySelector(".resetButtonContainer");
const resetButton = document.createElement("button");

resetButton.textContent = "Reset"
resetButton.addEventListener("click", (e) => {
    window.location.reload();
})

*/
