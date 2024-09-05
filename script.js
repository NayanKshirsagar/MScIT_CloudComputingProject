'use strict';

/**
 * Navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");  // Assuming the header element
const goTopBtn = document.querySelector("[data-go-top]");  // Assuming the go-to-top button

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

/**
 * Toggle navigation
 */
const navToggleEvent = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

/**
 * Add toggle event listeners for opening and closing navbar
 */
navElemArr.forEach(elem => {
  elem.addEventListener("click", navToggleEvent);
});

/**
 * Close navbar when a navigation link is clicked
 */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

/**
 * Show or hide the header and go-to-top button on scroll
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
