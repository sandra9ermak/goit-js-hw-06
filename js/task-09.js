function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('button.change-color');
const changeColor = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  changeColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
})
