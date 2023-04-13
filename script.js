"use strict";

// Get all the question cards
const questions = document.querySelectorAll(".card");

// Toggle the visibility of a card's answer and icon
function toggleCard(card) {
  const btn = card.querySelector(".icon");
  const answer = card.querySelector(".answer");
  const minusIcon = card.querySelector(".icon-minus");
  card.classList.toggle("taller");
  btn.classList.toggle("rotate");
  minusIcon.classList.toggle("hide");
  answer.classList.toggle("hide");
}

// Add click event listener to each button
questions.forEach((card) => {
  const btn = card.querySelector(".icon");
  btn.addEventListener("click", () => toggleCard(card));
});
