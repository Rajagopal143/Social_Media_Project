//global packages
const express = require("express");
const router = express.Router();
const { default: mongoose } = require("mongoose");
const bodyparser = require("body-parser");

//local packages
const User = require("../model/usermodel");
const { isValidData } = require("../middelware/middelware");
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
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({ error: "Not found id " + req.params.id });
      }
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  console.log(req.body);
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
