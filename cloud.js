const floatingImage = document.querySelector('.floating-image');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function randomizePosition() {
  const randomX = Math.floor(Math.random() * (windowWidth - 400));
  const randomY = Math.floor(Math.random() * (windowHeight - 300));
  floatingImage.style.left = `${randomX}px`;
  floatingImage.style.top = `${randomY}px`;
}

randomizePosition();

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const imageX = parseInt(floatingImage.style.left);
  const imageY = parseInt(floatingImage.style.top);
  const distanceX = mouseX - imageX - 200; // Half of image width
  const distanceY = mouseY - imageY - 150; // Half of image height
  const newX = imageX + (distanceX * 0.03);
  const newY = imageY + (distanceY * 0.03);
  floatingImage.style.left = `${newX}px`;
  floatingImage.style.top = `${newY}px`;
});

window.addEventListener('resize', randomizePosition);
