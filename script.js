const header = document.querySelector(".header");
const homePageCard = document.querySelector(".home-page");
const submitBtn = document.querySelector(".submit-btn");
const errorMessage = document.querySelector(".error-message");
const emailInput = document.querySelector(".email-input");
const successMessageCard = document.querySelector(".success-message");
const successMessage = document.querySelector(".success-message-paragraph");
const dismissBtn = document.querySelector(".dismiss-btn");

const validateEmail = (event) => {
  event.preventDefault();
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!emailInput.value || !emailInput.value.match(regex)) {
    errorMessage.style.display = "block";
    emailInput.classList.add("error");
  } else {
    header.classList.toggle("hidden");
    homePageCard.style.display = "none";
    successMessageCard.classList.toggle("hidden");
    successMessage.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription.`;
  }
};

submitBtn.addEventListener("click", validateEmail);

dismissBtn.addEventListener("click", () => {
  header.classList.toggle("hidden");
  homePageCard.style.display = "flex";
  successMessageCard.classList.toggle("hidden");
  errorMessage.style.display = "none";
  emailInput.classList.remove("error");
  emailInput.value = "";
});
