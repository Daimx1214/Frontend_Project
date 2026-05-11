// Create a function that prints "Hello World!"

function fun(){
    console.log("Hello World!");
}
fun();

// Create a function that takes two numbers as input and prints their sum

let x = 10;
let y = 20;
function sum(a, b) {
    return a + b;
}
console.log(sum(x, y));

// Write a function that returns the square of a given number

let z = 4;

function fung(){
    return z*z;
}
console.log(fung());

//Make a function with a default parameter that says "Welcome, Guest"

let  d = "Welcome, Guest";
function  wel(){
    return d;
}
console.log(wel());

                                    // ARROW FUNCTIONS

//Create an arrow function that takes two numbers and returns their sum.

const func = (a , b) => {
    return a+b;
}
console.log(func(5 , 10));

//Make an arrow function that checks if a number is even or odd.
const funct = (a) => {
    if(a % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(funct(5));

// Create an arrow function that takes a string and returns its length.

let h = "Daim ALI";
const obj = (h) => {
    return h.length;
}
console.log(obj(h));

