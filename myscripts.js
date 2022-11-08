// determines computer's choice of "rock" "paper" or "scissors"
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


//takes user's choice and initiates game round with it & stops gameRound from running if either player 
//gets to 5 points 
const userPick = document.querySelectorAll(".userPick")

    userPick[0].addEventListener("click", (e) => { 
        if( ( playerScore > 4 ) || (computerScore > 4 ) ) {
            return
            } else {
            gameRound(e.target.innerHTML.toLowerCase(), computerPlay())
            }});

    userPick[1].addEventListener("click", (e) => { 
        if( ( playerScore > 4 ) || (computerScore > 4 ) ) {
            return
            } else {
            gameRound(e.target.innerHTML.toLowerCase(), computerPlay())
            }});
    

    userPick[2].addEventListener("click", (e) => { 
        if( ( playerScore > 4 ) || (computerScore > 4 ) ) {
            return
            } else {
            gameRound(e.target.innerHTML.toLowerCase(), computerPlay())
            }});



// function that evaluates user's input and computer's input to determine the value of gameRoundResult
// also runs and prints game scores to div 
let gameRoundResult = null

let playerScore = 0
let computerScore = 0

function gameRound (playerSelection, computerSelection) {
   
    const resultWindow = document.querySelector("#result--window")

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultWindow.innerText = "You lose, paper covers rock.";
            gameRoundResult = "You lose, paper covers rock.";
            computerScore += 1
        } else if (computerSelection === "scissors") {
            resultWindow.innerText = "You win! Rock smashes scissors!";
            gameRoundResult = "You win! Rock smashes scissors!";
            playerScore += 1
        } else if (computerSelection === "rock") {
            resultWindow.innerText = "Two rocks make a tie.";
            gameRoundResult = "Two rocks make a tie."
        } 
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultWindow.innerText = "You win! Paper covers rock.";
            gameRoundResult = "You win! Paper covers rock.";
            playerScore += 1
        } else if (computerSelection === "scissors") {
            resultWindow.innerText = "You lose, scissors cut paper.";
            gameRoundResult = "You lose, scissors cut paper.";
            computerScore += 1
        } else if (computerSelection === "paper") {
            resultWindow.innerText = "Two papers makes a tie.";
            gameRoundResult = "Two papers makes a tie."
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            resultWindow.innerText = "You win! Scissors cut paper.";
            gameRoundResult = "You win! Scissors cut paper.";
            playerScore += 1
        } else if (computerSelection === "rock") {
            resultWindow.innerText = "You lose, rock smashes scissors!";
            gameRoundResult = "You lose, rock smashes scissors!"
            computerScore += 1
        } else if (computerSelection === "scissors") {
            resultWindow.innerText = "Two scissors makes a tie.";
            gameRoundResult = "Two scissors makes a tie."
        } 
    }  

const winner = document.querySelector("#winner")

if ( playerScore === 5 ) {
    winner.innerText = "Human conquers machine!!!"
} else if ( computerScore === 5 ) {
    winner.innerText = "Machine humiliates puny human!!!"
}
 
const scoreWindow = document.querySelector("#scoreBoard")
scoreWindow.innerText = `Human: ${playerScore} Machine: ${computerScore}`
    
}   


//Test for hand animation 




function imageChange() { 
    document.querySelector("#handImage").src="images/rockframe2@2x.png";
}





// For displaying results 

// const scoreWindow = document.querySelector("#scoreBoard")
// const scoreText = scoreWindow.children[0]



// function game() {

//     let playerScore = 0
//     let computerScore = 0

//         for (i=0; i<5; i++) {

//             let result = gameRound(playerPick(),computerPlay());

//             if (result === "You win! Rock smashes scissors!"
//             || result === "You win! Paper covers rock."
//             || result === "You win! Scissors cut paper." ) {  
//                 playerScore += 1
//             } else if (result === "You lose, paper covers rock."
//             || result === "You lose, scissors cut paper."
//             || result === "You lose, rock smashes scissors!") {
//                 computerScore += 1 
//             } else {
//                 console.log("Draw")
//                 i--;
//             } 
            
//             console.log("Player score:" + playerScore)
//             console.log("Computer score: " + computerScore)
//         } 

//         if (playerScore > computerScore) {
//             console.log("You win")
//             return "You win!" 
//         } else if (playerScore < computerScore) {
//             console.log("You Lose")
//             return "You lose."
//         } else {
//             console.log("It's a tie")
//             return "It's a tie."
//         }
//     }

// game();

