
const box = document.querySelector(".box");
const btnChange = document.querySelector(".btn");

btnChange.addEventListener("click", function () {
  box.classList.toggle("active");
});
