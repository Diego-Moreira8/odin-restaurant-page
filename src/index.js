import headerContent from "./header.js";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";
import footerContent from "./footer.js";

import "./reset.css";
import "./style.css";

const header = document.querySelector("#header");
header.appendChild(headerContent());

const footer = document.querySelector("#footer");
footer.appendChild(footerContent());

function changeContent(e) {
  content.innerHTML = "";

  const buttonId = e.target.id;

  if (buttonId === "home-button") {
    content.appendChild(homeContent());
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    aboutButton.classList.remove("active");
  } else if (buttonId === "menu-button") {
    content.appendChild(menuContent());
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    aboutButton.classList.remove("active");
  } else if (buttonId === "about-button") {
    content.appendChild(aboutContent());
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    aboutButton.classList.add("active");
  }
}

const content = document.querySelector("#content");
content.appendChild(homeContent());

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", changeContent);
menuButton.addEventListener("click", changeContent);
aboutButton.addEventListener("click", changeContent);

homeButton.classList.add("active");
