import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Button, Tabs, Tab } from "react-bootstrap";
import ReactMapGL, { Marker } from "react-map-gl";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";

export default class HotelsList extends Component {
  state = {
    hotelDetails: [],
    width: 800,
    height: 400,
    zoom: 12
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
          <div
            style={{
              width: "95%",
              align: "center",
              backgroundColor: "white"
            }}
          >
            <Tabs defaultActiveKey="hotelsList" className="custom-nav-bg">
              <br />
              {this.props.hotelsData.length > 0 && (
                <Tab
                  eventKey="hotelsList"
                  title="Hotel List"
                  className="custom-nav-bg"
                >
                  <Container style={{ textAlignment: "center" }}>
                    <Row className="row justify-content-center">
                      {this.props.hotelsData.map(Hotel => {
                        return (
                          <Card
                            style={{ align: "center", margin: "2px"}}
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
              {this.props.hotelsData.length > 0 && (
                <Tab eventKey="hotelsMap" title="Hotels Map">
                  <ReactMapGL
                    latitude={this.props.hotelsData[0].coordinates.latitude}
                    longitude={this.props.hotelsData[0].coordinates.longitude}
                    width={this.state.width}
                    height={this.state.height}
                    zoom={this.state.zoom}
                  >
                    {this.props.hotelsData.map(Hotel => {
                      return (
                        <Marker
                          latitude={Hotel.coordinates.latitude}
                          longitude={Hotel.coordinates.longitude}
                          offsetLeft={-20}
                          offsetTop={-10}
                        >
                          <Link to={`/Hotels/${Hotel.code}`}>
                          <Icon icon={home} /> {Hotel.name.content.toUpperCase()}
                          </Link>
                        </Marker>
                      );
                    })}
                  </ReactMapGL>
                </Tab>
              )}
            </Tabs>
          </div>
        </center>
      </div>
    );
  }
}
