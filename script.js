const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (box1.classList.contains("active")) {
    box1.classList.remove("active");
  } else {
    box2.classList.add("active");
  }

  if (box2.classList.contains("active")) {
    btn.style.visibility = "hidden";
  } else {
    btn.style.visibility = "visible";
  }
});


