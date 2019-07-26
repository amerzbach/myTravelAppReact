const express = require("express");
const router = express.Router();
const axios = require("axios");
const CryptoJS = require("crypto-js");

router.get("/", (req, res) => {
  // Enviroment Variables Loading
  const dotenv = require("dotenv");
  dotenv.config();

  //SHA-256 Encryption for APITUDE Authentication
  let utcDate = Math.floor(new Date().getTime() / 1000);
  let assemble =
    process.env.APITUDEHOTELKEY + process.env.APITUDEHOTELSECRET + utcDate;
  hash = CryptoJS.SHA256(assemble).toString();
  encryption = hash.toString(CryptoJS.enc.Hex);

  resObject = {
    flighTo: req.body.flightTo,
    dateFlightFrom: req.body.dateFlightFrom,
    dateFlightTo: req.body.dateFlightTo,
    hotelsData: {}
  };

  const urlApiHotels = `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&destinationCode=BCN&from=1&to=9`;

  axios
    .get(urlApiHotels, {
      headers: {
        "Api-key": process.env.APITUDEHOTELKEY,
        "X-Signature": encryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      }
    })
    .then(result => {
      resObject.hotelsData = result.data.hotels;
      res.json(resObject);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  // Enviroment Variables Loading
  const dotenv = require("dotenv");
  dotenv.config();

  //SHA-256 Encryption for APITUDE Authentication
  let utcDate = Math.floor(new Date().getTime() / 1000);
  let assemble =
    process.env.APITUDEHOTELKEY + process.env.APITUDEHOTELSECRET + utcDate;
  hash = CryptoJS.SHA256(assemble).toString();
  encryption = hash.toString(CryptoJS.enc.Hex);

  resObject = {
    flighTo: req.body.flightTo,
    dateFlightFrom: req.body.dateFlightFrom,
    dateFlightTo: req.body.dateFlightTo,
    hotelsData: {}
  };

  const urlApiHotels = `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&destinationCode=${req.body.flightTo}&from=1&to=9`;

  axios
    .get(urlApiHotels, {
      headers: {
        "Api-key": process.env.APITUDEHOTELKEY,
        "X-Signature": encryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      }
    })
    .then(result => {
      resObject.hotelsData = result.data.hotels;
      res.json(resObject);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
