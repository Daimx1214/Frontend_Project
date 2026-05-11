// class Car {
//     start() {
//         console.log("Start");
//     }
//     end() {
//         console.log("End");
//     }
//     brand(brandname) {
//         this.brand = brandname
//         console.log("Brand name", this.brand)
//     }
// }

// let obj = new Car();
// obj.brand("Lexus");

// let obj2 = new Car();
// obj2.brand("Fortuner");


//Constructor

// class Car {         
//     constructor(brandname){
//         this.brand = brandname; // property name: brand
//     }
// }

// let obj = new Car("Lexus");
// console.log(obj.brand);

// let obj2 = new Car(); // by default uper wala hi aiya ga 
// console.log(obj.brand);


//Inheritance

// class Parent {
//     Name() {
//         console.log("Daim ALi");
//     }

//     Age() {
//         console.log("12");
//     }
// }
// class Child extends Parent {
//     Address() {
//         console.log("New town");
//     }
//     Gmail() {
//         console.log("daimx1214");
//     }
// }

// let obj = new Child(); // create instance
// obj.Name()
// obj.Age()
// obj.Address()
// obj.Gmail()


// Super Keyword

class Parent {
    constructor(specie) {
        console.log("Parent Constructor");
        this.specie = specie;
    }
}

class Child extends Parent {
    constructor(brand) {
        console.log("Child Constructor Start");
        super("Human");  // parent constructor call 
        this.brand = brand;
        console.log("Child Constructor Ends");
    }
}

let Obj = new Child("Toyota");

console.log("Brand:", Obj.brand);   
console.log("Specie:", Obj.specie); 
