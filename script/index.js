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
