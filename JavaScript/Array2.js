// let num = [1, 2, 3, 4, 5];

// num.push(6, 7, 8);
// console.log(num); // add elements at the end
// num.pop();
// console.log(num); // removes last element
// num.shift();
// console.log(num); // removes first element
// num.unshift(0);
// console.log(num); // adds element at the beginning


// let heros = ['spiderman', 'ironman', 'thor', 'hulk', 'captain america', 'black panther', 'doctor strange', 'black widow', 'scarlet witch', 'vision'];

// console.log(heros);
// console.log(heros.slice(2, 5)); // 2 se 5 tak print kare ga no change in original array
// console.log(heros.splice(2, 3, 'antman', 'wasp')); // 2 se 3 tak remove kare ga aur uski jagah antman aur wasp add kare ga change in original array
// heros.splice(3,1); // 3 se 1 element remove kare ga change in original array
// console.log(heros);


//Practice Problems on  Arrays

let companies = ['Bloomberg' ,'Microsoft','Uber','Google', 'Apple', 'Netflix'];
companies.shift();
// console.log(companies);
companies.splice(1, 1, 'OLA');
// console.log(companies);
companies.push('Tesla');
console.log(companies);
