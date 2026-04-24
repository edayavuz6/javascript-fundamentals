// ASYNC / AWAIT Example

const button = document.getElementById("btn");
const result = document.getElementById("result");

// async fonksiyon
async function getUsers() {
  try {
    // await → veriyi bekler
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const data = await response.json();

    // İlk kullanıcıyı göster
    result.textContent = data[0].name;

  } catch (error) {
    console.log("Hata:", error);
    result.textContent = "Veri alınamadı";
  }
}

// Buton ile çağırma
button.addEventListener("click", getUsers);



Add async/await example with Fetch API

