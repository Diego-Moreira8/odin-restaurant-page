export default function menuContent() {
  const section = document.createElement("section");
  section.id = "menu";

  const title = document.createElement("h2");
  title.textContent = "Cardápio";

  class MenuItem {
    constructor(title, price) {
      this.title = title;
      this.ingredientsArray =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, iusto.";
      this.price = price;
    }
  }

  const itemsArray = [
    new MenuItem("À Moda", 60),
    new MenuItem("Calabresa", 55),
    new MenuItem("Pepperoni", 55),
    new MenuItem("Frango com Catupiry", 50),
    new MenuItem("Portuguesa", 50),
    new MenuItem("Estrogonofe de Frango", 50),
    new MenuItem("Peito de Peru", 50),
    new MenuItem("Marguerita", 50),
    new MenuItem("Corn e Bacon", 50),
    new MenuItem("Doritos", 70),
    new MenuItem("Chocolate", 40),
    new MenuItem("Romeu e Julieta", 40),
  ];

  for (let item of itemsArray) {
    section.innerHTML += `<div class="menu-item">
        <div class="item-title">${item.title}</div>
        <div class="item-price">R$ 
        ${String(item.price.toFixed(2)).replace(".", ",")}
        </div>
        <div class="item-ingredient">${item.ingredientsArray}</div>
      </div>`;
  }

  return section;
}
