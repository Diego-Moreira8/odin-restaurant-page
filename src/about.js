export default function aboutContent() {
  const section = document.createElement("section");

  const title = document.createElement("h2");
  title.textContent = "Sobre nós";

  const text = document.createElement("p");
  text.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
    repellat vero eveniet reiciendis a eos nostrum harum consequatur, enim
    blanditiis quos quisquam nisi ipsa corporis molestiae animi cumque
    impedit illo quaerat vitae labore nihil! Tenetur accusamus amet dolores
    sequi illum repellendus, at deserunt placeat fuga mollitia, velit esse
    minus eos!`;

  section.appendChild(title);
  section.appendChild(text);

  return section;
}
