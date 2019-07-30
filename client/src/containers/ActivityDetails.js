import React, { Component } from "react";
import ActivitiesForm from "../components/Activities/ActivitiesForm";
import { getActivityDetails } from "../services/Api";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Navbar from "../components/Navbar";

export default class ActivityDetails extends Component {
  state = {
    activityDetails: {}
  };

  getActivityData = () => {
    const activityId = this.props.match.params.id;

    return getActivityDetails(activityId)
      .then(response => {
        this.setState({
          activityDetails: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getActivityData();
  }

  render() {
    return (
      <>
      <Navbar />
      

      <Row>
        <Col
          lg="2"
          style={{ verticalAlign: `center`, backgroundColor: `lightblue` }}
        >
          <ActivitiesForm />
        </Col>
        <Col style={{ verticalAlign: "top", align: "left" }}>
          <h3>
          {this.state.activityDetails.name}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.activityDetails.description
            }}
            align="left"
          />
        </Col>
      </Row>

      </>
    );
  }
}
