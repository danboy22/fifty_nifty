require("dotenv").config()
const User = require('../models/User')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }
      var token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 86400, // 24 hours
      });
      res.cookie("tokenLogin", token)
      res.status(200).send({
        id: user._id,
        username: user.username,
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};