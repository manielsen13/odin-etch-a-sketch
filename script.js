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