// Constructor & Properties
// Ek Book class banaye jo title aur author properties ke saath constructor use kare. Phir ek object create karke dono properties print karein.
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     Show() {
//         console.log("Title: ", this.title)
//         console.log("Author: ", this.author)
//     }
// }
// let obj = new Book("LetusC", "Daim ALi")
// obj.Show();

// Inheritance & Constructor
// Employee class banaye name aur salary ke saath. Fir Manager class inherit kare aur department property add kare. Manager ka object create karke saari properties print karein.
// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
// }
// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary)
//         this.department = department;
//     }
//     show() {
//         console.log("Name: ", this.name)
//         console.log("Salary: ", this.salary)
//         console.log("Department: ", this.department)
//     }
// }

// let m1 = new Manager("Prof.Daim ALi", 20.99, "Civil Engineer")
// m1.show();

// Method Overriding
// Animal class me sound() method ho jo "Some sound" print kare. Fir Dog class me sound() override karke "Bark" print kare. Dog ka object create karke method call karein.
// class Animal {
//     sound() {
//         console.log("Some Sound");
//     }
// }
// class Dog extends Animal {
//     sound() {
//         console.log("Bark")
//     }
// }

// let d1 = new Dog();
// d1.sound();


// Super in Constructor
// Person class me name aur age ho. Student class me grade add kare aur super() use kar ke parent properties initialize kare. Object create karke sab properties print karein.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age)
//         this.grade = grade;
//     }
//     print() {
//         console.log("Name: ", this.name)
//         console.log("Age: ", this.age)
//         console.log("Grade: ", this.grade)
//     }
// }

// let s1 = new Student("Humais", 12, "3rd year");
// s1.print();


// Super in Method
// Vehicle class me start() method ho jo "Vehicle started" print kare. Car class me start() override kare aur parent method ko super.start() se call kare aur "Car ready" print kare. Object create karke method call karein.
// class Vehicle {
//     start() {
//         console.log("Vehicle started");
//     }
// }
// class Car extends Vehicle {
//     start() {
//         super.start();
//         console.log("Car ready");
//     }
// }
// let c1 = new Car();
// c1.start();



// Multiple Overriding
// Ek Shape class me area() method ho jo "Area not defined" print kare. Circle aur Rectangle class me area() override karke sahi calculation print kare. Objects create karke call karein.

// class Shape {
//     area() {
//         console.log("Area not defined")
//     }
// }
// class Circle extends Shape {
//     area(radius) {
//         console.log("Area of circle = ", 3.14 * radius * radius)
//     }
// }

// class Rectangle extends Shape {
//     area(length, width) {
//         console.log("Area of Rectangle = ", length * width)
//     }
// }

// let sh1 = new Shape()
// sh1.area()
// let cr1 = new Circle()
// cr1.area(2)
// let r1 = new Rectangle()
// r1.area(5, 6);



// Inheritance Chain
// Person → Employee → Manager ka chain create karein. Har class me constructor ho aur super() use kare. Manager ka object create karke name, salary aur department print karein.

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }
// }
// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary)
//         this.department = department;
//     }
//     show() {
//         console.log("Name", this.name)
//         console.log("Salary", this.salary)
//         console.log("Department", this.department)
//     }
// }

// let man1 = new Manager("Prof. Daim Ali", 20.99, "Civil Engineering");
// man1.show();




// Overriding with Parameters
// Printer class me print(text) method ho jo "Printing: text" print kare. ColorPrinter class me method override karke "Printing in color: text" print kare. Object create karke method call karein.

// class Printer{
//     print(text){
//         console.log("Printing:",text)
//     }
// }
// class ColorPrinter extends Printer{
//     print(text){
//         super.print(text)
//         console.log("Printing in color:",text)
//     }
// }

// let Cp1 = new ColorPrinter();
// Cp1.print("Text")



// Calling Parent Method from Child Computer class me boot() method "Booting..." print kare. Laptop class me boot() override kare aur "Laptop booting" print karne ke sath parent method bhi call kare. Object create karke method call karein.

class Computer {
    boot() {
        console.log("Booting...")
    }
}
class Leptop extends Computer {
    boot() {
        super.boot();
        console.log("Laptop booting")
    }
}
let L1 = new Leptop();
L1.boot();


// Ek base class Account banaye. SavingsAccount aur CurrentAccount inherit kare. Har class ka getBalance() method ho. SavingsAccount override kare aur interest add kare, CurrentAccount override kare aur overdraft limit add kare. Object create karke balance print karein.

class Account {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        console.log("This is Account Manager here", this.balance)
    }
}

class SavingsAccount extends Account {
    getBalance() {
        let interest = this.balance * 0.1;
        console.log("Savings Account Balance:", this.balance + interest);

    }
}

class CurrentAccount extends Account {
    getBalance() {
        let overdraftLimit = 500;
        console.log("Current Account Balance:", this.balance + overdraftLimit);
    }
}
let s1 = new SavingsAccount(1000);
s1.getBalance();

let c1 = new CurrentAccount(1000);
c1.getBalance();