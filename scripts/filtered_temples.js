// Dynamic footer
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });
}

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 3 new temples
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  }
];

// Function to render temples
const gallery = document.querySelector(".gallery");

function renderTemples(filteredTemples) {
  if (!gallery) return;
  gallery.innerHTML = ""; // Clear existing

  filteredTemples.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.style.height = "250px";
    img.style.objectFit = "cover";

    const caption = document.createElement("figcaption");
    caption.textContent = `${temple.templeName}, ${temple.location}`;

    const details = document.createElement("p");
    details.textContent = `Dedicated: ${temple.dedicated} | Area: ${temple.area.toLocaleString()} sq ft`;

    figure.appendChild(img);
    figure.appendChild(caption);
    figure.appendChild(details);
    gallery.appendChild(figure);
  });
}

// Initial render (all temples)
renderTemples(temples);

// Navigation filters
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.textContent.trim();

    let filtered;
    switch(filter) {
      case "Old":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case "New":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case "Large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "Small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default: // Home
        filtered = temples;
    }

    document.querySelector(".page-title").textContent = filter;

    // Highlight active link
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    renderTemples(filtered);
  });
});
