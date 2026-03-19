const input = document.getElementById("input");
const info = document.getElementById("info");

// keydown → tuşa basınca
input.addEventListener("keydown", function (e) {
  info.textContent = `Tuşa basıldı: ${e.key}`;
});

// keyup → tuş bırakılınca
input.addEventListener("keyup", function (e) {
  console.log(`Tuş bırakıldı: ${e.key}`);
});

// özel kontrol (Enter tuşu)
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("Enter tuşuna bastın!");
  }
});
