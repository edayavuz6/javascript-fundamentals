// Arrow Function Examples

// 1. Normal function
function sayHello() {
  console.log("Hello!");
}

sayHello();


// 2. Arrow function (kısa yazım)
const sayHi = () => {
  console.log("Hi!");
};

sayHi();


// 3. Parametreli arrow function
const greetUser = (name) => {
  console.log("Hello " + name);
};

greetUser("Eda");


// 4. Tek satır arrow function (return otomatik)
const sum = (a, b) => a + b;

console.log("Toplam:", sum(5, 3));


// 5. Array ile kullanım (map)
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log("Doubled:", doubled);


// 6. filter ile kullanım
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);
