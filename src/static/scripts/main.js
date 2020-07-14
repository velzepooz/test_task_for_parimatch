const contactSection = document.querySelector('.contact');
const aboutSection = document.querySelector('.about');
const elipseWithDot = document.querySelector('.contact__elipse-dot');
const elipse = document.querySelector('.about__elipse');
const personsImg = document.querySelector('.header__img-layer1');

const elipseWithDotPosition = elipseWithDot.getBoundingClientRect();
const elipsePosition = elipse.getBoundingClientRect();
const personsImgPosition = personsImg.getBoundingClientRect();

let oldValue = 0;

const moveImg = (positon) => {
  const newValue = window.pageYOffset;

  if (oldValue - newValue < 0) {
    personsImg.style.transform = `
      translateY(${positon.y + 10}px)`;
  } else if (oldValue - newValue > 0) {
    personsImg.style.transform = `translateY(${positon.y}px)`;
  }

  oldValue = newValue;
};

const moveElipse = (e, position, element) => {
  const distX = e.clientX - position.x;
  const distY = e.clientY - position.y;

  element.style.transform = `
    translate(${(distX) / 40}px, ${(-1 * distY) / 50}px)`;
};

window.addEventListener('scroll', () => moveImg(personsImgPosition));

contactSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipseWithDotPosition, elipseWithDot);
});

aboutSection.addEventListener('mousemove', (e) => {
  return moveElipse(e, elipsePosition, elipse);
});
