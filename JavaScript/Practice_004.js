// 1️⃣ Write a function that returns the square of a number.
// function sqrt(){
//     let x = 5;
//     return x * x;
// }

// console.log(sqrt())


// 2️⃣ Create a function that prints all even numbers from 1 to 20.
// function even(){
//     for(let y = 1; y <= 20; y++){
//         if(y%2==0){
//             console.log(`${y} is even`)
//         }
//     }
// }

// even()



// 3️⃣ Write a function that takes two numbers and returns the greater one.
// function greater(){
//     let a = 20;
//     let b = 30;
//     if(a>b){
//         console.log("A is greatest")
//     }
//     else{
//         console.log("B is greatest")
//     }
// }
// greater()


// 4️⃣ Make a function that reverses a string.
// function reverse(){
//     let str = "Daim"
//     let rev = "";
//     for(let i of str){
//         rev = i + rev;
//     }
//     console.log(rev)
// }
// reverse()

// 5️⃣ Write a function that counts how many words are in a sentence.
// let sen = "A quick brown fox jumps over the lazy dog"
// function word(){
//     let count = 0;
//     for(let i = 0; i< sen.length; i++){
//         count++
//     }
//     console.log(count)
// }
// word()

// 6️⃣ Create a function that takes an array and returns the sum of all elements.
// let arr = [10,20,30,40,50]
// function summ(){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
// }
// summ()


// 7️⃣ Make a function that converts Celsius to Fahrenheit.
// function temp(cel){
//     let far = (cel * 9/5 ) + 32;
//     console.log(`${cel}°C = ${far}°F`);

// }
// temp(37)


// 8️⃣ Write a function that checks if a given number is prime.
// function check(num) {
//     if (num <= 1) {
//         console.log(`${num} is not a prime number`);
//         return;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             console.log(`${num} is not a prime number`);
//             return;
//         }
//     }

//     console.log(`${num} is a prime number`);
// }

// check(7); 
// check(27); 


// 9️⃣ Create a function that prints the multiplication table of a given number.
// function table(num){
//     for(let i = 1 ; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num *i}`);
//     }
// }
// table(5)


// 🔟 Write a function that capitalizes the first letter of each word in a string.



