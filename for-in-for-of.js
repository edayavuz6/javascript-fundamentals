// for...in vs for...of Examples

// 1. Array ile for...of (değerleri döner)
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log("for...of value:", num);
}


// 2. Array ile for...in (indexleri döner)
for (const index in numbers) {
  console.log("for...in index:", index);
}


// 3. Object ile for...in (keyleri döner)
const user = {
  name: "Eda",
  age: 20,
  country: "Turkey"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}


// 4. String ile for...of (karakterleri döner)
const text = "JavaScript";

for (const char of text) {
  console.log("Character:", char);
}
