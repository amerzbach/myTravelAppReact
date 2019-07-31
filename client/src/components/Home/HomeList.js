import React from "react";
import { Table, Tabs, Tab, Button, Card, Container,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDuration, getDateHour } from "../../services/DateTimeFormating";

const HomeList = props => {
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
                  style={{ width: "95%" }}
                  id="inboundTable"
                >
                  <thead>
                    <tr>
                      <th colSpan="7" class="bg-primary text-white">
                        Inbound Flights
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

            {props.outboundFlights.length > 0 && (
              <Tab eventKey="outbound" title="Outbound Flights">
                <Table
                  striped
                  bordered
                  hover
                  variant="dark"
                  style={{ width: "95%" }}
                  id="outboundTable"
                >
                  <thead>
                    <tr>
                      <th colSpan="7" class="bg-primary text-white">
                        Outbound Flights
                      </th>
                    </tr>
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
            {props.hotelDetails.length > 0 && (
              <Tab
                eventKey="hotelsList"
                title="Hotel List"
                className="custom-nav-bg"
              >
                <Container style={{ textAlignment: "center" }}>
                  <Row className="row justify-content-center">
                    {props.hotelDetails.map(Hotel => {
                      return (
                        <Card
                          style={{ align: "center", margin: "2px" }}
                          className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12"
                        >
                          <Link to={`/Hotels/${Hotel.code}`}>
                            <Card.Img
                              variant="top"
                              src={`http://photos.hotelbeds.com/giata/bigger/${
                                Hotel.images[0].path
                              }`}
                              class="card-img-top"
                            />
                          </Link>
                          <Card.Body>
                            <Card.Title>
                              <Link to={`/Hotels/${Hotel.code}`}>
                                {Hotel.name.content.toUpperCase()}
                              </Link>
                              <br />
                              <img
                                src={`http://cdn4.hotelopia.com/freya/img/stars/${
                                  Hotel.categoryCode
                                }.gif`}
                                alt="Hotel Stars"
                              />
                            </Card.Title>
                            <Card.Text>
                              <p class="block-with-text">
                                {Hotel.description.content}
                              </p>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Link to={`/Hotels/${Hotel.code}`}>
                              <Button variant="primary">More info</Button>
                            </Link>
                          </Card.Footer>
                        </Card>
                      );
                    })}
                  </Row>
                </Container>
              </Tab>
            )}

            <Tab eventKey="activitiesList" title="Activities" />
          </Tabs>
        </div>
      </center>
    </div>
  );
};

export default HomeList;
