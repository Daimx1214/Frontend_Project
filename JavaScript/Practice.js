
// // use logical operators to check if a number is between 10 and 20

// let x = 10;
// if(x >= 10 && x <= 20){
//     console.log("x is between 10 and 20");
// }

// // Check number is divisible by 3 and 5

// let y = 12;
// if( y%3 == 0 && y%5 == 0){
//     console.log("y is divisible by both 3 and 5");
// }
// else if(y%3 == 0){
//     console.log("y is divisible by 3");
// }
// else if(y%5 == 0){
//     console.log("y is divisible by 5");
// }
// else{
//     console.log("y is not divisible by either 3 or 5");
// }

// //Use ternary operator to check you can drive or you cannot drive

// let age = 16;
// let z = (age >= 18) ? "You can drive" : "You cannot drive";

let animal = {
  eats: true
};

let dog = {
  barks: "Yes it"
};

dog.__proto__ = animal; // dog inherits from animal

console.log(dog.eats);  // true (inherited)
console.log(dog.barks); // true
