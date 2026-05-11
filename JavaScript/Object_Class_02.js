let Data = 'Secret Information';

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data =", Data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        console.log("Name =", this.name);
        console.log("Email =", this.email);
        Data = "Secret Information Revealed"
        console.log("Data =", Data);
    }
}            

let Student1 = new Admin('Daim Ali', 'daimx1214@gmail.com');
                Student1.editData();
console.log()
let Student2 = new Admin('Haider Zaman', 'rh707@gmail.com');
Student2.editData();
console.log()
let Student3 = new Admin('Muhammad Humais', 'mhm@gmail.com');
Student3.editData();
console.log()
let Student4 = new Admin('Sir Zulqurnain', 'zulali@gmail.com');
Student4.editData();
console.log()