// TODO
const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("contact-form");
const select = document.getElementById("contact-kind");
const jobTitle = document.getElementById("business-options");
const compWeb = document.getElementById("business-options");
const code = document.getElementById("talk-code");
document.getElementById("myTextarea").placeholder = "Leave us a message here";

const validLength = (input, min) => {
  if (input.value.trim().length > min) {
    input.parentElement.classList.remove("invalid");
    return true;
  } else {
    input.parentElement.classList.add("invalid");
    return false;
  }
};

const validateEmail = (emailField) => {
  const re = /\w+@\w+\.\w+/;
  if (re.test(emailField.value.trim())) {
    emailField.parentElement.classList.remove("invalid");
    return true;
  } else {
    emailField.parentElement.classList.add("invalid");
    return false;
  }
};

const handleSelect = (selectElement) => {
  const selectedValue = selectElement.value;
  if (selectedValue == "business") {
    jobTitle.parentElement.classList.remove("hidden");
    compWeb.parentElement.classList.remove("hidden");
    code.parentElement.classList.add("hidden");
  } else if (selectedValue == "support") {
    code.parentElement.classList.remove("hidden");
    jobTitle.parentElement.classList.add("hidden");
    compWeb.parentElement.classList.add("hidden");
    return textArea;
  }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
  handleSelect(select);
  if (
    validLength(name, 3) &&
    validLength(message, 10) &&
    validateEmail(email)
  ) {
    valid = true;
  } else {
    valid = false;
  }
  e.preventDefault();
});
