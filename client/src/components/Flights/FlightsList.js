import React from "react";
import { Table, Alert, Tabs, Tab } from "react-bootstrap";
import { getDuration, getDateHour } from "../../services/DateTimeFormating";

const FlightsList = props => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        color: "grey",
        align: "center"
      }}
    >
      <br />
      <center>
        <div
          style={{
            width: "95%",
            color: "grey",
            align: "center"
          }}
        >
          <Tabs defaultActiveKey="inbound" className="custom-nav-bg">
            <br />

            {props.inboundFlights.length > 0 && (
              <Tab
                eventKey="inbound"
                title="Inbound Flights"
                className="custom-nav-bg"
              >
                <Table
                  striped
                  bordered
                  hover
                  variant="dark"
                  style={{ width: "100%" }}
                  id="inboundTable"
                >
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
                        const duration = getDuration(
                          Flight.TotalJourney.Duration
                        );
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
                            <td>
                              {Flight.Flight.MarketingCarrier.FlightNumber}
                            </td>
                            <td>{Flight.Flight.Departure.AirportCode}</td>
                            <td>{Flight.Flight.Arrival.AirportCode}</td>
                            <td>
                              {getDateHour(
                                Flight.Flight.Departure.ScheduledTimeLocal
                                  .DateTime
                              )}
                            </td>
                            <td>
                              {getDateHour(
                                Flight.Flight.Arrival.ScheduledTimeLocal
                                  .DateTime
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </Table>
              </Tab>
            )}

            <br />

            {props.outboundFlights.length === 0 && (
              <Alert variant="danger">No outbound flights found</Alert>
            )}

            {props.outboundFlights.length > 0 && (
              <Tab eventKey="outbound" title="Outbound Flights">
                <Table
                  striped
                  bordered
                  hover
                  variant="dark"
                  style={{ width: "100%" }}
                  id="outboundTable"
                >
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
                        const duration = getDuration(
                          Flight.TotalJourney.Duration
                        );
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
                            <td>
                              {Flight.Flight.MarketingCarrier.FlightNumber}
                            </td>
                            <td>{Flight.Flight.Departure.AirportCode}</td>
                            <td>{Flight.Flight.Arrival.AirportCode}</td>
                            <td>
                              {getDateHour(
                                Flight.Flight.Departure.ScheduledTimeLocal
                                  .DateTime
                              )}
                            </td>
                            <td>
                              {getDateHour(
                                Flight.Flight.Arrival.ScheduledTimeLocal
                                  .DateTime
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </Table>
              </Tab>
            )}
          </Tabs>
        </div>
      </center>
    </div>
  );
};

export default FlightsList;
