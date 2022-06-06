

function computerPlay() {

    computerPick = Math.floor(Math.random()*3)
    
    if ( computerPick === 0 ) {
        return "Rock"
    } else if ( computerPick === 1 ) {
        return "Scissors"
    } else {
        return "Paper"
    }

}

function gameRound (playerSelection, computerSelection) {

    // else (playerSelection === computerSelection) {
    //     return `${playerSelection} vs ${computerSelection}, tie.`
    // }

    let a = playerSelection === "rock" || computerSelection === "rock"
    let b = playerSelection === "paper" || computerSelection === "paper" 
    let c = playerSelection === "scissors" || computerPlay === "scissors" 

    console.log(a,b,c)

}