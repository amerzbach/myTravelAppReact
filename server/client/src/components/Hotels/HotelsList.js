import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const HotelsList = props => {
  return (
    <div
      align="center"
      style={{ position: "absolute", zIndex: 1, width: "95%" }}
    >
      <br />

      {props.hotelsData.length > 0 && (
        
          <CardDeck align="center">
          {props.hotelsData.map(Hotel => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Hotel.images[0].path} />
                <Card.Body>
                  <Card.Title>{Hotel.name.content}</Card.Title>
                  <Card.Text>
                  http://photos.hotelbeds.com/giata/bigger/{Hotel.images[0].path}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
          </CardDeck>
        
      )}
    </div>
  );
};

export default HotelsList;
