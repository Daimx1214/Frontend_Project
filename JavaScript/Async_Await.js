// async function hello() {
//    console.log("Hello");
// }
// hello();

// async function getName() {
//     return "Daim Ali";
// }
// getName().then((res) => {
//     console.log(res);
// }
// );

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API");
        }, 3000);
    });
}

async function fetchData() {
    let response = await api(); 
    console.log("Response:", response);
    console.log("Data fetched successfully");
    await api();
    let response2 = await api(); 
    console.log("Response:", response2);
    console.log("Data fetched successfully again");
}

fetchData();
