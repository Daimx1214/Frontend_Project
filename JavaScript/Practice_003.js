
// let fruits = ["apple", "banana", "grape", "mango"];
// for (let fruit in fruits) {
//   console.log("At index",fruit,"value =" ,fruits[fruit] );
// }

// let x = ["apple", "banana", "grape", "mango"];

// x.forEach(function(value, index) {
//   console.log("At index", index, "value =", value);
// });



// 1️⃣ Print all elements of an array in reverse order.
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }


// 2️⃣ Print each character of a string on a new line.
// let naam = 'Daim-ALi';
// for(let x of naam){
//     console.log(x)
// }


// 3️⃣ Display only even numbers from an array of integers.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for(let i = 0; i < arr.length; i++){
//     if(i%2 == 1){
//         console.log(`${arr[i]} is an Even Number`);
//     }
//     else{
//         console.log(`${arr[i]} is an Odd Number`);
//     }
// }


// 4️⃣ Print both the index and the value of an array.
// let key = [10, 20, 30, 40, 50];
// for (let n in key) {
//   console.log("At index",n ,"value =" ,key[n] );
// }


// 5️⃣ Loop through an object and print its keys and values.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for(let val in obj){
//     console.log(`The keys are ${val} and their values are ${obj[val]}`)
// }


// 6️⃣ Print numbers from 10 down to 1.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Reversing:")
// for(let i = arr.length-1; i >= 0 ; i--){
//     console.log(arr[i])
// }


// 7️⃣ Display the sum of all elements in an array.
// let aray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let i = 0; i < aray.length ; i++){
//     sum = sum + aray[i];
// }
// console.log("Sum: =",sum)


// 8️⃣ Print only unique elements from an array (skip duplicates).
// let ele = [1,2,2,3,4,4,5,5,6,7,8,8,3];
// let count = 0;
// for (let i = 0; i < ele.length; i++) {
//   for (var j = 0; j < i; j++) {
//     if (ele[i] == ele[j]) {
//       break; 
//     }
//   }
//   if (i == j) {
//     console.log(ele[i]); 
//     count++;
//   }
// }
// console.log("Total unique elements:", count);


// 9️⃣ Loop through a string and print its length without using .length.
// let ele = [1,2,2,3,4,4,5,5,6,7,8,8,3];
// let count = 0;
// for(let i in ele){
//     count++;
// }
// console.log(count);


// 🔟 Print all property names from an object where the value is greater than 10.
// let obj = {
//     2: 50,
//     3: 5,
//     4: 19,
//     1: 10,
//     5: 98
// }
// for (let key in obj) {
//   if (obj[key] > 10) {
//     console.log("At index",key,"value =" ,obj[key] );
//   }
// }



// Print every 2nd element from an array (like step = 2).
// let ele = [1,2,2,3,4,4,5,5,6,7,8,8,3];
// for(let i= 0; i< ele.length; i++){
//         console.log(ele[i]);
//         i++;
// }

// ⿡⿢ Loop through a nested array and print all values inside.
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// Keep printing “Running...” until a counter reaches 5.
// let n = 5;
// for(let i = 0; i< n; i++){
//         console.log("Running...");
// }

// ⿡⿤ Print each character of a word but skip vowels.
// let charr = "JavaScript";
// for(let i of charr){
//         if(i != 'a' && i != 'e' && i !=  'o' && i !=  'i' && i !=  'u' && i !=  'A' && i !=  'E' && i !=  'I' && i != 'O' && i !=  'U'){
//                 console.log(i)
//         }
// }


// Print the square of each number in an array.
// let arr = [1,2,3,4,5,6,7]
// for(let i = 0; i<arr.length; i++){
//         console.log(arr[i] * arr[i])
// }
 
// Loop through an array and stop when the value equals 50.
// let arr = [10,20,30,40,50,60,70]
// for(let i = 0; i<arr.length; i++){
//         if(arr[i] == 50){
//                 break;
//         }
//         console.log(arr[i]);
// }

// Print all keys of an object as uppercase.
// let obj = {
//         name : 'Daim',
//         age : 19,
//         section : 'A'
// }
// for(let key in obj){  
//         console.log(key.toUpperCase())
// }

// ⿡⿨ Print the first and last character of a string.
// let str = 'Daim ALi';
//         console.log(`First Index of string is ${str[0]}`)
//         console.log(`Last Index of string is ${str[str.length - 1]}`)



