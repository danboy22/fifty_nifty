require("dotenv").config()
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose")
const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "travelogue-session",
    secret: process.env.SECRET,
    httpOnly: true
  })
);


mongoose.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function(err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to travelogue database.`)
    }
  })


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to travelogue application." });
});

// routes/
require('./app/routes/auth.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});