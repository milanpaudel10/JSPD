fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com"
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));