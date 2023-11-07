//Global pakages
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

//local packages
const userRoutes = require("./Routes/userRoutes");
const db = require("./db");

//Routes
app.use("/api/users", userRoutes);
app.use(bodyparser.json());
//Home page
app.get("/home", (req, res) => {
  res.send("hi this  is home page");
});

const port = 3000;

//Server Start
db()
  .then(() => {
    console.log("Database is connected ");
    app.listen(port, () => {
      console.log(`Server is running in ${port} port`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
