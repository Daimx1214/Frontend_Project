// function myFun(){
//     console.log("Hello Pookies!");
//     console.log("We are learning JS");
// }
// myFun();

// // Function with parameters
// function add(a, b){
//     sum = a + b;
//     return sum;
// }
// console.log(add(5, 10));


// //Arrow Function
// const arrFun = (a, b) => {
//     return a * b;
// }
// console.log(arrFun(20, 30));


// Write a function that takes a string as input and returns the number of vowels in the string.
function countVowel(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            count++;
        } 
    }
    return count; 
}

console.log(countVowel("Daim Ali"));



// Same function using Arrow Function
let countVowels = (num) => {
    let count = 0;
    for (let str of num){
        if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' || str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U'){
            count++;
        } 
    }
    return count;
}

console.log(countVowels("Daim Ali"));


