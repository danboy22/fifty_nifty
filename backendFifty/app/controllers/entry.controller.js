require("dotenv").config()
const Entry = require('../models/Entry')
const jwt = require("jsonwebtoken");
const User = require('../models/User')
const url = require('url')

// exports.findCreator = async (req, res) => {
//   let creator = await User.findById(req.body.user);
// }

exports.postEntry = async (req, res) => {
  console.log("req.body is", req.body)
  // console.log("res is", res)
  let creator = await User.findById(req.body.user);
  console.log("creator is", creator)

    const entry = new Entry({
        date: req.body.date,
        location: req.body.location,
        details: req.body.details,
        user: creator
  })

  console.log("entry is", entry)
  
    entry.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      else {
        res.status(200).send('Entry successfully uploaded')
        return
      }
    });
  };

  exports.getRecent = async(req, res) => {
    let entries = await Entry.find({}).sort({_id: -1}).limit(4)
    res.json(entries)
    console.log("res is", res)
    res.status(200).send({data: entries})
    return
  }

  exports.getMine = async(req, res) => {
    console.log("req is", req)
    const queryObject = url.parse(req.url, true).query;
    console.log("query object", queryObject)
  
    let myEntries = await Entry.find({user: queryObject.user})
    console.log("myy entries are", myEntries)
    res.json(myEntries)
    res.status(200).send("yo momma")
    return
  }