// map() Example

// 1. Basit array
const numbers = [1, 2, 3, 4];

// Her sayıyı 2 ile çarp
const doubled = numbers.map(num => num * 2);

console.log("Doubled:", doubled);


// 2. String array
const names = ["eda", "ahmet", "mehmet"];

// İlk harfleri büyük yap
const capitalized = names.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1)
);

console.log("Capitalized:", capitalized);


// 3. Object array
const users = [
  { name: "Eda", age: 20 },
  { name: "Ahmet", age: 17 }
];

// Sadece isimleri al
const userNames = users.map(user => user.name);

console.log("User Names:", userNames);


// 4. Yeni obje oluşturma
const updatedUsers = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));

console.log("Updated Users:", updatedUsers);
