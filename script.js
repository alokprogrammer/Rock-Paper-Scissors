let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() *3);// ye hamien o se leke 3 tkk random number dega woh bhi desimal remove kr dega floor
   return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};

const playGame = (userChoice) => {
   //generate computer choice
   const compChoice = genComChoice();

   if (userChoice === compChoice) {
    //draw game
    drawGame();
   }else{
    let userWin = true;
    if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }else {
        //rock, paper
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
   
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
});