const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");

const PicturesController = require("../controllers/pictures");

const checkAuth = require("../middleware/check-auth");

//import model
const Picture = require("../models/picture");

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(":", "_").replace(":", "_") +
        file.originalname
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: fileFilter,
});

function fileFilter(req, file, cb) {
  if (file.mimetype === "image/gif" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

//R-GET-ALL
router.get("/", PicturesController.pictures_get_all);

//C-POST-NEW
router.post(
  "/",
  upload.single("pictureImage"),
  checkAuth,
  PicturesController.pictures_add_new
);

//R-GET-ID
router.get("/:pictureId", PicturesController.pictures_get_by_id);

//U-PUT-ID
router.get("/pictureId", PicturesController.pictures_change_data);

//D-DELETE-ID
router.delete("/:pictureId", PicturesController.pictures_delete);

module.exports = router;
