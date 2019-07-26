require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/project-management-server",
    {
      useNewUrlParser: true
    }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Uncoment for the DEV
app.use(express.static(path.join(__dirname, "public")));
// Uncoment for the production Build
// app.use(express.static(path.join(__dirname, "/client/build")));

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "myTravelApp";

const index = require("./routes/index");
app.use("/", index);

const flights = require("./routes/Flights");
app.use("/api/Flights", flights);

const hotels = require("./routes/Hotels");
app.use("/api/Hotels", hotels);

const activities = require("./routes/Activities");
app.use("/api/Activities", activities);

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
