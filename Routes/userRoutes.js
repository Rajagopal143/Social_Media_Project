//global packages
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//local packages
const User = require("../model/usermodel");
const { isValidData, checkUser } = require("../middelware/middelware");
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

router.post("/", checkUser, (req, res) => {
  // console.log(req.body);
  User.create(req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
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
