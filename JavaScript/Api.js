const URL = 'https://jsonplaceholder.typicode.com/posts/1';

const fetchData = async () => {
    console.log("Fetching data from API...");
    let response = await fetch(URL);
    console.log("Response received", response);

    // let data = await response.json(); // JSON me convert
    // console.log("Data fetched:", data[0]); // pura data

    // console.log("Title:", data.title);  // specific data
    // console.log("Body:", data.body);   // specific data
    // console.log("Data fetched successfully");
}

fetchData();
