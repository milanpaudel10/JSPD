fetch("https://api.example.com/products?category=laptop&limit=5")
  .then(response => response.json())
  .then(data => console.log(data));