const buttonMenu = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__nav");
const elementMenu = [...document.querySelectorAll(".nav__element")];

buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
});

elementMenu.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
  });
});
