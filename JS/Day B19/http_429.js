fetch("https://api.example.com/users")
  .then(response => {
    if (response.status === 429) {
      console.log("Rate limit exceeded. Try again later.");
      return;
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));