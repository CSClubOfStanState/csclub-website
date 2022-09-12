let yearDate = new Date().getFullYear();

const header = document.querySelector(".navbar");

// TODO: Rewrite for when sticky is active
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 400) {
    header.classList.add("bg-light");
  } else {
    header.classList.remove("bg-light");
  }
};

// Tool Tips Init Objects
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
