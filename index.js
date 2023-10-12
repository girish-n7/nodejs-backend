const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); //bodyparser alternative (is inbuilt with express)
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  // use fetch reuest to call the api

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((result) => res.json(result))
    .catch((err) => console.error("Error: " + err)); //error
});

app.listen(3000, () => console.log("Server is running"));
