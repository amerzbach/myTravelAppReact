const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");
const CryptoJS = require("crypto-js");

router.post("/", (req, res) => {
  const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = req.body;

  // FLIGHTS

  const tokenHeaders = { "Content-Type": "application/x-www-form-urlencoded" };
  let tokenRes = {};

  const tokenParams = {
    client_id: process.env.LHKEY,
    client_secret: process.env.LHSECRET,
    grant_type: "client_credentials"
  };

  axios
    .post(
      "https://api.lufthansa.com/v1/oauth/token",
      qs.stringify(tokenParams),
      { tokenHeaders }
    )
    .then(token => {
      tokenRes = token;

      console.log("Token ", tokenRes);

      const config = {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access_token}`,
          Accept: "application/json"
        }
      };

      const lhUrl1 = `https://api.lufthansa.com/v1/operations/schedules/${flightFrom}/${flightTo}/${dateFlightFrom}?directFlights=false`;
      const lhUrl2 = `https://api.lufthansa.com/v1/operations/schedules/${flightTo}/${flightFrom}/${dateFlightTo}?directFlights=false`;
      const urlApiHotels = `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&destinationCode=${flightTo}&from=1&to=9`;

      // HOTELS

      const dotenv = require("dotenv");
      dotenv.config();

      let utcDate = Math.floor(new Date().getTime() / 1000);
      let assemble =
        process.env.APITUDEHOTELKEY + process.env.APITUDEHOTELSECRET + utcDate;
      hash = CryptoJS.SHA256(assemble).toString();
      encryption = hash.toString(CryptoJS.enc.Hex);

      const hotelHeaders = {
        "Api-key": process.env.APITUDEHOTELKEY,
        "X-Signature": encryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      };

      // ACTIVITIES

      let activityAssemble =
        process.env.APITUDEACTIVITYKEY +
        process.env.APITUDEACTIVITYSECRET +
        utcDate;
      activityHash = CryptoJS.SHA256(activityAssemble).toString();
      activityEncryption = activityHash.toString(CryptoJS.enc.Hex);

      const urlApiActivity =
        "https://api.test.hotelbeds.com/activity-api/3.0/activities/";

      const activityParams = {
        filters: [
          {
            searchFilterItems: [{ type: "destination", value: `${flightTo}` }]
          }
        ],
        from: `${dateFlightFrom}`,
        to: `${dateFlightTo}`,
        language: "en",
        pagination: {
          itemsPerPage: 6,
          page: 1
        }
      };

      const activityHeaders = {
        "Api-key": process.env.APITUDEACTIVITYKEY,
        "X-Signature": activityEncryption,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      };

      const promisesArr = [
        axios.get(lhUrl1, config),
        axios.get(lhUrl2, config),
        axios.get(urlApiHotels, { headers: hotelHeaders }),
        axios.post(urlApiActivity, activityParams, { headers: activityHeaders })
      ];

      Promise.all(promisesArr)
        .then(response => {
          console.log(response);
          // console.log(res[0].data);
          // console.log(res[1].data);
          // console.log(res[2].data);
          console.log(res[3]);
          const resArray = response.map(element => {
            return element.data;
          });
          res.json(resArray);
        })
        .catch(err => {
          console.log(err);
        });
    });
});

module.exports = router;
