//your JS code here. If required.
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

// Check if credentials are saved in localStorage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// Show "Login as existing user" button if credentials are saved
if (savedUsername && savedPassword) {
  existingButton.classList.remove("hidden");
}

// Handle form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Display login alert
  alert(`Logged in as ${username}`);

  // Save or remove credentials based on checkbox
  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show "Login as existing user" button if credentials are saved
  if (checkbox.checked) {
    existingButton.classList.remove("hidden");
  } else {
    existingButton.classList.add("hidden");
  }
});

// Handle "Login as existing user" button click
existingButton.addEventListener("click", () => {
  alert(`Logged in as ${savedUsername}`);
});