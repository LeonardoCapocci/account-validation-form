// Selectors
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span");

const zipCode = document.querySelector("#zip-code");
const zipCodeError = document.querySelector("#zip-code + span");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span");

const passwordConfirm = document.querySelector("#password-confirm");
const passwordConfirmError = document.querySelector("#password-confirm + span");

const form = document.querySelector("form");

document.querySelectorAll("input").forEach((input) => {
  input.setCustomValidity("No");
});

function getErrorMessage(type, expecting, minLength = 1) {
  if (type.validity.valueMissing) {
    return `Please enter a(n) ${expecting}`;
  }
  if (type.validity.typeMismatch) {
    return `Please give me a(n) ${expecting}`;
  }
  if (type.validity.tooShort) {
    return `Your ${expecting} is too short. ${minLength - type.value.length} characters to go.`;
  }
  return "";
}

email.addEventListener("input", () => {
  emailError.textContent = getErrorMessage(email, "email address", 8);
  email.setCustomValidity("False");
  if (!emailError.textContent) {
    email.setCustomValidity("");
  }
});

country.addEventListener("input", () => {
  countryError.textContent = getErrorMessage(country, "country", 4);
  country.setCustomValidity("False");
  if (!countryError.textContent) {
    country.setCustomValidity("");
  }
});

zipCode.addEventListener("input", () => {
  zipCodeError.textContent = getErrorMessage(zipCode, "zip code", 4);
  zipCode.setCustomValidity("False");
  if (!zipCodeError.textContent) {
    zipCode.setCustomValidity("");
  }
});

password.addEventListener("input", () => {
  passwordError.textContent = getErrorMessage(password, "password", 5);
  password.setCustomValidity("False");
  if (!passwordError.textContent) {
    password.setCustomValidity("");
  }
});

passwordConfirm.addEventListener("input", () => {
  if (passwordConfirm.value !== password.value) {
    passwordConfirmError.textContent =
      "Must be identical to previous password entry";
    passwordConfirm.setCustomValidity("False");
  } else {
    passwordConfirmError.textContent = "";
    passwordConfirm.setCustomValidity("");
  }
});

form.addEventListener("submit", (event) => {
  const inputs = document.querySelectorAll("input");
  let allInputsValid = true;
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      allInputsValid = false;
    }
  });
  if (!allInputsValid) {
    event.preventDefault();
    alert("Fix your inputs");
  } else {
    alert("Form Submitted");
  }
});
