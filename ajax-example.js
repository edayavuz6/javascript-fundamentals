// AJAX Example (XMLHttpRequest)

const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

  const xhr = new XMLHttpRequest();

  // GET isteği gönder
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      // İlk kullanıcıyı göster
      result.textContent = data[0].name;
    } else {
      result.textContent = "Bir hata oluştu";
    }
  };

  xhr.send();
});
