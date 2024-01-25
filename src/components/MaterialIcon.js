const MaterialIcon = (icon) => {
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = icon;
  return span;
};

export default MaterialIcon;
