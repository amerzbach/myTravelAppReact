import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  Button
} from "react-bootstrap";

const ActivitiesList = props => {
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

      {props.activitiesData.length > 0 && (
        <Container style={{align: "center"}}>
          <Row className="row justify-content-center">
            {props.activitiesData.map(activity => {
              return (
                <Card
                  style={{align: "center", margin: "5px" }}
                  className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-sm-12"
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
