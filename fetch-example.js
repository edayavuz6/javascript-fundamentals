// FETCH API Example

const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // JSON'a çevir
    .then(data => {
      // İlk kullanıcıyı göster
      result.textContent = data[0].name;
    })
    .catch(error => {
      console.log("Hata:", error);
      result.textContent = "Veri alınamadı";
    });

});

