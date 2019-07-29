import axios from "axios";


const getFlights = (flightFrom, flightTo, dateFlightFrom, dateFlightTo) => (
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
    })
) 

const getHotels = (flightTo, dateFlightFrom, dateFlightTo) => (
  axios
  .post("/api/Hotels", {
    flightTo: flightTo,
    dateFlightFrom: dateFlightFrom,
    dateFlightTo: dateFlightTo
  })
  .then(response => {
    console.log(response.data);
    return response.data;
  })
)

const getHotelDetails = (hotelId) => (
  axios
  .get(`/api/Hotels/search/${hotelId}`)
  .then(response => {
    return response.data;
  })
)

const getActivities = (flightTo, dateFlightFrom, dateFlightTo) => (
  axios
  .post("/api/Activities", {
    flightTo: flightTo,
    dateFlightFrom: dateFlightFrom,
    dateFlightTo: dateFlightTo
  })
  .then(response => {
    console.log(response.data);
    return response.data;
  })
)

const getActivityDetails = (activityId) => (
  axios
  .get(`/api/Activities/search/${activityId}`)
  .then(response => {
    console.log(response);
    return response.data;
  })
)

export { getFlights,getHotels, getHotelDetails, getActivities, getActivityDetails };
