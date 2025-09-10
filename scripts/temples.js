// temples.js

// 1. Footer: dynamic copyright year and last modified date
const footer = document.querySelector(".footer-content");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

if (footer) {
  footer.innerHTML = `©${currentYear} ✿ Raymond Bamutesiza ✿ Uganda<br>Last modified: ${lastModified}`;
}

// 2. Hamburger menu toggle
const hamburger = document.createElement("button");
hamburger.classList.add("hamburger");
hamburger.setAttribute("aria-label", "Toggle navigation menu");
hamburger.innerHTML = "☰"; // Hamburger symbol

const headerInner = document.querySelector(".header-inner");
const nav = document.querySelector(".nav");

if (headerInner && nav) {
  headerInner.insertBefore(hamburger, nav);

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
      hamburger.innerHTML = "✕"; // X symbol to close
    } else {
      hamburger.innerHTML = "☰"; // Hamburger symbol
    }
  });
}
