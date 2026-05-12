"use strict";

let score = 1;
const button = document.querySelector(".click");

let randomNumber = Math.trunc(Math.random() * 6) + 1;
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") button.click();
});

button.addEventListener("click", () => {
  let guess = Number(document.querySelector("#inputNumber").value);

  if (score >= 1) {
    if (!guess) {
      document.querySelector(".message").textContent = "❌ Not Number";
    } else if (guess === randomNumber) {
      document.querySelector(".message").textContent = "🎉 Congrats";
      let x = document.querySelector(".GuessLayout");
      x.style.setProperty("--symbol", `"${randomNumber}"`);
    } else if (guess > randomNumber) {
      document.querySelector(".message").textContent = `📈 Too High`;
      score--;
    } else {
      document.querySelector(".message").textContent = `📉 Too Low`;
      score--;
    }
  } else
    document.querySelector(".message").textContent = `😵 You Lose the game`;
  document.querySelector(".score").textContent = score;
});
