// ------------------------------
// Promise Chaining (.then/.catch)
// ------------------------------
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {

        // Check if request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        // Convert JSON response into JavaScript object
        return response.json();

    })
    .then(users => {

        console.log("Promise Chain:");

        // Extract only names
        const names = users.map(user => user.name);

        console.log(names);

    })
    .catch(error => {

        // Handle any errors
        console.log(error.message);

    });


// ------------------------------
// Async / Await
// ------------------------------
async function getUsers() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        console.log("Async / Await:");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

    } catch (error) {

        console.log(error.message);

    }

}

getUsers();