const promise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }

});

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});