// Dizi tanımlama
let numbers = [1, 2, 3, 4, 5];

// push() → sona eleman ekler
numbers.push(6);
console.log("Push:", numbers);

// pop() → sondan eleman siler
numbers.pop();
console.log("Pop:", numbers);

// shift() → baştan eleman siler
numbers.shift();
console.log("Shift:", numbers);

// unshift() → başa eleman ekler
numbers.unshift(0);
console.log("Unshift:", numbers);

// map() → her elemanı değiştirir
let doubled = numbers.map(num => num * 2);
console.log("Map:", doubled);

// filter() → şartlı eleman seçer
let even = numbers.filter(num => num % 2 === 0);
console.log("Filter:", even);

// includes() → eleman var mı kontrol eder
console.log("Includes 3:", numbers.includes(3));
