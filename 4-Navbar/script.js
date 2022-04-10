"use strict";

//  classList - shows/gets all classes
// contains  - check classlist for specific class
// add - add class
// remove -class
// toggle - toglle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//   // if (links.classList.contains("show-links")) {
//   //   links.classList.remove("show-links");
//   // } else {
//   //   links.classList.add("show-links");
//   // }
//   links.classList.toggle("show-links");
// });

navToggle.addEventListener("click", function () {
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

  links.classList.toggle("show-links");
});
