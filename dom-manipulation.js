// Listeyi seç
const list = document.getElementById("list");

// Butonları seç
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const changeBtn = document.getElementById("changeBtn");


// ELEMENT OLUŞTURMA
addBtn.addEventListener("click", function () {

  const newItem = document.createElement("li");
  newItem.textContent = "Yeni Öğe";

  list.appendChild(newItem);

});


// ELEMENT SİLME
removeBtn.addEventListener("click", function () {

  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

});


// ELEMENT DEĞİŞTİRME
changeBtn.addEventListener("click", function () {

  const firstItem = list.firstElementChild;

  if (firstItem) {
    firstItem.textContent = "Değiştirildi!";
  }

});
