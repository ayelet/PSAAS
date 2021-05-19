const express = require("express");
const path = require("path");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

// const providersController = require("../controllers/providers.controllers");
const providersControllers = require("../controllers/providersControllers");
// const auth = require("../middleware/auth.middleware");
const multer = require("multer");
const upload = multer({
  //   dest: "images", //comment this line for file persistence in db
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith(".jpg" | ".jpeg" | ".png" | ".webp")) {
    const ext = path.extname(file.originalname);
    if (
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".gif" &&
      ext !== ".jpeg" &&
      ext !== ".webp"
    ) {
      return cb(new Error("File must be an image (png, jpeg, jpg, webp, gif"));
    }
    cb(undefined, true);
  },
});

//upload images to user profiles ==> /api/upload/
router.post(
  "/",
  //   auth, //TODO- add authentication later
  upload.single("upload"),
  (req, res) => {
    console.log("Upload an image", req.file.originalname);
    providersControllers.uploadImage(req, res);
    // res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
