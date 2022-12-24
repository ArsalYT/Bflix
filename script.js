"use strict";
const buttons = document.querySelector(".buttons");
const signin = document.querySelector(".signin");
const overlay = document.querySelector(".overlay");
const label = document.querySelector(".label");
buttons.addEventListener("click", function () {
  signin.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
label.addEventListener("click", function () {});
