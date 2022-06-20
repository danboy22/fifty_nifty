
const controller = require("../controllers/entry.controller");

module.exports = function(app) {
  
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/entry/getRecent", controller.getRecent)

  app.get("/api/entry/getMine", controller.getMine)
  
  app.post("/api/entry/postEntry", controller.postEntry)


};