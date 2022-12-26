"use strict";
const buttons = document.querySelector(".buttons");
const signin = document.querySelector(".signin");
const overlay = document.querySelector(".overlay");
const label = document.querySelector(".label");
buttons.addEventListener("click", function () {
  signin.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  signin.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !signin.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    signin.classList.add("hidden");
  }
});