// 11️⃣ Write a function that removes duplicates from an array.
// function duplicates(arr){
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (var j = 0; j < i; j++) {
//     if (arr[i] == arr[j]) {
//       break; 
//     }
//   } 
//   if (i == j) {
//     console.log(arr[i]); 
//     count++;
//   }
// }
// console.log("Total unique elements:", count);
// }

// duplicates([1,2,3,4,5,2,7,8,3,5,9])

// 12️⃣ Create a function that finds the factorial of a number.
// function factorial(fact){
//     let num = 1;
//     for(let i =1; i <= fact; i++){
//         num = num * i;
//     }
//     console.log(num)

// }
// factorial(5)


// 13️⃣ Write a function that checks whether a given year is a leap year.
// function year(leap){
//     if(leap % 4 == 0 && leap / 100 && leap / 4){
//             console.log(leap,"is leap Year")
//     }
// }
// year(2003)
// year(2004)


// 14️⃣ Make a function that returns the largest number in an array.
// function largest(num , num2 , num3){
//           if(num > num2 && num > num3){
//             console.log("Number 1 is greater")
//           }
//           else if(num2 > num && num2 > num3){
//             console.log("Number 2 is greater")
//           }
//           else{
//             console.log("Number 3 is greater")
//           }
// }
// largest(2,3,4)
// largest(5,3,4)

// 15️⃣ Write a function that converts a sentence into title case. // same as program uppercase frst word wala

// 16️⃣ Create a function that counts vowels in a string.
// function vowels(str){
//     let count = 0;
//     for(let i = 0; i< str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
//             count++;
//         }
//     }
//     console.log("Total Vowel:",count)
// }
// vowels("A quick Brown Fox Jumps Over The Lazy Dog")

           //or
// function vowel(str){
//   let count = 0;
//   for(let i=0; i<str.length; i++){
//     if("aeiouAEIOU".includes(str[i])) count++;
//   }
//   console.log(count);
// }
// vowel("A quick Brown Fox Jumps Over The Lazy Dog")

// 17️⃣ Write a function that finds the average of 5 numbers.
// function average(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     let avg = sum / arr.length;
//     console.log("Average is: ",avg)

// }

// average([10,20,30,40,50])


// 18️⃣ Make a function that joins two arrays and removes duplicates.

// ya nhii hoa abhii tk
// function duplicates(arr1,arr2){
// let result = arr1.concat(arr2);

//     for(let i =0; i< result.length; i++){
//         if(arr1[i] != arr2[i]){
//             console.log(result[i]); 
//         }
//     }
// }

// duplicates([1,2,3],[4,5,6,3])

// function duplicates(arr1, arr2) {
//   let result = arr1.concat(arr2);   // remove duplicates using Set
//   let uniqueResult = [...new Set(result)];

//   console.log(uniqueResult);
// }

// duplicates([1, 2, 3], [4, 5, 6, 3]);



// 19️⃣ Write a function that returns the reverse of a number (e.g., 123 → 321).
// function reverse(rev){
//     let result = ""
//     for(let i = rev.length - 1; i >= 0; i--){
//         result = result + rev[i]
//     }
//     return result;
// }
// console.log("Reverse:",reverse("1223"))


// 20️⃣ Create a function that checks if a string is a palindrome.
// function Palindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     if (str === reversed) {
//         console.log("Yes, it's a palindrome!");
//     } else {
//         console.log("No, it's not a palindrome.");
//     }
// }

// Palindrome("madam");
// Palindrome("hello");  


// Create an arrow function that takes two numbers and returns their difference.
// let subtract = (a , b) =>{
//     return a - b;
// }
// console.log(subtract(10,5));

// Write an arrow function that checks whether a number is even or odd.
// let number = (num) => {
//     if(num % 2 == 0){
//         console.log("EVEN");
//     }
//     else {
//         console.log("ODD");
     
//     }
// }

// number(6)
// number(5)

// Make an arrow function that takes an array of numbers and prints only numbers greater than 50.
// let number = (arr) => {
//     for(let i =0;i< arr.length; i++){  
//         if(arr[i] > 50){          
//             console.log(arr[i]);
//         }
//     }
// }

// number([10,20,30,40,50,60,70,80,90])


// Use an arrow function to find the smallest number in an array.
// let number = (arr) => {
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){ 
//         for(let j = i+1; j < arr.length; j++){ 
//             if(arr[j] < min ){ 
//                 min = arr[j];
//             }
//         }
//     }
//     console.log(min)
// }      
// number([10,20,30,40,50,60,70,5,80,90])



// Write an arrow function that counts how many positive numbers are in an array.
// let fung = (arr) => {
//     let Count = 0;
//     for(let i = 0; i < arr.length; i++){ 
//         if(arr[i] > 0){
//             Count++;
//         }
//     }
//     console.log(Count)

// }
// fung([1,2,3,-5,-9,43,-90,-58,92,69])




// Write a function calculate(a, b, callback) that performs a callback operation like addition or subtraction.
// function calculate(a, b, callback) {
//     console.log("Operations Performed:");
//     callback(a,b);
// }

// function operation(a,b){
//     let c = a+b;
//     console.log("Sum = ",c);
//     let d = a-b;
//     console.log("Difference = ", d)
// }
// calculate(10,5,operation)




// Create a function loopArray(arr, callback) that runs a callback on each element of an array.
// function loopArray(arr, callback){
//       for (let i = 0; i < arr.length; i++) {
//           callback(arr[i])
//       }
// }

// function element(arr){
//     console.log("callback running in...",arr)
// }
// loopArray([1,2,4],element);


// Make a function filterEven(arr, callback) that uses a callback to print even numbers only.

// function filterEven(arr, callback){
//     callback(arr)
// }

// function even(arr){
//       for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 ==0){
//             console.log(arr[i],"is Even");
//         }
//     }
// }

// filterEven([1,2,3,4,5],even)

// Write a function checkCondition(num, callback) that runs the callback if the number is greater than 10.
// function checkCondition(num, callback){
//     callback(num)
// }

// function number(arr){
//       for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 10){
//             console.log(arr[i],"is greater then 10")
//         }
//     }
// }
// checkCondition([1,2,53,7,34,43,12,11,3,67,64,0],number)


// Create a function processNumbers(arr, callback) that applies a callback to each number and prints the result.

// function processNumbers(arr, callback){
//     callback(arr);

// }

// function result(res){
//     for (let i = 0; i < res.length; i++) {    
//         let x = res[i] * 2;
//             console.log("Callback is Called...", x );
//     }
// }

// processNumbers([1,2,53,7,34,43,12,11,3,67,64,0],result)

