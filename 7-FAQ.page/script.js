"use strict";
const btns = document.querySelectorAll(".question-btn");

// using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (article) {
  // Article is the ParentElement of Question-Btn
  const btn = article.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (question) {
      if (question !== article) {
        question.classList.remove("show-text");
      }
    });

    article.classList.toggle("show-text");
  });
});

// // traversing dom
// // btns.forEach(function (btn) {
// //   btn.addEventListener("click", function (e) {
// //     const question = e.currentTarget.parentElement.parentElement;
// //     question.classList.toggle("show-text");
// //   });
// // });
