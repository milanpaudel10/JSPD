function getUser() {
    return Promise.resolve("Milan");
}

getUser()
.then(user => {
    console.log(user);
    return "Welcome!";
})
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error);
});