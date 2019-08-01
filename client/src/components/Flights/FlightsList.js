import React from "react";
import { Table, Tabs, Tab } from "react-bootstrap";
import { getDuration, getDateHour } from "../../services/DateTimeFormating";

const FlightsList = props => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        align: "center"
      }}
    >
      <br />
      <center>
        <div
          style={{
            width: "95%",
            align: "center"
          }}
        >
          <Tabs defaultActiveKey="inbound" className="with-nav-tabs.panel-primary nav-tabs">
            <br />

            {props.inboundFlights.length > 0 && (
              <Tab
                eventKey="inbound"
                title="Depart Flights"
                className="with-nav-tabs.panel-primary nav-tabs panel.with-nav-tabs"
              >
                <Table
                  striped
                  bordered
                  hover
                  variant="light"
                  id="inboundTable"
                  className="largeTable"
                >
                  <thead>
                    <tr>
                      <th>Duration</th>
                      <th>Flight</th>
                      <th>Airports</th>
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
                                <td>
                                  {Flight.MarketingCarrier.AirlineID}{" "}
                                  {Flight.MarketingCarrier.FlightNumber}
                                </td>
                                <td>
                                  {Flight.Departure.AirportCode}-
                                  {Flight.Arrival.AirportCode}
                                </td>
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
                                <td>
                                  {Flight.MarketingCarrier.AirlineID}{" "}
                                  {Flight.MarketingCarrier.FlightNumber}
                                </td>
                                <td>
                                  {Flight.Departure.AirportCode}-
                                  {Flight.Arrival.AirportCode}
                                </td>
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
                              {getDuration(Flight.TotalJourney.Duration)}{" "}
                              Non-stop
                            </td>
                            <td>
                              {Flight.Flight.MarketingCarrier.AirlineID}{" "}
                              {Flight.Flight.MarketingCarrier.FlightNumber}
                            </td>
                            <td>
                              {Flight.Flight.Departure.AirportCode}-
                              {Flight.Flight.Arrival.AirportCode}
                            </td>
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

            {props.outboundFlights.length > 0 && (
              <Tab eventKey="outbound" title="Return Flights" className="with-nav-tabs.panel-primary nav-tabs">
                <Table
                  striped
                  bordered
                  hover
                  variant="light"
                  id="outboundTable"
                  className="largeTable"
                >
                  <thead>
                    <tr>
                      <th>Duration</th>
                      <th>Flight</th>
                      <th>Airports</th>
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
                                <td>
                                  {Flight.MarketingCarrier.AirlineID}{" "}
                                  {Flight.MarketingCarrier.FlightNumber}
                                </td>
                                <td>
                                  {Flight.Departure.AirportCode}-
                                  {Flight.Arrival.AirportCode}
                                </td>
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
                                <td>
                                  {Flight.MarketingCarrier.AirlineID}{" "}
                                  {Flight.MarketingCarrier.FlightNumber}
                                </td>
                                <td>
                                  {Flight.Departure.AirportCode}-
                                  {Flight.Arrival.AirportCode}
                                </td>
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
                              {getDuration(Flight.TotalJourney.Duration)}{" "}
                              Non-stop
                            </td>
                            <td>
                              {Flight.Flight.MarketingCarrier.AirlineID}{" "}
                              {Flight.Flight.MarketingCarrier.FlightNumber}
                            </td>
                            <td>
                              {Flight.Flight.Departure.AirportCode}-
                              {Flight.Flight.Arrival.AirportCode}
                            </td>
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
