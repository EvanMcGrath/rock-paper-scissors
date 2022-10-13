
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


const userPick = document.querySelector(".userPick")
userPick.addEventListener("click", (e) => {
console.dir(e.target.innerHTML.toLowerCase())
// gameRound(this, computerPlay())

})



function playerPick() {

    let choice = prompt("Enter your pick").toLowerCase()
    
        while (choice) {
            if (choice === "scissors") {
            return choice
        } else if (choice === "paper") {
            return choice 
        } else if (choice === "rock") {
            return choice 
        } else {
            choice = prompt("You can't bloody do that mate! Try again.").toLowerCase()
        }
    }
}

function gameRound (playerSelection, computerSelection) {
   

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose, paper covers rock.")
            return "You lose, paper covers rock."
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock smashes scissors!")
            return "You win! Rock smashes scissors!"
        } else if (computerSelection === "rock") {
            console.log("Two rocks make a tie.")
            return "Two rocks make a tie."
        } 
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper covers rock.")
            return "You win! Paper covers rock."
        } else if (computerSelection === "scissors") {
            console.log("You lose, scissors cut paper.")
            return "You lose, scissors cut paper."
        } else if (computerSelection === "paper") {
            console.log("Two papers makes a tie.")
            return "Two papers makes a tie."
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You win! Scissors cut paper.")
            return "You win! Scissors cut paper."
        } else if (computerSelection === "rock") {
            console.log("You lose, rock smashes scissors!")
            return "You lose, rock smashes scissors!"
        } else if (computerSelection === "scissors") {
            console.log("Two scissors makes a tie.")
            return "Two scissors makes a tie."
        } 
    }  
}   



function game() {

    let playerScore = 0
    let computerScore = 0

        // for (i=0; i<5; i++) {

        //     let result = gameRound(playerPick(),computerPlay());

        //     if (result === "You win! Rock smashes scissors!"
        //     || result === "You win! Paper covers rock."
        //     || result === "You win! Scissors cut paper." ) {  
        //         playerScore += 1
        //     } else if (result === "You lose, paper covers rock."
        //     || result === "You lose, scissors cut paper."
        //     || result === "You lose, rock smashes scissors!") {
        //         computerScore += 1 
        //     } else {
        //         console.log("Draw")
        //         i--;
        //     } 
            
        //     console.log("Player score:" + playerScore)
        //     console.log("Computer score: " + computerScore)
        // } 

        if (playerScore > computerScore) {
            console.log("You win")
            return "You win!" 
        } else if (playerScore < computerScore) {
            console.log("You Lose")
            return "You lose."
        } else {
            console.log("It's a tie")
            return "It's a tie."
        }
    }

game();



    








        // else (playerSelection === computerSelection) {
    //     return `${playerSelection} vs ${computerSelection}, tie.`
    // }


    // What I think I'll need to use to get the user input from the UI  
    //let playerSelection = document.getElementById("playerPick").textContent