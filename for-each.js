// Kullanıcı listesi
const users = [
  { name: "Eda", age: 20 },
  { name: "Ahmet", age: 17 },
  { name: "Mehmet", age: 25 }
];

// forEach() → her eleman üzerinde işlem yapar
users.forEach(function(user, index) {
  console.log(`Kullanıcı ${index + 1}: ${user.name}`);
  
  if (user.age >= 18) {
    console.log("→ Reşit");
  } else {
    console.log("→ Reşit değil");
  }
});
