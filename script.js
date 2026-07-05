const guessedNumber = document.getElementById("playerguess");
const inputBtn = document.getElementById("submitbtn");
let resultTxt = document.getElementById("result");
let newRandom = document.getElementById("generateNew");
let guessCountDisplay = document.getElementById("guesscount");
let guessFrequency = document.getElementById("changeGuesslevels");
let gameLevel = document.getElementById("changelevels");

function randomNumLevel1(){  
    return Math.abs(Math.floor(Math.random() * 5) + 1);
}
function randomNumLevel2(){  
    return Math.abs(Math.floor(Math.random() * 10) + 1);
}
function randomNumLevel3(){  
    return Math.abs(Math.floor(Math.random() * 100) + 1);
}
function randomNumLevel4(){  
    return Math.abs(Math.floor(Math.random() * 1000) + 1);
}


let randomNum = randomNumLevel1();
let maxGuesses = Number(guessFrequency.value);
let remainingGuess = maxGuesses;

function startNewRound(){
    const selectedLevel = gameLevel.value;

    if (selectedLevel === "1-5"){
        randomNum = randomNumLevel1();
    }else if (selectedLevel === "1-10"){
        randomNum = randomNumLevel2();
    }else if (selectedLevel === "1-100"){
        randomNum = randomNumLevel3();
    }else if(selectedLevel === "1-1000"){
        randomNum = randomNumLevel4();
    }

    maxGuesses = Number(guessFrequency.value);
    remainingGuess = maxGuesses;
    guessCountDisplay.textContent = `Guesses left ${remainingGuess}`;
    resultTxt.textContent = "";
    guessedNumber.value = "";

    console.log("new round -> number:" , randomNum, "guesses:" , remainingGuess);

}

gameLevel.addEventListener("change",startNewRound); 

guessFrequency.addEventListener("change", startNewRound);

newRandom.addEventListener("click", startNewRound);

inputBtn.addEventListener("click", () => {
     if(remainingGuess <= 0 ){
        resultTxt.textContent = "Game over! click ' generate new random NUM' to try again."
        return;
        }
   
   
    const guess = Number(guessedNumber.value);

    if (guess === randomNum){
        resultTxt.textContent = "you won! (●'◡'●)";
        return;
    }
   
    remainingGuess--;
    guessCountDisplay.textContent = `Guesses left: ${remainingGuess}`;

    if (remainingGuess <= 0){
        resultTxt.textContent = `Game over! The number was ${randomNum}.`;
        return;
    }

    resultTxt.textContent = guess > randomNum ? "go lower" : "Go higher";
});

guessCountDisplay.textContent = `Guesses left: ${remainingGuess}`;