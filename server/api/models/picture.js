const mongoose = require("mongoose");

const pictureSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  type: String,
  description: String,
  picData: String,
  image: String,
});

module.exports = mongoose.model("Picture", pictureSchema);
