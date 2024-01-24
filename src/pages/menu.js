import PageTitle from "../components/PageTitle";

const Menu = () => {
  const main = document.createElement("main");
  main.appendChild(PageTitle("Cardápio"));

  return main;
};

export default Menu;
