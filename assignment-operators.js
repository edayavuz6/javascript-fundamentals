// JavaScript Assignment Operators
// Atama Operatörleri Örnekleri

// 1. = (Basic Assignment)
let x = 10;
console.log("= :", x);

// 2. += (Addition Assignment)
x += 5; // x = x + 5
console.log("+= :", x);

// 3. -= (Subtraction Assignment)
x -= 3; // x = x - 3
console.log("-= :", x);

// 4. *= (Multiplication Assignment)
x *= 2; // x = x * 2
console.log("*= :", x);

// 5. /= (Division Assignment)
x /= 4; // x = x / 4
console.log("/= :", x);

// 6. %= (Remainder Assignment)
x %= 3; // x = x % 3
console.log("%= :", x);

// 7. **= (Exponentiation Assignment)
x **= 2; // x = x ** 2
console.log("**= :", x);

// 8. <<= (Left Shift Assignment)
let a = 5; // 0101
a <<= 1;
console.log("<<= :", a);

// 9. >>= (Right Shift Assignment)
a >>= 1;
console.log(">>= :", a);

// 10. >>>= (Unsigned Right Shift Assignment)
a >>>= 1;
console.log(">>>=", a);

// 11. &= (Bitwise AND Assignment)
let b = 5;
b &= 1;
console.log("&= :", b);

// 12. |= (Bitwise OR Assignment)
b |= 2;
console.log("|= :", b);

// 13. ^= (Bitwise XOR Assignment)
b ^= 3;
console.log("^= :", b);

// 14. &&= (Logical AND Assignment)
let isLoggedIn = true;
isLoggedIn &&= false;
console.log("&&= :", isLoggedIn);

// 15. ||= (Logical OR Assignment)
let username = "";
username ||= "Guest";
console.log("||= :", username);

// 16. ??= (Nullish Coalescing Assignment)
let userAge = null;
userAge ??= 18;
console.log("??= :", userAge);
