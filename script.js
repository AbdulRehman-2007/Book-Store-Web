// Navbar scroll + mobile toggle + footer year

// scroll effect: toggle .scrolled
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.glass-navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// DOM ready
document.addEventListener('DOMContentLoaded', function () {
  // set year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});
     


// cambdrige filter bar start

// // Navbar toggle for mobile
// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.getElementById('primaryNav');

// if (navToggle) {
//   navToggle.addEventListener('click', () => {
//     const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
//     navToggle.setAttribute('aria-expanded', !expanded);
//     navLinks.classList.toggle('open');
//   });
// }

// Footer year auto-update
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Filter functionality (for Cambridge & Sindh pages)
function filterProperties() {
  const searchInput = document.getElementById("searchLocation").value.toLowerCase();
  const priceFilter = document.getElementById("priceFilter").value;

  const cards = document.querySelectorAll(".property-card");

  cards.forEach(card => {
    const location = card.getAttribute("data-location").toLowerCase();
    const price = card.getAttribute("data-price");

    const matchesSearch = location.includes(searchInput);
    const matchesPrice = priceFilter === "" || price === priceFilter;

    if (matchesSearch && matchesPrice) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function resetFilters() {
  document.getElementById("searchLocation").value = "";
  document.getElementById("priceFilter").value = "";

  const cards = document.querySelectorAll(".property-card");
  cards.forEach(card => {
    card.style.display = "block";
  });
}
//  sindh page js start


// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-modern");
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Set year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Filter Function
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const priceFilter = document.getElementById("priceFilter");
  const resetBtn = document.getElementById("resetBtn");
  const cards = document.querySelectorAll(".property-card");

  function filterBooks() {
    const searchVal = searchInput.value.toLowerCase();
    const priceVal = priceFilter.value;

    cards.forEach(card => {
      const location = card.getAttribute("data-location").toLowerCase();
      const price = card.getAttribute("data-price");

      let matchesSearch = location.includes(searchVal);
      let matchesPrice = priceVal === "" || price === priceVal;

      if (matchesSearch && matchesPrice) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (searchInput) searchInput.addEventListener("input", filterBooks);
  if (priceFilter) priceFilter.addEventListener("change", filterBooks);
  if (resetBtn) resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    priceFilter.value = "";
    filterBooks();
  });
});
//   contac file starts

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const alertBox = document.getElementById("formAlert");

    let valid = true;

    // Reset
    [name, email, message].forEach(input => {
      input.classList.remove("is-invalid");
    });
    alertBox.textContent = "";
    alertBox.className = "";

    // Validate Name
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      valid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      message.classList.add("is-invalid");
      valid = false;
    }

    if (valid) {
      alertBox.textContent = "✅ Your message has been sent successfully!";
      alertBox.classList.add("success");
      form.reset();
    } else {
      alertBox.textContent = "❌ Please correct the errors above.";
      alertBox.classList.add("error");
    }
  });
});
//   footer javascript starts

// Auto-update year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});


// Navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
});



