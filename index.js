const express = require("express");
const app = express();

const userRoutes = require("./Routes/userRoutes");

app.use("/api/users", userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running in ${port} port`);
});

app.get("/home", (req, res) => {
  res.send("hi this  is home page");
});
