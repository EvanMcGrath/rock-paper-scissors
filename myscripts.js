

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