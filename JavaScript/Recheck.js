
// Original person object
let person = {
  name: "Daim",
  age: 22,
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
};

// ❌ Shallow Copy using '=' (same reference)
let personCopy1 = person;

// ✅ Shallow Clone using Spread Operator (new object)
let personCopy2 = { ...person };

// Modify both copies
personCopy1.name = "Ali"; // changes original (same memory reference)
personCopy2.name = "Ahmed"; 

console.log("Original Person:", person);
console.log("personCopy1 (=):", personCopy1);
console.log("personCopy2 (spread):", personCopy2);

