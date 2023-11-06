const express = require("express");
const router = express.Router();
const port = 3000;

router.get("/", (req, res) => {
  res.send("geting all the records");
});
router.get("/:id", (req, res) => {
  res.send("geting a single record ");
});

router.post("/", (req, res) => {
  res.send("Create a new record");
});

router.put("/:id", (req, res) => {
  res.send("update a record");
});

router.delete("/:id", (req, res) => {
  res.send("delete a record");
});
module.exports = router;
