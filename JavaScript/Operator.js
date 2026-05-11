console.log("Arithmetic Operators in JavaScript");
let a = 10;
let b = 5;

console.log("a + b = ", a + b); 
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // Exponentiation means a raised to the power of b
console.log("a++ = ", a++); // Postfix increment , 10 print hoa phir ++ hoa yani 11
console.log("++a = ", ++a); // Prefix increment , 11 tha phlaa ++ hoa yani 12 phir print 

console.log("b-- = ", b--); // Postfix decrement
console.log( "Value of b = ", b); // b ki value ab 4 hai
console.log("--b = ", --b); // Prefix decrement
console.log();

console.log("Assignment Operators in JavaScript");
let c = 20;
let d = 50;

console.log("c = d = ", c = d); 
console.log("c = c + 10 = ", c += 10); // c ki value ab 60 hai
console.log("d = d - 10 = ", d -= 10); // d ki value ab 40 hai
console.log("c = c * 2 = ", c *= 2); // c ki value ab 120 hai
console.log("d = d / 2 = ", d /= 2); // d ki value ab 20 hai 
console.log("c = c % 9 = ", c %= 9); // c ki value ab 3 hai , 120 ko 9 se divide karne par remainder 3 aata hai
console.log("c = c ** 2 = ", c **= 2); // c ki value ab 3 hai, or 3 ki power 2 = 9 hoga
console.log();

console.log("Comparison Operators in JavaScript");
let e = 25;
let f = 5;
console.log("e == f = ", e == f); // false, value same nahi hai
console.log("e != f = ", e != f); 
console.log("e === f = ", e === f); // false, value aur type dono same nahi hai string value ho gi to jawab reverse aiya ga
console.log("e !== f = ", e !== f); // true, value aur type dono string value ho gi to jawab reverse aiya ga
console.log("e > f = ", e > f); 
console.log("e < f = ", e < f); 
console.log("e >= f = ", e >= f); 
console.log("e <= f = ", e <= f); 
console.log();


console.log("Logical Operators in JavaScript");
let g = true;
let h = false;
console.log("g && h = ", g && h); //dono true nahi hai
console.log("g || h = ", g || h); // ya to dono me se koi ek true hai
console.log("!g = ", !g); 
console.log("!h = ", !h); 
console.log();


console.log("Bitwise Operators in JavaScript");
let i = 5; // 0101 in binary
let j = 3; // 0011 in binary
console.log("i & j = ", i & j); // 0001 in binary
console.log("i | j = ", i | j); // 0111 in binary
console.log("i ^ j = ", i ^ j); // 0110 in binary

