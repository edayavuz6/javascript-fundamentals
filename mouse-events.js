const box = document.getElementById("box");
const info = document.getElementById("info");

// mouseover → üstüne gelince
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "orange";
  info.textContent = "Mouse box üzerine geldi";
});

// mouseout → çıkınca
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
  info.textContent = "Mouse box'tan çıktı";
});

// mousedown → tıklamaya basınca
box.addEventListener("mousedown", function () {
  box.style.backgroundColor = "red";
  info.textContent = "Mouse basılı tutuluyor";
});

// mouseup → bırakınca
box.addEventListener("mouseup", function () {
  box.style.backgroundColor = "green";
  info.textContent = "Mouse bırakıldı";
});

// mousemove → hareket ettikçe
box.addEventListener("mousemove", function (e) {
  info.textContent = `Mouse X: ${e.clientX}, Y: ${e.clientY}`;
});
