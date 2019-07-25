import axios from "axios";

const getFlights = (flightFrom, flightTo, dateFlightFrom, dateFlightTo) => 
  
axios
    .post("/api/Flights", {
      flightFrom: flightFrom,
      flightTo: flightTo,
      dateFlightFrom: dateFlightFrom,
      dateFlightTo: dateFlightTo
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    });

export { getFlights };
