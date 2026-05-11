//Write a program that takes a number (1–7) and prints the corresponding day of the week
//  (1 = Monday, 2 = Tuesday, etc.). Use switch.

let x = 1;

switch(x){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


//Write a program where you input a letter grade (A, B, C, D, F)
//  and it prints a message like "Excellent", "Good", "Average", etc., using switch.

let a = "F";

switch(a){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Failed");
        break;
}


//Take two numbers and an operator (+, -, *, /) and use switch to perform 
// the correct operation and show the result.



let b = 50.5;
let c = 10;

switch("/"){
    case "+":
        console.log("Addition operator: = ", b + c);
        break;
    case "-":
        console.log("Subtraction operator: = ", b - c);
        break;
    case "*":
        console.log("Multiplication operator: = ", b * c);
        break;
    case "/":
        console.log("Division operator: = ", b / c);
        break;
    default:
        console.log("Invalid operator");
        break;
}

//Take a month number (1 to 12) and print its season:
// Winter (Dec, Jan, Feb)
// Spring (Mar, Apr, May)
// Summer (Jun, Jul, Aug)
// Autumn (Sep, Oct, Nov)

let month = "Dec";

switch(month){
    case "Dec":
    case "Jan":
    case "Feb":
        console.log("Winter");
        break;
    case "Mar":
    case "Apr": 
    case "May":
        console.log("Spring");
        break;
    case "june":
    case "Jul":
    case "Aug": 
        console.log("Summer");
        break;
    case "Sep":
    case "Oct":
    case "Nov":
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
        break;
}


//Take a traffic light color (red, yellow, green) as input and print a message like:
// Red = "Stop"
// Yellow = "Wait"
// Green = "Go"

let z = "Green";

switch(z){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Wait");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
        break;
}