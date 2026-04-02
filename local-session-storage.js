const input = document.getElementById("username");
const result = document.getElementById("result");

const saveLocalBtn = document.getElementById("saveLocal");
const saveSessionBtn = document.getElementById("saveSession");
const getDataBtn = document.getElementById("getData");
const clearBtn = document.getElementById("clearData");

// LocalStorage kaydetme
saveLocalBtn.addEventListener("click", function () {
  localStorage.setItem("username", input.value);
  result.textContent = "LocalStorage'a kaydedildi";
});

// SessionStorage kaydetme
saveSessionBtn.addEventListener("click", function () {
  sessionStorage.setItem("username", input.value);
  result.textContent = "SessionStorage'a kaydedildi";
});

// Veriyi getirme
getDataBtn.addEventListener("click", function () {
  const localData = localStorage.getItem("username");
  const sessionData = sessionStorage.getItem("username");

  result.textContent = `Local: ${localData} | Session: ${sessionData}`;
});

// Temizleme
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  sessionStorage.removeItem("username");

  result.textContent = "Veriler silindi";
});
