import Home from "./pages/home.js";
import Menu from "./pages/menu.js";
import About from "./pages/about.js";
import "./styles.scss";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const navButtons = [homeBtn, menuBtn, aboutBtn];
const content = document.querySelector("#content");

const switchPages = (page) => {
  let pageFunction;

  switch (page) {
    case "home":
      pageFunction = Home;
      break;
    case "menu":
      pageFunction = Menu;
      break;
    case "about":
      pageFunction = About;
      break;
    default:
      console.error(`"${page}" isn't a valid page`);
      return;
  }

  content.innerHTML = "";
  content.appendChild(pageFunction());

  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList[b.id === page ? "add" : "remove"]("active"));
};

window.onload = switchPages("home");
navButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => switchPages(e.target.id))
);
