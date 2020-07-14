const contactSection = document.querySelector('.contact');
const aboutSection = document.querySelector('.about');
const elipseWithDot = document.querySelector('.contact__elipse-dot');
const elipse = document.querySelector('.about__elipse');

const elipseWithDotPosition = elipseWithDot.getBoundingClientRect();
const elipsePosition = elipse.getBoundingClientRect();

const moveElipse = (e, position, element) => {
  const distX = e.clientX - position.x;
  const distY = e.clientY - position.y;

  element.style.transform = `
    translate(${(distX) / 12}px, ${(-1 * distY) / 50}px)`;
};

contactSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipseWithDotPosition, elipseWithDot);
});

aboutSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipsePosition, elipse);
});
