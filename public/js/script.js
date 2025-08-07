
// ========== DARK MODE TOGGLE ==========
const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn.querySelector("i");
const html = document.documentElement;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  html.classList.remove("dark");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

// Toggle on click
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");

  // Icon toggle
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Show menu on button click
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("right-[-100%]");
  mobileMenu.classList.add("right-0");
});

// Close menu on close button click
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("right-[-100%]");
  mobileMenu.classList.remove("right-0");
});

// Close menu when any link is clicked
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("right-[-100%]");
    mobileMenu.classList.remove("right-0");
  });
});


// ========== ANIMATIONS ==========
anime({
  targets: "nav",
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1000,
  easing: "easeOutExpo"
});
