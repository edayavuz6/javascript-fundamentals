// CALLBACK Example

console.log("1. Başladı");

// Callback fonksiyon
function processUser(name, callback) {
  console.log("2. Kullanıcı işleniyor...");

  // Asenkron işlem simülasyonu
  setTimeout(() => {
    console.log("3. Kullanıcı hazır:", name);

    // callback çalıştırılıyor
    callback();
  }, 2000);
}

// Callback fonksiyon
function done() {
  console.log("4. İşlem tamamlandı");
}

// Fonksiyonu çağırma
processUser("Eda", done);
