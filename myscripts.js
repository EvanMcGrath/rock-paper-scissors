

function computerPlay() {

    computerPick = Math.floor(Math.random()*3)
    
    if ( computerPick === 0 ) {
        return "rock"
    } else if ( computerPick === 1 ) {
        return "scissors"
    } else {
        return "paper"
    }

}

function gameRound (playerSelection, computerSelection) {

    // else (playerSelection === computerSelection) {
    //     return `${playerSelection} vs ${computerSelection}, tie.`
    // }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose, paper covers rock."
        } else if (computerSelection === "scissors") {
            return "You win! Rock smashes scissors!"
        } else if (computerSelection === "rock") {
            return "Two rocks make a tie."
        } else {
            return "You can't bloody do that mate!"
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper covers rock."
        } else if (computerSelection === "scissors") {
            return "You lose, scissors cut paper."
        } else if (computerSelection === "paper") {
            return "Two papers makes a tie."
        } else {
            return "You can't bloody do that mate!"
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors cut paper."
        } else if (computerSelection === "rock") {
            return "You lose, rock smashes scissors!"
        } else if (computerSelection === "scissors") {
            return "Two scissors makes a tie."
        } else {
            return "You can't bloody do that mate!"
        }
    }
}