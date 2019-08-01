import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Tabs, Tab } from "react-bootstrap";
import { getActivityDetails } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";

export default class ActivitiesList extends Component {
  state = {
    activityDetails: {}
  };

  getActivityDetails = activityId => {
    trackPromise(
      getActivityDetails(activityId)
        .then(response => {
          this.setState({
            activityDetails: response
          });
          this.props.refreshActivityDetails(activityId);
        })
        .catch(err => {
          console.log(err);
        })
    );
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
            <Tabs defaultActiveKey="activitiesList">
              <br />
              {this.props.activitiesData.length > 0 && (
                <Tab
                  eventKey="activitiesList"
                  title="Activities"
                  className="custom-nav-bg"
                >
                  <div className="lightDiv100">
                    <br />
                    <Container style={{ align: "center" }}>
                      <Row className="row justify-content-center">
                        {this.props.activitiesData.map(activity => {
                          return (
                            <Card className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-sm-12 hotelCard border-0">
                              <Link
                                onClick={this.getActivityDetails.bind(
                                  this,
                                  activity.code
                                )}
                              >
                                <Card.Img
                                  variant="top"
                                  src={`${
                                    activity.content.media.images[0].urls[1]
                                      .resource
                                  }`}
                                  class="card-img-top"
                                />
                              </Link>
                              <Card.Body>
                                <Card.Title>
                                  <Link
                                    onClick={this.getActivityDetails.bind(
                                      this,
                                      activity.code
                                    )}
                                  >
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
              {Object.getOwnPropertyNames(this.state.activityDetails).length >
                0 && (
                <Tab
                  eventKey="activityDetails"
                  title={this.state.activityDetails.name}
                >
                  <div className="lightDiv100" style={{ padding: "25px" }}>
                    <h2>{this.state.activityDetails.name}</h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.activityDetails.description
                      }}
                      align="left"
                    />
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
