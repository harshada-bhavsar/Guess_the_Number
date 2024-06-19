const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn-again");
const btnChckEl = document.querySelector(".btn-check");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_num");
const hideNumEl = document.querySelector(".hide_num");
const chanceEl = document.querySelector(".chance");
const highScoreEl = document.querySelector(".high_score");


let secretNum = Math.trunc(Math.random() * 100 + 1);
let chance = 10;
let highScore = 0;
console.log(secretNum);

//event to check the hide num
btnChckEl.addEventListener("click", () => {
    const guess = Number(inputNumEl.value);
    // check empty input
    if (guess) {
      // not match hide number
      if (guess != secretNum) {
        if (chance > 1) {
          chance--;
          chanceEl.textContent = chance;
          msgEl.textContent = guess > secretNum ? " Too High " : "Too Low";
          chanceEl.textContent = chance;
        } else {
          displayMessage("You've Lossed the Game");
          containerEl.style.backgroundColor = "#fff";
          chanceEl.textContent = 0;
        }
      } else {
        // Success
        hideNumEl.textContent = secretNum;
        hideNumEl.style.width = "100%";
        hideNumEl.style.transition = "all 0.5s ease-in";
        containerEl.style.backgroundColor = "#e0d8d3";
        highScoreEl.textContent = chance;
        displayMessage("Congtratulation You've Won the Game :)");
      }
    } else {
      displayMessage("Please Enter the Number :(");
    }
  });

  //display message
  const displayMessage = function (message) {
    msgEl.textContent = message;
  };

  //reset the game
btnPlayEl.addEventListener("click", () => {
    chance = 10;
    secretNum = Math.floor(Math.random() * 100) + 1;
    chanceEl.textContent = chance;
    hideNumEl.textContent = "";
    inputNumEl.value = "";
    containerEl.style.backgroundColor = "#ddd";
    highScoreEl.textContent = chance;
    displayMessage("Start Guesing..............");
  });
