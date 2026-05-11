    // game user guess the correct number
    // let num = 10;
    // let guess = prompt("Guess the number between 1 to 20");
    // while(guess != num){
    // guess = prompt("You guessed wrong, try again!");
    // }
    // console.log("You guessed the correct number"); 




// let template = `This is template literal
// with multiple lines
// and embedded expressions: ${2 + 2}`; 
// // console.log(template);  // hum template literal ko multiple lines me b likh skte ha easier then normal string 
//   //  ${2 + 2} this is called embedded expression or string interpolation



// let str = "   Hello World";
// let str2 = 'WORLD';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());      
// console.log(str.trim()); //  removes whitespace from both ends of a string
// console.log(str.charAt(6)); // returns the character at the specified index
// console.log(str.indexOf("o")); // 4
// console.log(str.lastIndexOf("o")); // 7
// console.log(str.slice(3, 8)); // 3 se 8 tak print kare ga
// console.log(str.replace("World", "Daim")); // replaces first match
// console.log(str.replaceAll("l", "x")); // replaces all matches
// console.log(str.repeat(3)); // repeats the string 3 times
// console.log(str.concat(str2)); // concatenates the string with another string



//generate the username from name
let nam = "DaimALi";
let length = nam.length;
// console.log(nam);
// console.log(length);
let tem = `Your Username is @${nam.concat(length)}`;
// console.log(tem);