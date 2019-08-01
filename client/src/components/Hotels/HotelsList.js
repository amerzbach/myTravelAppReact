import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Tabs, Tab } from "react-bootstrap";

export default class HotelsList extends Component {
  state = {
    hotelDetails: []
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
                <Tab
                  eventKey="hotelsList"
                  title="Hotels"
                  className="custom-nav-bg"
                >
                       <div className="lightDiv100">
                  <br />
                  <Container style={{ textAlignment: "center" }}>
                    <Row className="row justify-content-center">
                      {this.props.hotelsData.map(Hotel => {
                        return (
                          <Card className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12 hotelCard border-0">
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
      </div>
    );
  }
}
