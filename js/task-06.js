const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  const myInput = event.currentTarget;
  const inputLength = 6;
  if (myInput.value.length === inputLength) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
  } else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
  }
});
