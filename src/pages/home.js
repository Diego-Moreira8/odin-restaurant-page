import PageTitle from "../components/PageTitle";

const Home = () => {
  const main = document.createElement("main");
  main.appendChild(PageTitle("Bem-vindo!"));
  return main;
};

export default Home;
