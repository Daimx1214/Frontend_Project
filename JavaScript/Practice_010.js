// Create an object named car with properties brand, model, and a method start() that prints “Car is starting...”.
// let car = {
//     name: "Supra",
//     brand: "Toyota",
//     start: function () {
//         console.log("Car is starting...");
//     }
// }
// car.start();
// console.log(car);


// Create an object student with properties name and marks.Print both values using dot notation and bracket notation.
// let student = {
//     name: "Daim Ali",
//     marks: 100
// }
// Dot notation
// console.log("Name: ",student.name);
// console.log("Marks: ",student.marks);
// // Using bracket notation
// console.log("Name:", student["name"]);
// console.log("Marks:", student["marks"]);


// Start with an empty object user.
// Add name and email properties after creation, then delete the email property.

// let user = {};

// user.name = "Zulqrnain ALi";
// user.email = "zul@mycrosysX";
// console.log("Before removing: ", user);
// delete user.email;
// console.log("After removing email:", user);


// Make a constructor function Book(title, author). Create two book objects and print their titles.
// function Book(title, author) {
//     this.title = title,
//         this.author = author;
// }
// let obj1 = new Book("OhhYess", "Munni")
// let obj2 = new Book("OhhNO", "Munna")

// console.log("Obj1 Title: ", obj1.title);
// console.log("Obj2 Title: ",  obj2.title);


// Modify your Book constructor so it includes a method getDetails() that prints “Title by Author”.
// function Book(title, author) {
//     this.title = title;
//     this.author = author;

//     this.getDetails = function() {
//         console.log(this.title + " by " + this.author);
//     };
// }
// let book1 = new Book("OhhYess", "Munni");
// let book2 = new Book("OhhNO", "Munna");

// book1.getDetails(); 
// book2.getDetails();

// Create a Person constructor that sets name and age. Add a method intro() which logs this.name and this.age. Create two different persons and call their intro() methods.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.intro = function () {
//         console.log("Hello, My name is " + this.name + " and my age is " + this.age)
//     }
// }

// let p1 = new Person("Daim", 15);
// let p2 = new Person("Ali", 20);

// p1.intro();
// p2.intro();

// Convert your Person constructor into a Person class using the class keyword and constructor() method.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     display() {
//         console.log("Name: ", this.name)
//         console.log("Age: ", this.age)
//     }
// }
// let c1 = new Person("Daim", 22);
// let c2 = new Person("Ali", 25);

// c1.display();
// c2.display();


// Create a class Circle that has a radius property and a method getArea() which returns area of the circle (πr²).
// class Circle{
//     constructor(radius){
// this.radius = radius;
//     }
//     getArea(){
//         console.log("Radius: " , this.radius);
//         console.log("Area of circle is =", 3.14 * this.radius * this.radius);
//     }
// }
// let circle = new Circle(2);

// circle.getArea();

// Use your Circle class to make two circles of radius 3 and 5.
// Print their areas separately.
// class Circle{
//     constructor(radius){
// this.radius = radius;
//     }
//     getArea(){
//         console.log("Radius: " , this.radius);
//         console.log("Area of circle is =", 3.14 * this.radius * this.radius);
//     }
// }
// let circle = new Circle(3);
// let circle2 = new Circle(5);

// circle.getArea();
// circle2.getArea();




// Write one example of each (object literal, constructor function, class)
// and explain in comments how they differ.

let obj = {
    name: "Haider",
    age: 21,
    student: function () {
        console.log("Hello, I'm " + this.name + " and my age is " + this.age)
    }
}

console.log(obj.name);
console.log(obj.age);
obj.student();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.display = function(){
        console.log("Hello, I'm " + this.name + " and my age is " + this.age)
    }
}
let c1 = new Person("Daim", 22);
let c2 = new Person("Ali", 25);

c1.display();
c2.display();

class Circle{
    constructor(radius){
this.radius = radius;
    }
    getArea(){
        console.log("Radius: " , this.radius);
        console.log("Area of circle is =", 3.14 * this.radius * this.radius);
    }
}
let circle = new Circle(3);
let circle2 = new Circle(5);

circle.getArea();
circle2.getArea();
