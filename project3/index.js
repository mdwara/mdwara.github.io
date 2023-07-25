alert("welcome to the Guess My Number Game!!")


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let score = 10;
let highScore = 0;
let guessHistory = [];

const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const userGuessElement = document.getElementById("userGuess");
const hintMessageElement = document.getElementById("hintMessage");
const guessHistoryElement = document.getElementById("guessHistory");

function checkGuess() {
  const userGuess = parseInt(userGuessElement.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      hintMessageElement.textContent = "Invalid input. Please enter a number between 1 and 100.";
      return;
  }

  guessHistory.push(userGuess);

  let correctGuess = false;

  if (userGuess === randomNumber) {
      correctGuess = true;
  } else {
      const hint = userGuess < randomNumber ? "Try a higher number." : "Try a lower number.";
      hintMessageElement.textContent = hint;

      score--;
      scoreElement.textContent = score;

      if (score === 0) {
          hintMessageElement.textContent = `You are ran out of chances. The correct number was ${randomNumber}. Your score: ${score}`;
          //resetGame();
          //return;
      }
      
  }

  if (correctGuess) {
      hintMessageElement.textContent = `Congratulations! You guessed the correct number ${randomNumber}! Your score: ${score}`;
      if (score > highScore) {
          highScore = score;
          highScoreElement.textContent = highScore;
      }
      //resetGame();
  }

  updateGuessHistory();
}


function updateGuessHistory() {
    guessHistoryElement.innerHTML = "";
    for (const guess of guessHistory) {
        const li = document.createElement("li");
        li.textContent = guess;
        guessHistoryElement.appendChild(li);
    }
}

function resetGame() {
    score = 10;
    guessHistory = [];
    scoreElement.textContent = score;
    userGuessElement.value = "";
    hintMessageElement.textContent = "Guess a Number";
    updateGuessHistory();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
