import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, CardDeck, Button } from "react-bootstrap";

const HotelsList = props => {
  return (
    <div
      align="center"
      style={{ position: "absolute", zIndex: 1, width: "95%" }}
    >
      <br />

      {props.hotelsData.length > 0 && (
        <Container>
          <Row lg="12">
            {props.hotelsData.map(Hotel => {
              return (
                <Card style={{ width: "17rem", align: "center" }}>
                  <Card.Img
                    variant="top"
                    src={`http://photos.hotelbeds.com/giata/bigger/${
                      Hotel.images[0].path
                    }`}
                    rounded
                  />
                  <Card.Body>
                    <Card.Title>
                      <Link to={`/Hotels/${Hotel.code}`}>
                        {Hotel.name.content.toUpperCase()} 
                      </Link>
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
