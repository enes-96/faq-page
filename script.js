"use strict";
//select all the question cards
const questions = document.querySelectorAll(".card");

//select each of the cards
questions.forEach(function (question) {
  //select the button, answer, and icon of each card
  const btn = question.querySelector(".icon");
  const answer = question.querySelector(".answer");
  const minusIcon = question.querySelector(".icon-minus");
  // click event on each button
  btn.addEventListener("click", function () {
    question.classList.toggle("taller");
    btn.classList.toggle("rotate");
    minusIcon.classList.toggle("hide");
    answer.classList.toggle("hide");
  });
});
