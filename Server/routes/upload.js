const express = require("express");
var router = express.Router();
var path = require("path");
import multer from "multer";
import crypto from "crypto";

var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  }
});

var upload = multer({ storage: storage });

router.post("/", upload.single("image"), function(req, res, next) {
  res.json({
    data: req.file
  });
  res.end();
  return false;
});

module.exports = router;
