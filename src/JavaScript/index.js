const buttonMenu = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__nav");
const elementMenu = [...document.querySelectorAll(".nav__element")];

const togglePersonalProjects = document.querySelector(
  "#toggle-personalProjects"
);
const toggleChallenges = document.querySelector("#toggle-challenges");
const toggleOtherProjects = document.querySelector("#toggle-otherProjects");
const personalProjects = document.querySelector("#personalProjects");
const challengesProjects = document.querySelector("#challengesProjects");
const otherProjects = document.querySelector("#otherProjects");

//Burger menu
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
});

elementMenu.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
  });
});

//Toggle projects
togglePersonalProjects.addEventListener("click", () => {
  if (document.querySelector("#personalProjects.projects__visible")) {
    challengesProjects.classList.add("projects__visible");
    otherProjects.classList.add("projects__visible");
    personalProjects.classList.remove("projects__visible");
    personalProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#personalProjects.projects__cards")) {
    challengesProjects.classList.remove("projects__cards");
    otherProjects.classList.remove("projects__cards");

    togglePersonalProjects.classList.add("line-visible");
    toggleChallenges.classList.remove("line-visible");
    toggleOtherProjects.classList.remove("line-visible");
  }
});

toggleChallenges.addEventListener("click", () => {
  if (document.querySelector("#challengesProjects.projects__visible")) {
    personalProjects.classList.add("projects__visible");
    otherProjects.classList.add("projects__visible");
    challengesProjects.classList.remove("projects__visible");
    challengesProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#challengesProjects.projects__cards")) {
    personalProjects.classList.remove("projects__cards");
    otherProjects.classList.remove("projects__cards");

    toggleChallenges.classList.add("line-visible");
    togglePersonalProjects.classList.remove("line-visible");
    toggleOtherProjects.classList.remove("line-visible");
  }
});

toggleOtherProjects.addEventListener("click", () => {
  if (document.querySelector("#otherProjects.projects__visible")) {
    personalProjects.classList.add("projects__visible");
    challengesProjects.classList.add("projects__visible");
    otherProjects.classList.remove("projects__visible");
    otherProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#otherProjects.projects__cards")) {
    personalProjects.classList.remove("projects__cards");
    challengesProjects.classList.remove("projects__cards");

    toggleOtherProjects.classList.add("line-visible");
    togglePersonalProjects.classList.remove("line-visible");
    toggleChallenges.classList.remove("line-visible");
  }
});
