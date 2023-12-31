const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  box1.classList.toggle("set");
  box2.classList.toggle("set2");
});
