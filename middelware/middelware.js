const objectId = require("mongoose").Types.ObjectId;
const User = require("../model/usermodel");

exports.isValidData = (req, res, next) => {
  if (!objectId.isValid(req.params.id)) {
    res.status(400).json({ error: "invalid user id" });
    return;
  }
  return next();
};

exports.checkUser = (req, res, next) => {
  if (!User == req.params.id) {
    res.status(400).json({ error: "same user name" });
    return;
  }
  return next();
};
