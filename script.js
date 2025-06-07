// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
});
