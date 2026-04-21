// PROMISE Example

console.log("1. Başladı");

// Promise oluşturma
const myPromise = new Promise((resolve, reject) => {

  let success = true; // bunu false yaparak reject görebilirsin

  setTimeout(() => {
    if (success) {
      resolve("2. İşlem başarılı");
    } else {
      reject("2. Hata oluştu");
    }
  }, 2000);

});

// Promise kullanımı
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("3. İşlem tamamlandı");
  });
