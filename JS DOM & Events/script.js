"use strict";
let x = document.querySelector(".GuessLayout");
x.style.setProperty("--symbol", '"13"');
const button = document.querySelector(".click");

button.addEventListener("click", () => {
  console.log(document.querySelector("#inputNumber").value);
});
