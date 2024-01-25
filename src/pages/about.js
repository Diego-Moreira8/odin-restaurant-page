import MaterialIcon from "../components/MaterialIcon";
import Heading from "../components/Heading";
import GoogleMaps from "../components/GoogleMaps";

const About = () => {
  const main = document.createElement("main");
  const aboutUs = document.createElement("p");
  const callUs = document.createElement("p");
  const wrap = document.createElement("div");
  const phone = document.createElement("span");

  aboutUs.textContent = `
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
  callUs.textContent = "Ligue para gente!";
  phone.textContent = "(98) 7654-3210";

  callUs.classList.add("call-us");
  wrap.classList.add("wrap");

  main.id = "about-content";

  wrap.appendChild(MaterialIcon("call"));
  wrap.appendChild(phone);
  main.appendChild(Heading(1, "Sobre nós"));
  main.appendChild(aboutUs);
  main.appendChild(Heading(2, "Contato"));
  main.appendChild(callUs);
  main.appendChild(wrap);
  main.appendChild(GoogleMaps());

  return main;
};

export default About;
