import React from "react";
import { Table } from "react-bootstrap";

const FlightsList = props => {
  return (
    <div>
      <br />
      {props.inboundFlights.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>Inbound Flights</tr>
          </thead>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight</th>
              <th>Dep Airport</th>
              <th>Arr Airport</th>
              <th>Date</th>
              <th>Dep</th>
              <th>Arr</th>
            </tr>
          </thead>

          <tbody>
            {props.inboundFlights.map(Flight => {
              return (
                <tr>
                  <td>{Flight.Flight.MarketingCarrier.AirlineID}</td>
                  <td>{Flight.Flight.MarketingCarrier.FlightNumber}</td>
                  <td>{Flight.Flight.Departure.AirportCode}</td>
                  <td>{Flight.Flight.Arrival.AirportCod}</td>
                  <td>{Flight.Flight.Departure.ScheduledTimeLocal.DateTime}</td>
                  <td>{Flight.Flight.Departure.ScheduledTimeLocal.DateTime}</td>
                  <td>{Flight.Flight.Arrival.ScheduledTimeLocal.DateTime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <br />
      {props.outboundFlights.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>Outbound Flights</tr>
          </thead>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight</th>
              <th>Date</th>
              <th>Dep</th>
              <th>Arr</th>
            </tr>
          </thead>

          <tbody>
            {props.outboundFlights.map(Flight => {
              return (
                <tr>
                  <td>{Flight.Flight.MarketingCarrier.AirlineID}</td>
                  <td>{Flight.Flight.MarketingCarrier.FlightNumber}</td>
                  <td>{Flight.Flight.Departure.ScheduledTimeLocal.DateTime}</td>
                  <td>{Flight.Flight.Departure.ScheduledTimeLocal.DateTime}</td>
                  <td>{Flight.Flight.Arrival.ScheduledTimeLocal.DateTime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default FlightsList;
