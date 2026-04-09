const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

// Email validation
function isValidEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

// Password validation
function isStrongPassword(pass) {
  return pass.length >= 6;
}

// Real-time validation
[username, email, password, confirmPassword].forEach(input => {
  input.addEventListener("input", () => validate(input));
});

function validate(input) {
  let valid = true;

  if (input === email && !isValidEmail(input.value)) {
    valid = false;
  }

  if (input === password && !isStrongPassword(input.value)) {
    valid = false;
  }

  if (input === confirmPassword && input.value !== password.value) {
    valid = false;
  }

  if (valid) {
    input.classList.add("success");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
  }
}

// Submit validation
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (
    username.value === "" ||
    !isValidEmail(email.value) ||
    !isStrongPassword(password.value) ||
    password.value !== confirmPassword.value
  ) {
    message.textContent = "Fix errors before submitting!";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
