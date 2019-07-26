const express = require("express");
const router = express.Router();
const axios = require("axios");
const CryptoJS = require("crypto-js");

router.get("/", (req, res, next) => {
  // Enviroment Variables Loading
  const dotenv = require("dotenv");
  dotenv.config();

  //SHA-256 Encryption for APITUDE Authentication
  let utcDate = Math.floor(new Date().getTime() / 1000);
  let assemble =
    process.env.APITUDEACTIVITYKEY +
    process.env.APITUDEACTIVITYSECRET +
    utcDate;
  hash = CryptoJS.SHA256(assemble).toString();
  encryption = hash.toString(CryptoJS.enc.Hex);

  const urlApiActivity = "https://api.test.hotelbeds.com/activity-api/3.0/activities/";

  // const urlApiActivity = "https://api.hotelbeds.com/activity-content-api/3.0/activities/en/E-E10-000200515/8";

  	
  // const urlApiActivity = "https://api.test.hotelbeds.com/activity-content-api/3.0/countries/en"

  resObject = {
    activitiesList: {}
  };

  
  const params = {
    filters: [
      {
        searchFilterItems: [{ type: "destination", value: "BCN" }]
      }
    ],
    from: "2019-08-15",
    to: "2019-08-20",
    language: "en",
    pagination: {
      itemsPerPage: 21,
      page: 1
    }
  };

  axios
    .post(urlApiActivity, params,{
      headers: {
        "Api-key": process.env.APITUDEACTIVITYKEY,
        "X-Signature": encryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      }
    })
    .then(result => {
      console.log(result);
      resObject.activitiesList = result.data;
      res.json(resObject.activitiesList);
    })
    .catch(err => {
      console.log(err);
    });
});





/************************ */


router.post("/", (req, res, next) => {
  // Enviroment Variables Loading
  const dotenv = require("dotenv");
  dotenv.config();

  //SHA-256 Encryption for APITUDE Authentication
  let utcDate = Math.floor(new Date().getTime() / 1000);
  let assemble =
    process.env.APITUDEACTIVITYKEY +
    process.env.APITUDEACTIVITYSECRET +
    utcDate;
  hash = CryptoJS.SHA256(assemble).toString();
  encryption = hash.toString(CryptoJS.enc.Hex);

  const urlApiActivity = "https://api.test.hotelbeds.com/activity-api/3.0/activities/";

  const params = {
    filters: [
      {
        searchFilterItems: [{ type: "destination", value: `${req.body.flightTo}` }]
      }
    ],
    from: `${req.body.dateFlightFrom}`,
    to: `${req.body.dateFlightTo}`,
    language: "en",
    pagination: {
      itemsPerPage: 6,
      page: 1
    }
  };

  resObject = {
    activitiesList: {}
  };

  axios
    .post(urlApiActivity,params,{
      headers: {
        "Api-key": process.env.APITUDEACTIVITYKEY,
        "X-Signature": encryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      }
    })
    .then(result => {
      console.log(result);
      resObject.activitiesList = result.data;
      res.json(resObject);
    })
    .catch(err => {
      console.log(err);
    });
});



module.exports = router;
