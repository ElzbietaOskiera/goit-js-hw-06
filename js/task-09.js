function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const newBackgroundColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  newBackgroundColor.textContent = getRandomHexColor();
});