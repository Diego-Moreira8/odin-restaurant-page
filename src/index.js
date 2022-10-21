import headerContent from "./header.js";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";

import "./reset.css";
import "./style.css";

const header = document.querySelector("#header");
header.appendChild(headerContent());

function changeContent(e) {
  content.innerHTML = "";

  const buttonId = e.target.id;

  if (buttonId === "home-button") {
    content.appendChild(homeContent());
  } else if (buttonId === "menu-button") {
    content.appendChild(menuContent());
  } else if (buttonId === "about-button") {
    content.appendChild(aboutContent());
  }
}

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", changeContent);
menuButton.addEventListener("click", changeContent);
aboutButton.addEventListener("click", changeContent);
