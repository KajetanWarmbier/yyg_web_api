const mongoose = require("mongoose");

const Picture = require("../models/picture");

exports.pictures_get_all = (req, res, next) => {
  Picture.find()
    .then((result) => {
      res.status(200).json({
        message: "List of all pictures",
        info: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.pictures_add_new = (req, res, next) => {
  console.log(req.file);
  const picture = new Picture({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    picData: req.body.picData,
    image: req.file.path,
  });

  picture
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Added new picture",
        info: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.pictures_get_by_id = (req, res, next) => {
  const id = req.params.pictureId;
  Picture.findById(id)
    .then((result) => {
      res.status(200).json({
        message: "Info about picture number " + id,
        info: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.pictures_change_data = (req, res, next) => {
  const id = req.params.pictureId;
  Picture.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      picData: req.body.picData,
    },
    { new: true }
  )
    .then((result) => {
      res.status(201).json({
        message: "Updated picture number " + id,
        info: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.pictures_delete = (req, res, next) => {
  const id = req.params.pictureId;
  Picture.findByIdAndRemove(id)
    .then((result) => {
      res.status(201).json({
        message: "Deleted picture number " + id,
      });
    })
    .catch((err) => console.log(err));
};
