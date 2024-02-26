"use strict";

const footerYear = document.getElementById("year");
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
var btn = $("#button");
footerYear.innerHTML = new Date().getFullYear();

navBtn.addEventListener("click", () => navbar.classList.add("show-nav"));
navClose.addEventListener("click", () => navbar.classList.remove("show-nav"));

window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-up").classList.remove("d-none");
  } else {
    document.getElementById("back-to-up").classList.add("d-none");
  }
}
