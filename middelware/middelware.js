const objectId = require("mongoose").Types.ObjectId;

exports.isValidData = (req, res, next) => {
  if (!objectId.isValid(req.params.id)) {
    res.status(400).json({ error: "invalid user id" });
    return;
  }
  return next();
};
