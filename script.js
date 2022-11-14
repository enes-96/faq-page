"use strict";
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");
const expandBtn = document.querySelector(".icon");

expandBtn.addEventListener("click", () => {
  card1.classList.toggle("taller");
});
