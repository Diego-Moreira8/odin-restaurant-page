const Heading = (level, content) => {
  const heading = document.createElement(`h${level}`);
  heading.textContent = content;
  return heading;
};

export default Heading;
