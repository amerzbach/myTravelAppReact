import React from "react";
import { Table } from "react-bootstrap";
import { getDuration, getDateHour } from "../../services/DateTimeFormating";

const FlightsList = props => {
  return (
    <div>
      <br />
      {props.inboundFlights.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Inbound Flights</th>
              <th colSpan="6" background-color="transparent">
                {" "}
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Airline</th>
              <th>Flight</th>
              <th>Dep Airport</th>
              <th>Arr Airport</th>
              <th>Dep</th>
              <th>Arr</th>
            </tr>
          </thead>

          <tbody>
            {props.inboundFlights.map(Flight => {
              if (Array.isArray(Flight.Flight)) {
                const stopsNumber = Flight.Flight.length - 1;
                const duration = getDuration(Flight.TotalJourney.Duration);
                return Flight.Flight.map((Flight, index) => {
                  if (index === 0) {
                    return (
                      <tr>
                        <td rowSpan={stopsNumber + 1}>
                          {duration} <br />
                          {stopsNumber}
                          {stopsNumber > 1 ? " Stops" : " Stop"}
                        </td>
                        <td>{Flight.MarketingCarrier.AirlineID}</td>
                        <td>{Flight.MarketingCarrier.FlightNumber}</td>
                        <td>{Flight.Departure.AirportCode}</td>
                        <td>{Flight.Arrival.AirportCode}</td>
                        <td>
                          {getDateHour(
                            Flight.Departure.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                        <td>
                          {getDateHour(
                            Flight.Arrival.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr>
                        <td>{Flight.MarketingCarrier.AirlineID}</td>
                        <td>{Flight.MarketingCarrier.FlightNumber}</td>
                        <td>{Flight.Departure.AirportCode}</td>
                        <td>{Flight.Arrival.AirportCode}</td>
                        <td>
                          {getDateHour(
                            Flight.Departure.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                        <td>
                          {getDateHour(
                            Flight.Arrival.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                      </tr>
                    );
                  }
                });
              } else {
                return (
                  <tr>
                    <td>
                      {getDuration(Flight.TotalJourney.Duration)}
                      <br />
                      Non-stop
                    </td>
                    <td>{Flight.Flight.MarketingCarrier.AirlineID}</td>
                    <td>{Flight.Flight.MarketingCarrier.FlightNumber}</td>
                    <td>{Flight.Flight.Departure.AirportCode}</td>
                    <td>{Flight.Flight.Arrival.AirportCode}</td>
                    <td>
                      {getDateHour(
                        Flight.Flight.Departure.ScheduledTimeLocal.DateTime
                      )}
                    </td>
                    <td>
                      {getDateHour(
                        Flight.Flight.Arrival.ScheduledTimeLocal.DateTime
                      )}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      )}

      <br />
      {props.inboundFlights.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Outbound Flights</th>
              <th colSpan="6" background-color="transparent">
                {" "}
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Airline</th>
              <th>Flight</th>
              <th>Dep Airport</th>
              <th>Arr Airport</th>
              <th>Dep</th>
              <th>Arr</th>
            </tr>
          </thead>

          <tbody>
            {props.outboundFlights.map(Flight => {
              if (Array.isArray(Flight.Flight)) {
                const stopsNumber = Flight.Flight.length - 1;
                const duration = getDuration(Flight.TotalJourney.Duration);
                return Flight.Flight.map((Flight, index) => {
                  if (index === 0) {
                    return (
                      <tr>
                        <td rowSpan={stopsNumber + 1}>
                          {duration} <br />
                          {stopsNumber}
                          {stopsNumber > 1 ? " Stops" : " Stop"}
                        </td>
                        <td>{Flight.MarketingCarrier.AirlineID}</td>
                        <td>{Flight.MarketingCarrier.FlightNumber}</td>
                        <td>{Flight.Departure.AirportCode}</td>
                        <td>{Flight.Arrival.AirportCode}</td>
                        <td>
                          {getDateHour(
                            Flight.Departure.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                        <td>
                          {getDateHour(
                            Flight.Arrival.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr>
                        <td>{Flight.MarketingCarrier.AirlineID}</td>
                        <td>{Flight.MarketingCarrier.FlightNumber}</td>
                        <td>{Flight.Departure.AirportCode}</td>
                        <td>{Flight.Arrival.AirportCode}</td>
                        <td>
                          {getDateHour(
                            Flight.Departure.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                        <td>
                          {getDateHour(
                            Flight.Arrival.ScheduledTimeLocal.DateTime
                          )}
                        </td>
                      </tr>
                    );
                  }
                });
              } else {
                return (
                  <tr>
                    <td>
                      {getDuration(Flight.TotalJourney.Duration)}
                      <br />
                      Non-stop
                    </td>
                    <td>{Flight.Flight.MarketingCarrier.AirlineID}</td>
                    <td>{Flight.Flight.MarketingCarrier.FlightNumber}</td>
                    <td>{Flight.Flight.Departure.AirportCode}</td>
                    <td>{Flight.Flight.Arrival.AirportCode}</td>
                    <td>
                      {getDateHour(
                        Flight.Flight.Departure.ScheduledTimeLocal.DateTime
                      )}
                    </td>
                    <td>
                      {getDateHour(
                        Flight.Flight.Arrival.ScheduledTimeLocal.DateTime
                      )}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default FlightsList;
