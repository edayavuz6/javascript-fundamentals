// Elementleri seçme
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("btn");

// Butona tıklanınca stil değiştirme
button.addEventListener("click", function () {

  title.style.color = "purple";
  title.style.fontSize = "32px";

  text.style.backgroundColor = "lightgray";
  text.style.padding = "10px";
  text.style.borderRadius = "5px";

});
