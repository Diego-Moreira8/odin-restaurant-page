export default function headerContent() {
  const header = document.createElement("header");

  const brandDiv = document.createElement("div");
  brandDiv.textContent = "Pizzaria Nostra Casa";

  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("nav-button");
  homeButton.id = "home-button";

  const menuButton = document.createElement("button");
  menuButton.textContent = "Cardápio";
  menuButton.classList.add("nav-button");
  menuButton.id = "menu-button";

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "Sobre nós";
  aboutButton.classList.add("nav-button");
  aboutButton.id = "about-button";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);

  header.appendChild(brandDiv);
  header.appendChild(nav);

  return header;
}
