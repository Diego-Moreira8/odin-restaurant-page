import Heading from "../components/Heading";

const Menu = () => {
  const main = document.createElement("main");
  const menuList = document.createElement("ul");
  const DESCRIPTION = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate! Facere maxime eveniet totam sapiente, minus aperiam dolorum beatae quis veniam voluptatem officiis labore soluta commodi, officia maiores! Rerum, consectetur.`;
  const menu = [
    { name: "Café", description: DESCRIPTION, price: 3.99 },
    { name: "Brunch", description: DESCRIPTION, price: 9.99 },
    { name: "Almoço", description: DESCRIPTION, price: 19.99 },
    { name: "Lanche da tarde", description: DESCRIPTION, price: 9.99 },
    { name: "Jantar", description: DESCRIPTION, price: 29.99 },
    { name: "Sobremesa", description: DESCRIPTION, price: 19.99 },
    { name: "Sobremesa+", description: DESCRIPTION, price: 119.99 },
  ];

  for (let item of menu) {
    const li = document.createElement("li");
    const wrap = document.createElement("div");
    const dots = document.createElement("div");
    const nameDiv = document.createElement("div");
    const descDiv = document.createElement("p");
    const priceDiv = document.createElement("div");

    wrap.classList.add("wrap");
    dots.classList.add("dots");
    nameDiv.classList.add("name");
    descDiv.classList.add("description");
    priceDiv.classList.add("price");

    nameDiv.textContent = item.name;
    descDiv.textContent = item.description;
    priceDiv.textContent = `R$ ${item.price}`;

    wrap.appendChild(nameDiv);
    wrap.appendChild(dots);
    wrap.appendChild(priceDiv);
    li.appendChild(wrap);
    li.appendChild(descDiv);
    menuList.appendChild(li);
  }

  main.id = "menu-content";
  main.appendChild(Heading(1, "Bem-vindo!"));
  main.appendChild(menuList);

  return main;
};

export default Menu;
