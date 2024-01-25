const GoogleMaps = () => {
  const map = document.createElement("div");
  map.classList.add("map");
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31798720.90197247!2d-73.162779560763!3d-13.370175563633527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1706206264852!5m2!1spt-BR!2sbr"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;

  return map;
};

export default GoogleMaps;
