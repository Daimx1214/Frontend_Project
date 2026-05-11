//Easy: Ek variable username banao aur usme apna naam store karke print karo.
let username = "Daim Ali";
console.log(username);

// Easy: Do variables a = 5 aur b = 10 banao, unka sum ek naya variable c me save karo.
let a = 5;
let b =10;
let c = a+b;
console.log(c);

//Ek constant variable PI banao value 3.14 ke sath aur usse circle ka area calculate karo (r = 5).
let PI = 3.14;
let radius = 5; 
let area  = PI * radius * radius;
console.log("Area of circle is: ", area);

//Ek variable declare karo bina value ke aur baad me usme koi value assign karo (show karo pehle undefined tha).
let x;
console.log(x); // undefined
x = 20;
console.log(x); // 20

//Hard: Ek variable me string aur number ko add karo, output check karo aur explain karo kyun aisa aya.

let name = 'DAIM_ALI';
let str = 10;
let namestr = name + str;
console.log("Adding String and Number" , name +" "+ str)


//Easy: Ek array banao jisme 5 student names ho aur unhe console pe show karo.


let arr = ['Ali', 'Daim' , 'Humais' , 'Haider', 'Hassan']
console.log("Student Names Array: ");
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

//Medium: Ek object banao jisme name, age, aur isStudent fields ho.
const obj = {
   name: "Daim Ali",
    age: 30,
    isStudent: false
}
console.log("Object: ", obj)

//Medium: Null aur Undefined me farq dikhane wala code likho.

let undef = undefined; 
let nul = null;
console.log("Value of undef is: ", undef);
console.log("Value of nul is: ", nul);

// Hard: typeof NaN ka result kya hoga? aur kyun?

console.log("Type of NaN is: ", typeof NaN); // number
// NaN ka matlab Not a Number hota hai, lekin JavaScript me iska type number hi hota hai kyunki ye ek special numeric value hai jo invalid number operations ke result me aata hai, jaise 0/0 ya kisi string ko number me convert karne ki koshish karna.


//Hard: Ek nested object banao aur uske andar ki value access karo.
const object1 = {
    object2 : {
        name: "Daim Ali",
        age: 30,
        isStudent: false
    }
}
console.log(object1.object2); 


//Ek object banao student jisme name, age aur ek nested object address ho (city, country). City ko access karo.

const student = {
    name : 'Daim ALi',
    age : 10,
    address : {
        city : 'Multan',
        country : 'Pakistan'
    }
}

console.log("Accessing City:" , student.address.city)

//Ek object banao classRoom jisme students key ho aur usme ek array of names ho. 3rd student ka naam print karo.

let classRoom = {
    student : ['Daim' , 'ALi' , 'Daim ALi']
}

console.log("Printing 3rd Student Name: " , classRoom.student[2])


//Ek array banao jisme 3 objects ho (id, name, marks). 2nd object ka marks access karo.

let students = [
  { id: 1, name: "Daim", marks: 85 },
  { id: 2, name: "Ali", marks: 90 },
  { id: 3, name: "Humais", marks: 78 }
];

// 2nd object ka marks access karna
console.log("2nd student marks:", students[1].marks);

//Ek object banao company jisme departments naam ka array ho aur har department ek object ho jisme deptName aur employees ka array ho. Pehle department ke 2nd employee ka naam print karo.

const Company = {
    departments : [
        {deptName: 'Computer Science',
            employees: [
                {Id: 1 , naam: 'Ghareeb'},
                {Id: 2 , naam: 'Bikhari'},
                {Id: 3 , naam: 'Mazdur'},
                {Id: 4 , naam: 'Cr'}
            ]
        }
    ]
}
console.log("Nam of 2nd Employee of department: ",Company.departments[0].employees[1].naam)


//Ek object banao university → faculties (object) → CS (object) → teachers (array of objects with name aur subject). Dusre teacher ka subject access karo.

const university = {
    faculties: {
        CS: {
            teachers : [
                {id: 1, naam: 'Churail', subject: 'PF'},
                {id: 2, naam: 'Bhoot', subject: 'OOP'},
                {id: 3, naam: 'Darinda', subject: 'DSA'},
                {id: 4, naam: 'Gr', subject: 'DB'}
            ]
        }
    }
}
console.log("Accessing 2nd teacher Subject", university.faculties.CS.teachers[1].subject)

// Medium: Logical operators (&&, ||, !) use karke ek simple condition likho.
let age = 60;

if (age >= 0 && age < 18) {          // same ||
  console.log("Not eligible");
} 
else if (age >= 18 && age <= 60) {   // same ||
  console.log("Eligible");
} 
else {
  console.log("Invalid age / Too old");
}


//Hard: Ternary operator (? :) use karke ek program likho jo btae student pass hua ya fail (marks >= 50 pass).
let marks = 50;
let res = marks>=50? "Pass" : "Fail";
console.log(res)


// Hard: ++a aur a++ ka difference code karke dikhayo.
const inc = 5;
console.log("a++ = " ,a++)
console.log("Now Incremented = " , a)
console.log("++a = ", ++a)
console.log("First Incremented then = " , a)







