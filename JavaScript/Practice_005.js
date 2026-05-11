// 1️⃣ Write a program using map() to square every element in an array.
// 👉 Input: [2, 3, 4, 5] → Output: [4, 9, 16, 25]

// let numbers = [2,3,4,5]
// let doubled = numbers.map(num => num * 2)

// console.log("Original Array:", numbers);
// console.log("Doubled Array:", doubled);


// 2️⃣ Use map() to convert Celsius values to Fahrenheit.
// 👉 Formula: F = C * 9/5 + 32

// let Cel = [0,10,20,30];
// let F = Cel.map(num => num *  9/5 + 32);

// console.log("Original Celsius:", Cel);
// console.log("Changed Fahrenheit:", F);


// 3️⃣ Given an array of names, use map() to add “Hello” before each name.
// 👉 Input: ["Ali", "Sara"] → Output: ["Hello Ali", "Hello Sara"]

// let input = ["Ali", "Sara"]
// let output = input.map(num => "Hello " + num )

// console.log(input)
// console.log(output)



// 4️⃣ Create a program that takes an array of numbers and returns their cubes using map().
// 👉 Input: [1, 2, 3] → Output: [1, 8, 27]
// let numbers = [1,2,3]
// let doubled = numbers.map(num => num ** 3)   //  ** is used for power

// console.log("Original Array:", numbers);
// console.log("Doubled Array:", doubled);



// 5️⃣ Write a program using map() to replace all negative numbers with 0.
// 👉 Input: [3, -1, 7, -4] → Output: [3, 0, 7, 0]
//  let Input = [3, -1, 7, -4]
//  let output = Input.map(num => {
//     if(num < 0){
//        return 0;
//     }
//     else{
//         return num;
//     }
// })

// console.log(Input)
// console.log(output)


// 6️⃣ Write a program using filter() to keep only even numbers from an array.
// 👉 Input: [1, 2, 3, 4, 5, 6] → Output: [2, 4, 6]
// let Input = [1, 2, 3, 4, 5, 6] 
// let output = Input.filter(num => {
//     if(num % 2 == 0){
//         return num;
//     }
// });

// console.log("Before: ",Input)
// console.log("After:  ",output)


// 7️⃣ Use filter() to keep only numbers greater than 50.
// 👉 Input: [10, 60, 90, 40, 100] → Output: [60, 90, 100]
// let Input = [10, 60, 90, 40, 100]
// let output = Input.filter(num => {
//     if(num > 50){
//         return num;
//     }
// });

// console.log("Before: ",Input)
// console.log("After:  ",output)


// 8️⃣ You are given an array of objects:
// [{name: "Ali", age: 17}, {name: "Sara", age: 21}, {name: "Umar", age: 15}]
// Use filter() to get only people older than 18.

// let before = [{name: "Ali", age: 17}, {name: "Sara", age: 21}, {name: "Umar", age: 15}]
// let after = before.filter(num => {
//     if(num.age > 18){
//         return num;
//     }
// });

// console.log("Before: ",before)
// console.log("After:  ",after)


// 9️⃣ Write a program that filters out negative numbers from an array.
// 👉 Input: [10, -3, 4, -7, 9] → Output: [10, 4, 9]
//  let Input = [10, -3, 4, -7, 9]
//  let output = Input.filter(num => {
//     if(num > 0){
//        return num;
//     }
// })

// console.log(Input)
// console.log(output)



// 🔟 Use filter() to get words with more than 4 letters.
// 👉 Input: ["sun", "planet", "sky", "earth"] → Output: ["planet", "earth"]
// let input = ["sun", "planet", "sky", "earth"]
// let output = input.filter(num => {
//     for(let i = 0; i < num.length; i++){
//         if(num.length > 4){
//             return num
//         }
//     }
// })

// console.log("Before: ",input)
// console.log("After:  ",output)


// 1️⃣1️⃣ Use reduce() to find the sum of all numbers in an array.
// 👉 Input: [5, 10, 15] → Output: 30

// let input = [5, 10, 15];
// let sum = input.reduce((acc, num) => { // 0+5 , 5+10 , 15+15 , 30
//     return acc + num;   
// }, 0); // 0 is initialize kran ha

// console.log("Input:", input);
// console.log("Sum:", sum);




// 1️⃣2️⃣ Use reduce() to find the largest number in an array.
// 👉 Input: [2, 8, 4, 10] → Output: 10
// let Input = [2, 8, 4, 10]
// let largest = Input.reduce((prev ,curr) => {
//     if(prev > curr){
//         curr = prev;
//     }
//     return curr;
// })

// console.log("Input:", Input);
// console.log("Largest:", largest);



// 1️⃣3️⃣ Use reduce() to count how many even numbers are in an array.
// 👉 Input: [1, 2, 3, 4, 6] → Output: 3

// let input = [1, 2, 3, 4, 6]
// let count = input.reduce((acc ,num) => { 
//     if(num % 2 == 0){
//      acc++;   
//     }
//     return acc
// },0); 

// console.log("Input:", input);
// console.log("Count:", count);


// 1️⃣4️⃣ Use setTimeout() to display “Loading...”, and after 2 seconds show "Data Loaded!".
// console.log("Loading...")
// setTimeout(() => {
//     console.log("Data Loaded!")
// },2000)



// 1️⃣5️⃣ Use setTimeout() to print each element of an array with a 1-second delay (one by one).
// 👉 Input: [10, 20, 30]
// 🕐 Output (with 1s gaps):

// let Input = [10, 20, 30];

// Input.forEach((num, index) => {
//     setTimeout(() => {
//         console.log(num);
//     }, index * 1000); // 1s delay per element
// });
