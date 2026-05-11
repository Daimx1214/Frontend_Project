// Check if a number is positive, negative, or zero
let x = -10;

if(x>0){
    console.log("x is positive");
}
else if(x<0){
    console.log("x is negative");
}
else{
    console.log("x is zero");
}
console.log();


//Check if a person is eligible to vote (age should be 18 or above).
let y = 18;

if(y >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
console.log();


//Check if a number is even or odd
let z = 7;
if(z % 2 ==0){
    console.log("z is even");
}
else{
    console.log("z is odd");
}
console.log();


//Take a number and check if it’s divisible by 5 and 7 both.

let a = 35;
if(a % 5 == 0 && a % 7 == 0){
    console.log("a is divisible by both 5 and 7");
}
else if(a % 5 ==0){
    console.log("a is divisible by 5");
}
else if(a % 7 ==0){
    console.log("a is divisible by 7");
}
else{
    console.log("a is not divisible by either 5 or 7");
}
console.log();


//Check which of the three numbers is the greatest

let b = 15;
let c = 20;
let d = 25;
if(b > c && b > d){
    console.log("b is greater than c and d");
}
else if(c > b && c > d){
    console.log("c is greater than b and d");
}
else if(d > b && d > c){
    console.log("d is greater than b and c");
}
else{
    console.log("All numbers are equal");
}