
const controller = require("../controllers/entry.controller");

module.exports = function(app) {
    console.log("here1")
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  console.log("here2")
  app.post("/api/entry/postEntry", controller.postEntry);

};