const express = require("express");
const router = express.Router();
const User = require("../model/usermodel");
const { isValidData } = require("../middelware/middelware");
const { default: mongoose } = require("mongoose");
const port = 3000;

router.get("/", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id", isValidData, (req, res) => {
  User.findById(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  res.send("Create a new record");
});

router.put("/:id", (req, res) => {
  res.send("update a record");
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id).then((data) => {
    mongoose.del;
  });
});
module.exports = router;
