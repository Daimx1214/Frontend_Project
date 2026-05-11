// let promise = new Promise((resolve, reject) => {
//     let name = "Daim Ali";
//     if (name === "Daim Ali") {
//         resolve(name);
//         console.log("Promise resolved");
//     }
//     else {
//         reject("Name not found");
//         console.log("Promise rejected");
//     }
// });


function asynFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Daim Ali");
        }, 2000);
    });
}

function asynFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sharadah khapra");
        }, 2000);
    });
}


// console.log("Fetching Name...");
// let p1 = asynFunction();
// p1.then((res) => {
//     console.log("Name fetched:", res);
//     console.log("Fetching second name ...");
//     let p2 =  asynFunction2();
//     p2.then((res) => {
//         console.log("Second name is fetched:", res);
//     });
// });

                  //or it can written as 
                  
console.log("Fetching Name...");
asynFunction().then((res) => {
    console.log("Name fetched:", res);
    console.log("Fetching second name ...");
    return asynFunction2();
})
.then((res) => {
    console.log("Second name is fetched:", res);
})
.then(() => {
    console.log("All names are fetched");
});
