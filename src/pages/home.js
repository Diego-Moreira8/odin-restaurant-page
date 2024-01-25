import Heading from "../components/Heading";

const Home = () => {
  const main = document.createElement("main");
  const p = document.createElement("p");

  p.textContent = `
    Olá! Este site é um projeto proposto pelo site The Odin Project para prática
    de Webpack. Espero que goste do que fiz, e não deixe de conferir o meu 
    portfólio com este e outros projetos! Agora vou deixar um lorem ipsum!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur 
    exercitationem veritatis, unde officia maiores, quibusdam ut delectus a 
    dicta rem corrupti sunt officiis, tempora illum. Ipsam voluptatem, quis 
    expedita fuga repudiandae sed vitae, omnis quidem odio iusto qui nihil 
    inventore consequuntur natus molestiae fugiat eos deserunt cumque ea quia, 
    ipsum molestias dicta culpa quas. Ipsa doloribus aut totam ducimus. Maxime 
    temporibus aut architecto et quia explicabo optio tempora repudiandae 
    adipisci. Illum maiores porro obcaecati neque consequatur aut ab molestiae 
    facilis labore in! Inventore debitis est possimus impedit fugiat magnam 
    reiciendis assumenda iste tempore? Cupiditate commodi reprehenderit dicta 
    praesentium voluptates?
  `;

  main.appendChild(Heading(1, "Bem-vindo!"));
  main.appendChild(p);

  return main;
};

export default Home;
