import "./styles/main.css";
import { loadHomeContent } from "./scripts/home.js";
import { loadAboutContent } from "./scripts/about.js";
import { loadMenuContent } from "./scripts/menu.js";

let initialPage = "Home";
let currPage = initialPage;

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const navbuttons = document.querySelectorAll("nav button");
  navbuttons.forEach((button) => button.classList.remove("active"));
}

function loadPageContent(newPage) {
  switch (newPage) {
    case "Home":
      clearContent();
      currPage = "Home";
      loadHomeContent();
      break;
    case "Menu":
      clearContent();
      currPage = "Menu";
      loadMenuContent();
      break;
    case "About":
      clearContent();
      currPage = "About";
      loadAboutContent();
      break;
  }
}

function loadInit() {
  loadPageContent(initialPage);
}

function clickBtn() {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const newPage = event.target.id;
      if (newPage !== currPage) loadPageContent(newPage);
    });
  });
}

loadInit();
clickBtn();