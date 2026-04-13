// Spread Operator Examples

// 1. Array kopyalama
const numbers = [1, 2, 3];

const copyNumbers = [...numbers];

console.log("Kopya Array:", copyNumbers);


// 2. Array birleştirme
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];

console.log("Birleşmiş Array:", combined);


// 3. Array'e eleman ekleme
const newNumbers = [...numbers, 4, 5];

console.log("Yeni Array:", newNumbers);


// 4. Object kopyalama
const user = {
  name: "Eda",
  age: 20
};

const copyUser = { ...user };

console.log("Kopya Object:", copyUser);


// 5. Object güncelleme
const updatedUser = {
  ...user,
  age: 21
};

console.log("Güncellenmiş User:", updatedUser);


// 6. Fonksiyon parametresi olarak kullanım
const nums = [10, 20, 30];

function sum(a, b, c) {
  return a + b + c;
}

console.log("Toplam:", sum(...nums));
