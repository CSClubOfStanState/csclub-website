let yearDate = new Date().getFullYear();
// console.log(yearDate);

// document.getElementById("yearDate").innerHTML = yearDate;

const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 400) {
    header.classList.add("bg-light", "rounded");
  } else {
    header.classList.remove("bg-light", "rounded");
  }
};
