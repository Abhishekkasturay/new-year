const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  // Toggle the "active" class on box1 and box2
  box1.classList.toggle("active");
  box2.classList.toggle("active");

  // Check if box2 has the "active" class
  if (box2.classList.contains("active")) {
    btn.style.display = "none"; // Hide the button
  } else {
    btn.style.display = "block"; // Show the button
  }
});



