import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  Tabs,
  Tab,
  Carousel,
  Col,
  Table
} from "react-bootstrap";
import { getHotelDetails } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";
import ReactMapGL, { Marker } from "react-map-gl";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { getDuration, getDateHour } from "../../services/DateTimeFormating";

export default class HomeList extends Component {
  state = {
    hotelDetails: {},
    width: 400,
    height: 400,
    zoom: 12
  };

  getHotelDetails = hotelId => {
    trackPromise(
      getHotelDetails(hotelId)
        .then(response => {
          this.setState({
            hotelDetails: response
          });
          this.props.refreshHotelDetails(hotelId);
        })
        .catch(err => {
          console.log(err);
        })
    );
  };

  render() {
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
          <div className="lightDiv95">
            <Tabs defaultActiveKey="inbound">
              <br />
              {this.props.inboundFlights.length > 0 && (
                <Tab eventKey="inbound" title="Depart Flights">
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
                      {this.props.inboundFlights.map(Flight => {
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
                                      Flight.Departure.ScheduledTimeLocal
                                        .DateTime
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
                                      Flight.Departure.ScheduledTimeLocal
                                        .DateTime
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

              {this.props.outboundFlights.length > 0 && (
                <Tab eventKey="outbound" title="Return Flights">
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
                      {this.props.outboundFlights.map(Flight => {
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
                                      Flight.Departure.ScheduledTimeLocal
                                        .DateTime
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
                                      Flight.Departure.ScheduledTimeLocal
                                        .DateTime
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
              {this.props.hotelDetails.length > 0 && (
                <Tab
                  eventKey="hotelsList"
                  title="Hotels"
                  className="custom-nav-bg"
                >
                  <div className="lightDiv100">
                    <br />
                    <Container className="resultsRow">
                      <Row className="row justify-content-center">
                        {this.props.hotelDetails.map(Hotel => {
                          return (
                            <Card className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12 hotelCard border-0">
                              <Link
                                onClick={this.getHotelDetails.bind(
                                  this,
                                  Hotel.code
                                )}
                              >
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
                                  <Link
                                    onClick={this.getHotelDetails.bind(
                                      this,
                                      Hotel.code
                                    )}
                                  >
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
                            </Card>
                          );
                        })}
                      </Row>
                    </Container>
                  </div>
                </Tab>
              )}
              {Object.getOwnPropertyNames(this.state.hotelDetails).length >
                0 && (
                <Tab
                  eventKey="hotelDetails"
                  title={this.state.hotelDetails.hotel.name.content}
                >
                  <div className="lightDiv100" style={{ padding: "25px" }}>
                    <Row>
                      <Col className="col-xl-12 text-left">
                        <h2>
                          {this.state.hotelDetails.hotel.name.content}
                          <img
                            src={`http://cdn4.hotelopia.com/freya/img/stars/${
                              this.state.hotelDetails.hotel.category.code
                            }.gif`}
                            alt="Hotel Stars"
                          />
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12 text-left">
                        <h5>Description</h5>
                        <p>
                          {this.state.hotelDetails.hotel.description.content}
                        </p>

                        <h5>Location</h5>
                        <p>
                          {this.state.hotelDetails.hotel.address.content}{" "}
                          {this.state.hotelDetails.hotel.postalCode}{" "}
                          {this.state.hotelDetails.hotel.city.content}{" "}
                          {
                            this.state.hotelDetails.hotel.country.description
                              .content
                          }
                        </p>
                        <ReactMapGL
                          latitude={
                            this.state.hotelDetails.hotel.coordinates.latitude
                          }
                          longitude={
                            this.state.hotelDetails.hotel.coordinates.longitude
                          }
                          width={this.state.width}
                          height={this.state.height}
                          zoom={this.state.zoom}
                        >
                          <Marker
                            latitude={
                              this.state.hotelDetails.hotel.coordinates.latitude
                            }
                            longitude={
                              this.state.hotelDetails.hotel.coordinates
                                .longitude
                            }
                          >
                            <Icon icon={home} />
                            <h5>
                              {this.state.hotelDetails.hotel.name.content}
                            </h5>
                          </Marker>
                        </ReactMapGL>
                      </Col>
                      <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-sm-12">
                        <h5>Photos</h5>
                        <center>
                          <Carousel className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12">
                            {this.state.hotelDetails.hotel.images.map(image => {
                              return (
                                <Carousel.Item>
                                  <img
                                    className="d-block w-100"
                                    src={`http://photos.hotelbeds.com/giata/bigger/${
                                      image.path
                                    }`}
                                    alt=" "
                                  />
                                </Carousel.Item>
                              );
                            })}
                          </Carousel>
                        </center>
                      </Col>
                    </Row>
                  </div>
                </Tab>
              )}

              {this.props.activitiesDetails.length > 0 && (
                <Tab
                  eventKey="activitiesList"
                  title="Activities"
                  className="custom-nav-bg"
                >
                  <div className="lightDiv100">
                    <br />
                    <Container style={{ align: "center" }}>
                      <Row className="row justify-content-center">
                        {this.props.activitiesDetails.map(activity => {
                          return (
                            <Card className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12 hotelCard border-0">
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
                            </Card>
                          );
                        })}
                      </Row>
                    </Container>
                  </div>
                </Tab>
              )}
            </Tabs>
          </div>
        </center>
        <br />
        <br />
      </div>
    );
  }
}
