// let  arr = [1, 2, 3, 4, 5];
// console.log(arr); 
// arr.push(6);
// console.log(arr); 
// console.log(arr.length);
// console.log(arr[2]); // Accessing the third element (index 2)
// arr[2] = 10;
// console.log(arr);


let heros = ['spiderman', 'ironman', 'thor', 'hulk', 'captain america', 'black panther', 'doctor strange', 'black widow', 'scarlet witch', 'vision'];

// for(let i = 0; i < heros.length; i++){
//     console.log(heros[i]);
// }

//using for-of loop
// for(let hero of heros){
//     console.log(hero);
// }



let marks = [85, 90, 78, 92, 88];
let sum = 0;
for(let mark of marks){
    sum += mark;
}
//     let avg = sum / marks.length;
// console.log(`Average marks is: ${avg}`);


//item having 10% off
let prices = [100, 200, 300, 400, 500];
for(let i = 0; i < prices.length; i++){
    let value = prices[i]/10;
    prices[i] = prices[i] - value;
    // console.log(`Price after 10% off is: ${prices[i]}`);
}


let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
fruits.push('kiwi', 'pineapple', 'strawberry');
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log(fruits);

// fruits.pop();
// console.log(fruits);
// console.log(fruits.toString());
let all = fruits.concat(vegetables);
console.log(all);