// Destructuring Examples

// 1. Array Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);


// 2. Object Destructuring
const user = {
  name: "Eda",
  age: 23,
  country: "Turkey"
};

const { name, age, country } = user;

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);


// 3. Değişken ismini değiştirme
const { name: userName } = user;

console.log("User Name:", userName);


// 4. Default değer verme
const { job = "Student" } = user;

console.log("Job:", job);


// 5. Fonksiyon içinde destructuring
function showUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

showUser(user);
