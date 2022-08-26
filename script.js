//create 16 rows of divs and make them show in flex with a column direction
//add 16 squares per row and make them show in a row direction

//need them to start out white with a black border that doesn't take up extra space or add onto the width and height
//change to no border and fill the background with color.

const sketchPadScreen = document.querySelector(".sketchPadScreen");

const numRows = 16;
const numColumns = 16;

addRows();
addSquares();

function createRow() {
    const row = document.createElement("row");
    row.style.display = "flex";
    return row;
}

function addRows () {
    for (let i = 0; i < 16; i++) {
        const row = createRow()
        sketchPadScreen.appendChild(row)
    }
}

function addSquares() {
    const rowList = document.querySelectorAll("row");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = createSquare();
            rowList[i].appendChild(square);
        }
    }
}


function createSquare() {
    console.log("making square...")
    const square = document.createElement("square");
    square.style.borderStyle = "solid";
    square.style.borderColor = "black";
    square.style.minHeight = "20px";
    square.style.minWidth = "20px";
    square.style.boxSizing = "border-box";
    square.style.borderWidth = "thin";
    return square;
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
