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
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        textAlign: "center"
      }}
    >
      <br />

      {props.activitiesData.length > 0 && (
        <Container>
          <Row lg="12">
            {props.activitiesData.map(activity => {
              // const url = {{activity.media.images.urls}}.find(({activity.media.images.urls.sizeType}==="XLARGE"))
              // console.log (url)

              return (
                <Card
                  style={{ width: "17rem", align: "center", margin: "2px" }}
                >
                  <Link to={`/Activities/${activity.code}`}>
                    <Card.Img
                      variant="top"
                      src={`${
                        activity.content.media.images[0].urls[1].resource
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
