
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


function playerPick() {

    let choice = prompt("Enter your pick").toLowerCase()

    console.log(choice)

    while (choice != ("rock" || "scissors" || "paper")) {
       choice = prompt("You can't do that, try again mate!").toLowerCase()
    }

    return choice
}


function gameRound (playerSelection, computerSelection) {
   


    // if (caseSelection != ("rock" || "scissors" || "paper")) {
    //     // playerSelection = null;
    //     return
    // }
    
    //  if (caseSelection != ("rock" || "scissors" || "paper")) {
    //     gameRound((playerSelection = prompt('you can\'t bloody do that mate! Try again: ')), computerSelection)
    // }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose, paper covers rock."
        } else if (computerSelection === "scissors") {
            return "You win! Rock smashes scissors!"
        } else if (computerSelection === "rock") {
            return "Two rocks make a tie."
        } 
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper covers rock."
        } else if (computerSelection === "scissors") {
            return "You lose, scissors cut paper."
        } else if (computerSelection === "paper") {
            return "Two papers makes a tie."
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors cut paper."
        } else if (computerSelection === "rock") {
            return "You lose, rock smashes scissors!"
        } else if (computerSelection === "scissors") {
            return "Two scissors makes a tie."
        } 
    }  
}   



function game() {

    let playerScore = 0
    let computerScore = 0

        for (i=0; i<5; i++) {

            let result = gameRound(playerPick(),computerPlay());

            if (result === "You win! Rock smashes scissors!"
            || result === "You win! Paper covers rock."
            || result === "You win! Scissors cut paper." ) {  
                playerScore += 1
            } else if (result === "You lose, paper covers rock."
            || result === "You lose, scissors cut paper."
            || result === "You lose, rock smashes scissors!") {
                computerScore += 1 
            } else if (result != true) {
                alert("You can't bloody do that!");
                playerInput = null; 
                result = gameRound((playerInput = prompt("Try again mate")),computerPlay())
            } 
            
            console.log("Player score:" + playerScore)
            console.log("Computer score: " + computerScore)
        } 

        if (playerScore > computerScore) {
            return "You win!" 
        } else if (playerScore < computerScore) {
            return "You lose."
        } else {
            return "It's a tie."
        }
    }

game();



    








        // else (playerSelection === computerSelection) {
    //     return `${playerSelection} vs ${computerSelection}, tie.`
    // }


    // What I think I'll need to use to get the user input from the UI  
    //let playerSelection = document.getElementById("playerPick").textContent