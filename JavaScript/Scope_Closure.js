/*
//Declare a variable using let inside a block and try to access it outside the block.
{
    let x ;
}
console.log(x); //  Error, because x is not defined outside the block


//Create a global variable and modify its value inside a function.
let d = 50;
let arr = () => 
{
    d = 30;
    console.log(d);
}
arr(); 

//Declare two variables with the same name — one globally and one inside and outside a block
let a = 10;
{
    let a = 20;
    console.log("Inside block: " + a);
}
console.log("Outside block: " + a); 

//Declare a variable using var inside a block and access it outside the block.
{
    var b = 30;
}
console.log("Outside block: " + b); 


              // Closure in JavaScript

//Create a function that returns another function which adds a fixed number to its argument

const num = (x) =>{
    return (y) => {
        return x + y;
    }
}
const z = num(5);
console.log(z(10)); 

//Create a counter function that remembers how many times it was called.

function counter(){
    let count = 0;
  return function (){
        count++;
        return count;
  }
}
const  h = counter();
console.log(h()); 
console.log(h()); 



//Write a function that stores your name and another function that says “Hello” using that name.
function fung() {
    let x = "Daim Ali";
    return function() {
        return "Hello " + x;
    }
}
let y = fung();
console.log(y());


//Make a function that stores a secret word and another function that shows it only when asked.

function fax() {
    let x = "Secret Message";
    return function() {
        return x;
        }
}
let faxx = fax();
console.log(faxx()); 
*/

//Create a calculator function that returns add, subtract, multiply, and divide functions
//  using the same number.

function Calculator() {
    let x = 5;
    let y = 10;
    return {
        add: function() {
            return x + y;
        },
        subtract: function() {
            return x - y;
        },
        multiply: function() {
            return x * y;
        },
        divide: function() {
            return x / y;
        }
    };  
}
let cal = Calculator();
console.log(cal.add());        
console.log(cal.subtract());   
console.log(cal.multiply());   
console.log(cal.divide());                

