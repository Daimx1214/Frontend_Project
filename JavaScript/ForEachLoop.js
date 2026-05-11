// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function fung(num, index){
//     console.log(`Index is ${index} and value is ${num}`);
// });

// Using Arrow Function
// arr.forEach((num, index) => {
//     console.log(`Index is ${index} and value is ${num}`);
// });

// Sum of all elements in an array
// let array = [1, 2, 3, 4, 5];
// array.forEach(function sum(num){
//     total = 0;
//     total += num;
//     console.log(total);
// });


// // Using Arrow Function
// array.forEach((num) => {
//     total = 0;   
//     total += num;
//     console.log(total);
// });


// arr = [1, 2, 3, 4, 5];
// arr.forEach(num =>{
//     console.log(num * num);
// });


// arr = [1, 2, 3, 4, 5];
// let x = arr.map(num =>{
//     return num * num;
// });
// console.log(x);
// console.log(arr); // original array is not changed


// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let y = arr.filter(num =>{
//     return num %2 == 0;
// });
// console.log(y);

// //reduce
// arr = [1, 2, 3, 4, 5];
// let z = arr.reduce((a, b) =>{
//     return a + b; // a=1, b=2 then a=3, b=3 then a=6, b=4 then a=10, b=5 then a=15
// });
// console.log(z);


// arr = [1, 2, 43, 41,46, 3, 4, 5];
// let e = arr.reduce((a, b) =>{
//     return a > b ? a : b ; // a=1, b=2 then a=2, b=3 then a=3, b=4 then a=4, b=5 then a=5
// });
// console.log(e);

              //PRACTICE PROBLEMS

arr = [54,67,89,23,45,12,90,97,92,34,100];
let filterArr = arr.filter(num =>{
    return num > 90;
});
console.log(filterArr);



arr = [1, 2, 3, 4, 5];
let Fact = arr.reduce((a, b) =>{
    return a * b; // a=1, b=2 then a=2, b=3 then a=6, b=4 then a=24, b=5 then a=120
    
});
console.log(Fact);  