// ⿡⿩ Display numbers from 1 to 5 using a loop that runs at least once even if the condition is false.
// let a = 1;
// let b = 5
// do{
//                 console.log("One Time!")
// }
// while(a>b)

// ⿢⿠ Print each element of an array and its double.
// let arr = [1,2,3,4,5]
// console.log("Array: ")
// for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
// }
// console.log("Double Array: ")
// for(let i=0; i<arr.length; i++){
//         console.log(arr[i] * 2)
// }


//  Loop through an array and count how many items greater than 1000.
// let arr = [200,400,600,800,1000,1200,1400,2000]
// let count = 0;
// for(let i=0; i<arr.length; i++){
//         if(arr[i]>1000){
//                 count++;
//         }
// }
// console.log(count);


// ⿢⿢ Loop through an object and print only string-type values.
// let obj = {
//         naam : 'Daim',
//         age: 12,
//         color: 'White'
// };
// for(let key in obj){
// if(typeof obj[key]==='string'){
//         console.log(obj[key]);
//     }
// }

// ⿢⿣ Display each item in an array along with its position (like “At index 2 → banana”).
// let arr = ["apple", "banana", "Grapes", "Kela", "Anaar" ]
// for(let i in arr ){
//         console.log(`The keys are ${i} and their values are ${arr[i]}`)
// }

// ⿢⿤ Iterate through the word “JavaScript” and print only consonants.
// let char = "JavaScript";
// for(let i of char){
//         if(i != 'a' && i != 'e' && i !=  'o' && i !=  'i' && i !=  'u' && i !=  'A' && i !=  'E' && i !=  'I' && i != 'O' && i !=  'U'){
//                 console.log(i)
//         }
// }



// ⿢⿥ Print the multiplication table of 5 using a loop.
// let  x = 5;
// for(let i = 1; i <= 10; i++){
//         console.log(`${x} * ${i} = ${x*i}`)
// }


// ⿢⿦ Print array elements until you find the number 0.
// let arr = [10,12,38,41,50,0,1,2]
// for(let i = 0; i<arr.length; i++){
//         if(arr[i]==0){
//                 break;
//         }
//     console.log(arr[i])

// }


// ⿢⿧ Print elements of an array but skip negative numbers.
// let arr = [10,-12,38,-41,50,0,-1,2]
// for(let i = 0; i<arr.length; i++){
//         if(arr[i]>=0){
//                 console.log(arr[i])
//         }
// }


// ⿢⿨ Print “odd” or “even” for each number in an array.
// let arr = [10,11,38,41,50,0,1,2]
// for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2 == 0){
//                 console.log(`${arr[i]} is Even`)
//         }
//         else{
//                 console.log(`${arr[i]} is Odd`)
//         }
// }


// ⿣⿠ Loop through an array and print total, then print the average
// let arr = [10,11,38,41,50,0,1,2]
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
// }
// let avg = sum / arr.length;
// console.log(`The sum is = ${sum}`)
// console.log(`The Average is = ${avg}`)


// const nums = [1, 2, 3];
// nums.forEach(num => 
//     console.log(num * 2));

    // Write a program to find the cube of each number in an array using forEach().

    // let numb  = [1,2,3];
    // numb.forEach(num =>
    //     console.log(Math.pow(num , 3))
    // )

    // 👉 Use forEach() to print only those numbers that are greater than 50 from a given array.
    // let arr = [1,7,9,90,45,75,84,93,50,59]
    // arr.forEach(arra => {
    //         if(arra > 50){
    //              console.log(arra)
    //         }
    //     })

// Given an array of city names, use forEach() to print each city name with its length.
// let arr = ["Multan" , "Lahore", "Karachi"]
// arr.forEach(aray => {
//     let count = 0;
//     for(let i  =0; i < aray.length; i++){

//         count++;
//     }
//     console.log(aray , count)
// })

// 👉 Given an array of objects with name and age, use forEach() to print only the names of people older than 18.

// let obj = [
//     { name : "YEs" , age : 10},
//     {name : "NO" , age : 19},
//     {name : "GOod" , age : 1},
//     {name : "Bad" , age : 40}
// ];

// obj.forEach(ele => {
//     if(ele.age > 18){
//         console.log(ele.name);

//     }
// });


// 👉 Use forEach() to calculate and print the total price from an array of product prices.
// let price = [10,20,30,40]
// let sum = 0;
//     price.forEach(ele => { 
//         sum = sum + ele;
//     }   
// );
// console.log(sum)

