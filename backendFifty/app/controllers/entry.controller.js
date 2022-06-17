require("dotenv").config()
const Entry = require('../models/Entry')
var jwt = require("jsonwebtoken");
const User = require('../models/User')

exports.postEntry = (req, res) => {

    const entry = new Entry({
        date: req.body.date,
        location: req.body.location,
        details: req.body.details,
        user: localStorage.user
  })
  
    entry.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
  };