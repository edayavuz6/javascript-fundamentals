// Set Example

// 1. Set oluşturma
const numbers = new Set([1, 2, 3, 3, 4, 4]);

console.log("Set:", numbers); 
// duplicate (tekrar eden) değerler otomatik silinir


// 2. Eleman ekleme
numbers.add(5);
numbers.add(2); // tekrar eklenmez

console.log("After add:", numbers);


// 3. Eleman silme
numbers.delete(3);

console.log("After delete:", numbers);


// 4. Eleman var mı kontrolü
console.log("Has 2:", numbers.has(2));


// 5. Set boyutu
console.log("Size:", numbers.size);


// 6. Set'i array'e çevirme
const arrayFromSet = [...numbers];

console.log("Array:", arrayFromSet);


// 7. for...of ile dönme
for (const num of numbers) {
  console.log("Value:", num);
}
