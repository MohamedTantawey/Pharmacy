const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".Login");
const registerlink = document.querySelector(".register");
const btn = document.querySelector(".btnLogin");
const iconclose = document.querySelector(".icon-close");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  document.body.classList.remove("blur"); // Remove blur effect from the body
});

const btnLogin = document.querySelector(".btnLogin");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

// Function to toggle the overlay
function toggleOverlay() {
  document.body.classList.toggle("overlay-active");
}

btnLogin.addEventListener("click", function() {
  toggleOverlay();
});

// Clicking outside the login form will also close the overlay
overlay.addEventListener("click", function(event) {
  if (event.target === overlay) {
    toggleOverlay();
  }
});

// Append the overlay to the body
document.body.appendChild(overlay);

btnLogin.addEventListener('click', function() {
  overlay.classList.toggle('show');
});

const closeIcon = document.querySelector('.icon-close');

closeIcon.addEventListener('click', function() {
  overlay.classList.remove('show'); // Remove the 'show' class from overlay
  document.body.classList.remove('blur'); // Remove blur effect from the body
});