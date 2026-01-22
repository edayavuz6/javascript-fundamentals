// Methods (Functions) Example

// Parametresiz metod
function sayHello() {
  console.log("Hello, welcome!");
}

sayHello();

// Parametreli metod
function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("Eda");

// Değer döndüren metod
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 3);
console.log("Result:", result);
