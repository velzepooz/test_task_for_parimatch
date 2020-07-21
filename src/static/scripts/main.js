const contactSection = document.querySelector('.contact');
const aboutSection = document.querySelector('.about');
const elipseWithDot = document.querySelector('.contact__elipse-dot');
const elipse = document.querySelector('.about__elipse');

const elipseWithDotPosition = elipseWithDot.getBoundingClientRect();
const elipsePosition = elipse.getBoundingClientRect();

const FIREFOX = /Firefox/i.test(navigator.userAgent);

if (FIREFOX) {
  const parallaxContainer = document.querySelector('.header__img-parallax');

  parallaxContainer.style.backgroundPosition = '0 0';
}

const moveElipse = (e, position, element) => {
  const distX = e.clientX - position.x;
  const distY = e.clientY - position.y;

  element.style.transform = `
    translate(${(distX) / 40}px, ${(-1 * distY) / 50}px)`;
};

contactSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipseWithDotPosition, elipseWithDot);
});

aboutSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipsePosition, elipse);
});
