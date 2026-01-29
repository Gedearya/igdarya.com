// =======================
// Sidebar Toggle
// =======================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const mobileNav = document.getElementById("mobile-navigation");
const navLinks = document.querySelectorAll(".nav-link");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

mobileNav?.addEventListener("click", openSidebar);
overlay?.addEventListener("click", closeSidebar);
navLinks.forEach((link) => link.addEventListener("click", closeSidebar));

// =======================
// Theme Toggle
// =======================
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

function updateThemeLabel() {
  const isDark = html.classList.contains("dark");

  if (themeToggle) {
    themeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

  if (themeToggleMobile) {
    themeToggleMobile.innerText = isDark ? "☀️" : "🌙";
  }
}

function setTheme(isDark) {
  html.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

updateThemeLabel();

themeToggle?.addEventListener("click", () =>
  setTheme(!html.classList.contains("dark")),
);

themeToggleMobile?.addEventListener("click", () =>
  setTheme(!html.classList.contains("dark")),
);

// =======================
// Active Navigation
// =======================
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === "/" && currentPath === "/") {
    setActive(link);
  }

  if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
    setActive(link);
  }
});

function setActive(link) {
  link.classList.add("text-brand-dark", "font-semibold", "dark:text-brand");
}

// =======================
// TypeIt Animation
// =======================
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", { speed: 75 })

    .pause(300)
    .move(-9)
    .delete()
    .type("Backend ")
    .pause(300)
    .delete()
    .type("Full Stack ")
    .pause(100)
    .delete()
    .type("Web ")
    .move(9)
    .go();
});

// =======================
// Refresh Scroll on Top Position
// =======================
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
