function component() {
  const element = document.createElement("div");

  // Example from Odin Project
  element.textContent = "Diego";

  return element;
}

document.body.appendChild(component());
