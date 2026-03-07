// Elementleri seçme
const title = document.getElementById("title");
const button = document.getElementById("btn");
const box = document.getElementById("box");

// Click eventi
button.addEventListener("click", function () {
  title.textContent = "Butona Tıklandı!";
  title.style.color = "blue";
});

// Mouseover eventi
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "orange";
  box.textContent = "Mouse Üzerinde";
});

// Mouseout eventi
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
  box.textContent = "Fareyi Üzerime Getir";
});
