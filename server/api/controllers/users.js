const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_sign_up = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hash,
    })
      .save()
      .then((result) => {
        res.status(201).json({ message: "Created user." });
        console.log(result);
      })
      .catch((err) => console.log(err));
  });
};

exports.user_delete = (req, res, next) => {
  User.findByIdAndRemove(req.params.userId)
    .then((result) => {
      res.status(200).json({ message: "User has been deleted." });
    })
    .catch((err) => console.log(err));
};

exports.user_login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Auth error." });
      } else {
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (!result) {
            return res.status(401).json({ message: "Auth error." });
          } else {
            const token = jwt.sign(
              {
                email: user.email,
                id: user._id,
              },
              process.env.KEY,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({ message: "Logged in.", token });
          }
        });
      }
    })
    .catch((err) => console.log(err));
};

exports.users_list = (req, res, next) => {
  User.find()
    .then((result) => {
      res.status(200).json({
        message: "List of all users",
        info: result,
      });
    })
    .catch((err) => console.log(err));
};
