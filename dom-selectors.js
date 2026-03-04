// ID ile seçim
const title = document.getElementById("title");

// Class ile seçim (HTMLCollection döner)
const paragraphs = document.getElementsByClassName("text");

// querySelector (ilk eşleşeni alır)
const firstParagraph = document.querySelector(".text");

// querySelectorAll (NodeList döner)
const allParagraphs = document.querySelectorAll(".text");

// Buton seçme
const button = document.getElementById("btn");

// Olay ekleme
button.addEventListener("click", function() {
  title.textContent = "Başlık Değişti!";
  title.classList.add("highlight");

  allParagraphs.forEach(function(p) {
    p.style.color = "blue";
  });
});
