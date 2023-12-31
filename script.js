const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  box1.classList.toggle("active");
  box2.classList.toggle("active");

  if (box2.classList.contains("active")) {
    btn.style.visibility = "hidden";
  } else {
    btn.style.visibility = "visible";
  }
});

