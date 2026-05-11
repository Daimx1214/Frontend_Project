// Premetive DATATYPES in JavaScript
let a = 123;
let b = null;
let c ="Daim Ali";
let d = Symbol("unique");
let e = BigInt(12345678901234567890n);
let f = true;
let g = undefined; // or let g; ya bhi undefined k equal ho ga

console.log(a , b, c, d, e, f, g); 
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

//  Non-Premetive DATATYPES in JavaScript are:
// Objects, Arrays, Functions 


// Object in JavaScript (key-value pairs)
const x = {
    name: "Daim Ali",
    age: 30,
    "bulleon": !false,   //inverted comma lagao ya na marzi ha
    ali: undefined
}
x.name = "Ali Daim";  //object k andar value change krni ho to
x.age = 31;   //or  x.age = x.age + 1;    or x["age"] = x["age"] + 1;

console.log(x.name);  
console.log(typeof(x));  //object





const profile = {
    name: "Daim Ali",
    isFollow : true,
    post: "195Posts",
    followers: "23.5K",
    following: "500",
    about: "I am a web developer",
}
console.log(Object.keys(profile));
// Output: ["name", "isFollow", "post", "followers", "following", "about"]
console.log(Object.values(profile));
// Output: ["Daim Ali", true, "195Posts", "23.5K", "500", "I am a web developer"]
console.log(Object.entries(profile));   
