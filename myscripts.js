// determines computer's choice of "rock" "paper" or "scissors"

let computerPick = null;
function computerPlay() {
  computerPick = Math.floor(Math.random() * 3);

  if (computerPick === 0) {
    computerPick = "rock";
    screenReveal("#scissorScreen");
    return "rock";
  } else if (computerPick === 1) {
    computerPick = "scissors"; 
    screenReveal();
    return "scissors";
  } else {
    computerPick = "paper";
    screenReveal("#scissorScreen", "#rockScreen");
    return "paper";
  }
}


function screenReveal(svgLayer, svgLayer2) {
  document.querySelector("#blinkingDot").classList.remove('dotAnimate');
  let firstScreen = document.querySelectorAll(`#blinkingDot, #blankScreen, ${svgLayer}, ${svgLayer2}`);
  firstScreen.forEach((item)=> {
    item.style="opacity:0;"
  });
}



//rockAnimate function definition that is to be triggered on event listener for "rock" button click

    // declaring starttime variable 
    let starttime = null;

function rockAnimate(timestamp) {
    let runtime = timestamp - starttime;
    console.log(runtime);

    if (runtime >= 0 && runtime < 50) {

      requestAnimationFrame((timestamp) => { rockAnimate(timestamp)});

    } else if (runtime > 50 && runtime < 150) {

      document.querySelector("#handImage").src = "images/rockframe2@2x.png";
      requestAnimationFrame((timestamp) => { rockAnimate(timestamp)});  

    } else if ( runtime > 150 && runtime < 250 ) {

        document.querySelector("#handImage").src = "images/rockframe3@2x.png";
        requestAnimationFrame((timestamp) => { rockAnimate(timestamp)});  

    } else if ( runtime > 250 ) {
        
        document.querySelector("#handImage").src = "images/rockframe4@2x.png";
    
    }
  }


function scissorsAnimate(timestamp) {
    let runtime = timestamp - starttime;
    console.log(runtime);

    if (runtime >= 0 && runtime < 50) {

      document.querySelector("#handImage").src = "images/scissors2@2x.png";
      requestAnimationFrame((timestamp) => { scissorsAnimate(timestamp)});

    } else if (runtime > 50 && runtime < 100) {

      document.querySelector("#handImage").src = "images/scissors3@2x.png";
        requestAnimationFrame((timestamp) => { scissorsAnimate(timestamp)}); 

    } else if ( runtime > 100 && runtime < 200 ) {

      document.querySelector("#handImage").src = "images/scissors4@2x.png";
      requestAnimationFrame((timestamp) => { scissorsAnimate(timestamp)});

    } else if ( runtime > 200 && runtime < 300 ) {
        
      document.querySelector("#handImage").src = "images/scissors5.png";
    
    } 
  }

function paperAnimate(timestamp) {
    let runtime = timestamp - starttime;
    console.log(runtime);

    if (runtime >= 0 && runtime < 50) {

      document.querySelector("#handImage").src = "images/paper2@2x.png";
      requestAnimationFrame((timestamp) => { paperAnimate(timestamp)});

    } else if (runtime > 50 && runtime < 200) {

      document.querySelector("#handImage").src = "images/paper3@2x.png";
        requestAnimationFrame((timestamp) => { paperAnimate(timestamp)}); 

    } else if ( runtime > 200 && runtime < 350 ) {

      document.querySelector("#handImage").src = "images/paper4@2x.png";
      

    } 
  }





//takes user's choice and initiates game round with it & stops gameRound from running if either player
//gets to 5 points
const userPick = document.querySelectorAll(".userPick");

userPick[0].addEventListener("click", (e) => {
  if (playerScore > 4 || computerScore > 4) {
    return;
  } else {
    gameRound(e.target.innerHTML.toLowerCase(), computerPlay());

    requestAnimationFrame((timestamp) => {
      starttime = timestamp;
      rockAnimate(timestamp);
    });

  }
});


userPick[1].addEventListener("click", (e) => {
  if (playerScore > 4 || computerScore > 4) {
    return;
  } else {
    gameRound(e.target.innerHTML.toLowerCase(), computerPlay());

    requestAnimationFrame((timestamp) => {
      starttime = timestamp;
      paperAnimate(timestamp);
    })
  }
});


userPick[2].addEventListener("click", (e) => {
  if (playerScore > 4 || computerScore > 4) {
    return;
  } else {
    gameRound(e.target.innerHTML.toLowerCase(), computerPlay());

    requestAnimationFrame((timestamp) => {
      starttime = timestamp;
      scissorsAnimate(timestamp);
    });

  }
});


// function that evaluates user's input and computer's input to determine who wins the round
// also runs and prints game scores to div

let playerScore = 0;
let computerScore = 0;

function gameRound(playerSelection, computerSelection) {
  const resultWindow = document.querySelector("#result--window");

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultWindow.innerText = "You lose, paper covers rock.";
      computerScore += 1;
    } else if (computerSelection === "scissors") {
      resultWindow.innerText = "You win! Rock smashes scissors!";
      playerScore += 1;
    } else if (computerSelection === "rock") {
      resultWindow.innerText = "Two rocks make a tie.";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      resultWindow.innerText = "You win! Paper covers rock.";
      playerScore += 1;
    } else if (computerSelection === "scissors") {
      resultWindow.innerText = "You lose, scissors cut paper.";
      computerScore += 1;
    } else if (computerSelection === "paper") {
      resultWindow.innerText = "Two papers makes a tie.";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      resultWindow.innerText = "You win! Scissors cut paper.";
      playerScore += 1;
    } else if (computerSelection === "rock") {
      resultWindow.innerText = "You lose, rock smashes scissors!";
      computerScore += 1;
    } else if (computerSelection === "scissors") {
      resultWindow.innerText = "Two scissors makes a tie.";
    }
  }

  const winner = document.querySelector("#winner");

  if (playerScore === 5) {
    winner.innerText = "Human conquers machine!!!";
  } else if (computerScore === 5) {
    winner.innerText = "Machine humiliates puny human!!!";
  }

  const scoreWindow = document.querySelector("#scoreBoard");
  scoreWindow.innerText = `Human: ${playerScore} Machine: ${computerScore}`;
}















// **************************** BELOW IS YE OLDE CODE GRAVEYARD **** /////////////////





















//function rockAnimate() {
    //    setTimeout(() => { document.querySelector("#handImage").src = "images/rockframe2@2x.png" }, 500)
    //    setTimeout(() => { document.querySelector("#handImage").src = "images/rockframe3@2x.png" }, 700)
    //    setTimeout(() => { document.querySelector("#handImage").src = "images/rockframe4@2x.png" }, 700)
    //}

    //rockAnimate();





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
