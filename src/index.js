import "./Styles/css/style.css";
import "./Styles/css/desktop.css";
import { API_VIDEOS, OPTIONS, generateVideos } from "./pages/youtube.js";

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  location.hash.startsWith("#youtube") ? youtubePage() : homePage();
}

//======Header======//
const buttonMenu = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__nav");
const elementMenu = [...document.querySelectorAll(".nav__element")];
const body = document.querySelector("body");

//Burger menu
buttonMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
  body.classList.toggle("body__hidden");
});

elementMenu.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("menu-visible");
    body.classList.remove("body__hidden");
  });
});

//======Main nodes======//
const homeSection = document.querySelector("#home");
const youtubeSection = document.querySelector("#youtube");

//======Home section======//
function homePage() {
  homeSection.classList.remove("inactive");
  homeSection.classList.add("visible");
  youtubeSection.classList.add("inactive");
  youtubeSection.classList.remove("visible");
}

//Projects nodes
const togglePersonalProjects = document.querySelector(
  "#toggle-personalProjects"
);
const toggleEngineeringProjects = document.querySelector("#toggle-engineering");
const toggleChallenges = document.querySelector("#toggle-challenges");
const toggleOtherProjects = document.querySelector("#toggle-otherProjects");
const personalProjects = document.querySelector("#personalProjects");
const engineeringProjects = document.querySelector("#engineeringProjects");
const challengesProjects = document.querySelector("#challengesProjects");
const otherProjects = document.querySelector("#otherProjects");

//Toggle projects
togglePersonalProjects.addEventListener("click", () => {
  if (document.querySelector("#personalProjects.projects__visible")) {
    engineeringProjects.classList.add("projects__visible");
    challengesProjects.classList.add("projects__visible");
    otherProjects.classList.add("projects__visible");
    personalProjects.classList.remove("projects__visible");
    personalProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#personalProjects.projects__cards")) {
    engineeringProjects.classList.remove("projects__cards");
    challengesProjects.classList.remove("projects__cards");
    otherProjects.classList.remove("projects__cards");

    togglePersonalProjects.classList.add("line-visible");
    toggleEngineeringProjects.classList.remove("line-visible");
    toggleChallenges.classList.remove("line-visible");
    toggleOtherProjects.classList.remove("line-visible");
  }
});

toggleEngineeringProjects.addEventListener("click", () => {
  if (document.querySelector("#engineeringProjects.projects__visible")) {
    personalProjects.classList.add("projects__visible");
    challengesProjects.classList.add("projects__visible");
    otherProjects.classList.add("projects__visible");
    engineeringProjects.classList.remove("projects__visible");
    engineeringProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#engineeringProjects.projects__cards")) {
    personalProjects.classList.remove("projects__cards");
    challengesProjects.classList.remove("projects__cards");
    otherProjects.classList.remove("projects__cards");

    toggleEngineeringProjects.classList.add("line-visible");
    togglePersonalProjects.classList.remove("line-visible");
    toggleChallenges.classList.remove("line-visible");
    toggleOtherProjects.classList.remove("line-visible");
  }
});

toggleChallenges.addEventListener("click", () => {
  if (document.querySelector("#challengesProjects.projects__visible")) {
    personalProjects.classList.add("projects__visible");
    engineeringProjects.classList.add("projects__visible");
    otherProjects.classList.add("projects__visible");
    challengesProjects.classList.remove("projects__visible");
    challengesProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#challengesProjects.projects__cards")) {
    personalProjects.classList.remove("projects__cards");
    engineeringProjects.classList.remove("projects__cards");
    otherProjects.classList.remove("projects__cards");

    toggleChallenges.classList.add("line-visible");
    togglePersonalProjects.classList.remove("line-visible");
    toggleEngineeringProjects.classList.remove("line-visible");
    toggleOtherProjects.classList.remove("line-visible");
  }
});

toggleOtherProjects.addEventListener("click", () => {
  if (document.querySelector("#otherProjects.projects__visible")) {
    personalProjects.classList.add("projects__visible");
    engineeringProjects.classList.add("projects__visible");
    challengesProjects.classList.add("projects__visible");
    otherProjects.classList.remove("projects__visible");
    otherProjects.classList.add("projects__cards");
  }

  if (document.querySelector("#otherProjects.projects__cards")) {
    personalProjects.classList.remove("projects__cards");
    engineeringProjects.classList.remove("projects__cards");
    challengesProjects.classList.remove("projects__cards");

    toggleOtherProjects.classList.add("line-visible");
    togglePersonalProjects.classList.remove("line-visible");
    toggleEngineeringProjects.classList.remove("line-visible");
    toggleChallenges.classList.remove("line-visible");
  }
});

//======Youtube section======//
function youtubePage() {
  homeSection.classList.add("inactive");
  homeSection.classList.remove("visible");
  youtubeSection.classList.remove("inactive");
  youtubeSection.classList.add("visible");

  generateVideos(API_VIDEOS, OPTIONS);
}
