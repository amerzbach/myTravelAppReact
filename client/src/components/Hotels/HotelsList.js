import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  Tabs,
  Tab,
  Carousel,
  Col
} from "react-bootstrap";
import { getHotelDetails } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";
import ReactMapGL, { Marker } from "react-map-gl";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";

export default class HotelsList extends Component {
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
            <Tabs defaultActiveKey="hotelsList">
              <br />
              {this.props.hotelsData.length > 0 && (
                <Tab eventKey="hotelsList" title="Hotels">
                  <div className="lightDiv100">
                    <br />
                    <Container style={{ textAlignment: "center" }}>
                      <Row className="row justify-content-center">
                        {this.props.hotelsData.map(Hotel => {
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
                  <div className="lightDiv100" style={{padding: "25px"}}>
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
            </Tabs>
          </div>
        </center>
      </div>
    );
  }
}
