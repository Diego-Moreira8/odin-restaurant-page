export default function menuContent() {
  const section = document.createElement("section");

  const title = document.createElement("h2");
  title.textContent = "Cardápio";

  class MenuItem {
    constructor(title, ingredientsArray, price) {
      this.title = title;
      this.ingredientsArray = ingredientsArray;
      this.price = price;
    }
  }

  const pizza1 = new MenuItem(
    "À Moda",
    ["molho da casa", "queijo", "frango", "calabresa", "bacon"],
    65
  );

  const pizza2 = new MenuItem(
    "À Moda",
    ["molho da casa", "queijo", "frango", "calabresa", "bacon"],
    65
  );

  const pizza3 = new MenuItem(
    "À Moda",
    ["molho da casa", "queijo", "frango", "calabresa", "bacon"],
    65
  );

  const pizza4 = new MenuItem(
    "À Moda",
    ["molho da casa", "queijo", "frango", "calabresa", "bacon"],
    65
  );

  const itemsArray = [pizza1, pizza2, pizza3, pizza4];

  const itemDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const priceDiv = document.createElement("div");
  const ingredientsDiv = document.createElement("div");

  // tentar append num for

  return section;
}
