import React from "react";
import { Container, Col, Row, Card, CardDeck, Button } from "react-bootstrap";

const HotelsList = props => {
  return (
    <div
      align="center"
      style={{ position: "absolute", zIndex: 1, width: "95%" }}
    >
      <br />

      {props.hotelsData.length > 0 && (
        <div>
          {props.hotelsData.map(Hotel => {
            return (
              <div>
                <img
                  src={`http://photos.hotelbeds.com/giata/bigger/${
                    Hotel.images[0].path
                  }`}
                  alt="Hotel" align="left"
                />
                <h3>{Hotel.name.content}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HotelsList;
