let counterValue = 0;
const newValue = document.querySelector("#value");
const buttonDecrement = document.querySelector("button[data-action='decrement']");
const buttonIncrement = document.querySelector("button[data-action='increment']");
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  newValue.textContent = counterValue;
});
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  newValue.textContent = counterValue;
});
