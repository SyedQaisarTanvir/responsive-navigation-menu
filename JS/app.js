let navLinks = document.querySelector(".navBar__rightSide");
let hamburger = document.querySelector(".navBar__hamBurger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
