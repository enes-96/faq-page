"use strict";
//select all the question cards
const questions = document.querySelectorAll(".card");

questions.forEach((card) => {
  const btn = card.querySelector(".icon");
  const answer = card.querySelector(".answer");
  const minusIcon = card.querySelector(".icon-minus");
  // click event on each button
  btn.addEventListener("click", function () {
    card.classList.toggle("taller");
    btn.classList.toggle("rotate");
    minusIcon.classList.toggle("hide");
    answer.classList.toggle("hide");
  });
});
