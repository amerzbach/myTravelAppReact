import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Card,
  CardDeck,
  CardColumns,
  Button
} from "react-bootstrap";

const ActivitiesList = props => {
  return (
    <div
      align="center"
      style={{ position: "absolute", zIndex: 1, width: "100%", align: "center" }}
    >
      <br />

      {props.activitiesData.length > 0 && (
        <Container>
          <Row>
            {props.activitiesData.map(activity => {
              // const url = {{activity.media.images.urls}}.find(({activity.media.images.urls.sizeType}==="XLARGE"))
              // console.log (url)

              return (
                <Card style={{ width: "17rem", align: "center" }}>
                  <Card.Img
                    variant="top"
                    src={`${activity.content.media.images[0].urls[1].resource}`}
                  />
                  <Card.Body>
                    <Card.Title>{activity.content.name.toUpperCase()}</Card.Title>
                  </Card.Body>
                  <Card.Text>
                     <p class="block-with-text">{activity.content.description}</p></Card.Text>
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
      )}
    </div>
  );
};

export default ActivitiesList;
