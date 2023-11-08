//Global pakages
const express = require("express");
const app = express();
const bodyparser = require("body-parser");


//local packages
const userRoutes = require("./Routes/userRoutes");
const db = require("./db");

//Routes
app.use(bodyparser.json());
app.use("/api/users", userRoutes);



//Home page
app.get("/home", (req, res) => {
  res.send("./index");
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
