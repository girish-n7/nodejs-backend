const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//specify the url
let url = "https://jsonplaceholder.typicode.com/users";

//get users data
app.get("/", (req, res) => {
  //use fetch() to call api

  fetch(url)
    .then((response) => response.json())
    .then((result) => res.json(result))
    .catch((err) => console.error(err)); //error
});

app.listen(3000, () => console.log("Server is running"));
