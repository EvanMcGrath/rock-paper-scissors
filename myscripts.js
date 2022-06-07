

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


    // What I think I'll need to use to get the user input from the UI  
    //let playerSelection = document.getElementById("playerPick").textContent

    let caseSelection = playerSelection.toLowerCase() 
    let result 

    if (caseSelection === "rock") {
        if (computerSelection === "paper") {
            result = "You lose, paper covers rock."
        } else if (computerSelection === "scissors") {
            result = "You win! Rock smashes scissors!"
        } else if (computerSelection === "rock") {
            result = "Two rocks make a tie."
        } else {
            result = "You can't bloody do that mate!"
        }
    }

    if (caseSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper covers rock."
        } else if (computerSelection === "scissors") {
            result = "You lose, scissors cut paper."
        } else if (computerSelection === "paper") {
            result = "Two papers makes a tie."
        } else {
            result = "You can't bloody do that mate!"
        }
    }

    if (caseSelection === "scissors") {
        if (computerSelection === "paper") {
            result = "You win! Scissors cut paper."
        } else if (computerSelection === "rock") {
            result = "You lose, rock smashes scissors!"
        } else if (computerSelection === "scissors") {
            result = "Two scissors makes a tie."
        } else {
            result = "You can't bloody do that mate!"
        }
    } else {
        result = "You can't bloody do that mate!"
    }  
}   
