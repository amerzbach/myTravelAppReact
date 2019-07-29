const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

router.post("/", (req, res) => {
  const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = req.body;


  resObject = {
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

      const lhUrl1 = `https://api.lufthansa.com/v1/operations/schedules/${flightFrom}/${flightTo}/${dateFlightFrom}?directFlights=false`;
      const lhUrl2 = `https://api.lufthansa.com/v1/operations/schedules/${flightTo}/${flightFrom}/${dateFlightTo}?directFlights=false`;

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
          res.json(resObject);
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
