import PageTitle from "../components/PageTitle";

const About = () => {
  const main = document.createElement("main");
  main.appendChild(PageTitle("Sobre nós"));

  return main;
};

export default About;
