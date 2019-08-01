import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Tabs, Tab } from "react-bootstrap";

const ActivitiesList = props => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        align: "center"
      }}>
      <br />
      <center>
      <div className="lightDiv95">
          <Tabs defaultActiveKey="activitiesList">
            <br />
      {props.activitiesData.length > 0 && (
                        <Tab
                        eventKey="activitiesList"
                        title="Activities"
                        className="custom-nav-bg"
                      >
                             <div className="lightDiv100">
                        <br />
        <Container style={{align: "center"}}>
          <Row className="row justify-content-center">
            {props.activitiesData.map(activity => {
              return (
<Card className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12 hotelCard border-0">
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
};

export default ActivitiesList;
