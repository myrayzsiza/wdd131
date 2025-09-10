// temples.js

// 1. Footer: dynamic copyright year and last modified date
const year = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) {
  yearSpan.textContent = year;
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = lastModifiedDate;
}

// 2. Hamburger menu toggle
const headerInner = document.querySelector(".header-inner");
const nav = document.querySelector(".nav");

if (headerInner && nav) {
  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger");
  hamburger.setAttribute("aria-label", "Toggle navigation menu");
  hamburger.innerHTML = "☰"; // Hamburger symbol

  headerInner.insertBefore(hamburger, nav);

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.innerHTML = nav.classList.contains("open") ? "✕" : "☰";
  });
}
