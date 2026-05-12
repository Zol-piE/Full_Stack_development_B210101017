"use strict";

const button = document.querySelector(".click");

let randomNumber = Math.trunc(Math.random() * 6) + 1;
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") button.click();
});

button.addEventListener("click", () => {
  let guess = Number(document.querySelector("#inputNumber").value);

  if (!guess) {
    document.querySelector(".message").textContent = "❌ Not Number";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉 Congrats";

    let x = document.querySelector(".GuessLayout");

    x.style.setProperty("--symbol", `"${randomNumber}"`);
  } else {
    document.querySelector(".message").textContent = `😒 HUH! Not ${guess}`;
  }
});
