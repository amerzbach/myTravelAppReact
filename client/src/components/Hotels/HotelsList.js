import React from "react";
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
        <div align="center">
          {props.hotelsData.map(Hotel => {
            return (
              <div>
                <img
                  src={`http://photos.hotelbeds.com/giata/bigger/${
                    Hotel.images[0].path
                  }`}
                  alt="Hotel" align="right"
                />
                <h3><Link to={`/Hotels/${Hotel.code}`}>{Hotel.name.content}</Link>
                <img src={`http://cdn4.hotelopia.com/freya/img/stars/${Hotel.categoryCode}.gif`} alt="Hotel Stars" />
                </h3>
                <p>{Hotel.description.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HotelsList;
