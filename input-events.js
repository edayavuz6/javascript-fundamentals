const input = document.getElementById("username");
const info = document.getElementById("info");

// input → her yazıldığında çalışır
input.addEventListener("input", function () {
  info.textContent = `Girilen değer: ${input.value}`;
});

// focus → input'a tıklanınca
input.addEventListener("focus", function () {
  input.style.border = "2px solid blue";
  info.textContent = "Input aktif";
});

// blur → input'tan çıkınca
input.addEventListener("blur", function () {
  input.style.border = "1px solid gray";
  info.textContent = "Input pasif";
});

// change → yazı yazıp çıktıktan sonra çalışır
input.addEventListener("change", function () {
  console.log("Değer değişti:", input.value);
});
