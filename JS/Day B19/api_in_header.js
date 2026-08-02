fetch("https://api.example.com/users", {
  headers: {
    Authorization: "Bearer YOUR_API_KEY"
  }
})
  .then(response => response.json())
  .then(data => console.log(data));