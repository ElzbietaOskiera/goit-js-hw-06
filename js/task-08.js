const form = document.querySelector(".login-form");

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola!");
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

form.addEventListener("submit", checkSubmit);

