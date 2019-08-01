import React from "react";
import {
  Table,
  Tabs,
  Tab,
  Button,
  Card,
  Container,
  Row
} from "react-bootstrap";
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
          <Tabs
            defaultActiveKey="inbound"
            className="with-nav-tabs.panel-primary nav-tabs"
          >
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
              <Tab
                eventKey="outbound"
                title="Return Flights"
                className="with-nav-tabs.panel-primary nav-tabs"
              >
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
            {props.hotelDetails.length > 0 && (
              <Tab
                eventKey="hotelsList"
                title="Hotels"
                className="custom-nav-bg"
              >
                <Container className="resultsRow">
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

            {props.activitiesDetails.length > 0 && (
              <Tab
                eventKey="activitiesList"
                title="Activities"
                className="custom-nav-bg"
              >
                <Container style={{ align: "center" }}>
                  <Row className="row justify-content-center">
                    {props.activitiesDetails.map(activity => {
                      return (
                        <Card
                          style={{ align: "center", margin: "2px" }}
                          className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12"
                        >
                          <Link to={`/Activities/${activity.code}`}>
                            <Card.Img
                              variant="top"
                              src={`${
                                activity.content.media.images[0].urls[1]
                                  .resource
                              }`}
                              class="card-img-top"
                            />
                          </Link>
                          <Card.Body>
                            <Card.Title>
                              <Link to={`/Activities/${activity.code}`}>
                                {activity.content.name.toUpperCase()}
                              </Link>
                            </Card.Title>
                            <Card.Text>
                              <p
                                class="block-with-text"
                                dangerouslySetInnerHTML={{
                                  __html: activity.content.description
                                }}
                              />
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Link to={`/Activities/${activity.code}`}>
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
          </Tabs>
        </div>
      </center>
    </div>
  );
};

export default HomeList;
