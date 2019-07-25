const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

router.post("/", (req, res) => {
  const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = req.body;

  function returnDate(date) {
    let splitArray = new Array();
    splitArray = date.split("T");
    return splitArray;
  }

newDateFlightFrom = returnDate(dateFlightFrom);
newDateFlightTo = returnDate(dateFlightTo);


  resObject = {
    flightFrom: flightFrom,
    flightTo: flightTo,
    dateFlightFrom: newDateFlightFrom,
    dateFlightTo: newDateFlightTo,
    flightsDataInbound: {},
    flightsDataOutbound: {}
  };

  const tokenParams = {
    client_id: process.env.LHKEY,
    client_secret: process.env.LHSECRET,
    grant_type: "client_credentials"
  };

  const tokenHeaders = { "Content-Type": "application/x-www-form-urlencoded" };

  let tokenRes = {};

  axios
    .post(
      "https://api.lufthansa.com/v1/oauth/token",
      qs.stringify(tokenParams),
      { tokenHeaders }
    )
    .then(token => {
      tokenRes = token;
      // console.log("Token ",tokenRes);

      const lhUrl1 = `https://api.lufthansa.com/v1/operations/schedules/${flightFrom}/${flightTo}/${newDateFlightFrom}?directFlights=false`;
      const lhUrl2 = `https://api.lufthansa.com/v1/operations/schedules/${flightTo}/${flightFrom}/${newDateFlightTo}?directFlights=false`;

      console.log(lhUrl1, lhUrl2);

      const config = {
        headers: {
          Authorization: `Bearer ${tokenRes.data.access_token}`,
          Accept: "application/json"
        }
      };

      axios.get(lhUrl1, config).then(flightsResult => {
        resObject.flightsDataInbound =
          flightsResult.data.ScheduleResource.Schedule;

        axios.get(lhUrl2, config).then(flightsResult => {
          resObject.flightsDataOutbound =
            flightsResult.data.ScheduleResource.Schedule;
          console.log(resObject.flightsDataOutbound);
          res.json(resObject);
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
