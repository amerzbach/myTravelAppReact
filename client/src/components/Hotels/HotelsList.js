import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, CardDeck, Button } from "react-bootstrap";
import mapboxgl from "mapbox-gl";

const HotelsList = props => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW1lcnpiYWNoIiwiYSI6ImNqeW82Y3g1MTBwM2szaW1veHN3ZzhrMGkifQ.CvCz6JOCwSXuVqptzE96NA";

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
      {props.hotelsData.length > 0 && (
        <Container style={{ textAlignment: "center" }}>
          <Row className="row justify-content-center">
            {props.hotelsData.map(Hotel => {
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
                      <p class="block-with-text">{Hotel.description.content}</p>
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
      )}
    </div>
  );
};

export default HotelsList;
