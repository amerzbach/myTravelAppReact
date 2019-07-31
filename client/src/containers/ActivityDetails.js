import React, { Component } from "react";
import { getActivityDetails } from "../services/Api";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/hero";
import { Row } from "react-bootstrap";

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
      <div align="center" style={{ width: "100%" }}>
        <Hero videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4" />

        <div style={{ width: "95%",backgroundColor: "white", padding:"10px",textAlign: "left" }}>
        <h2>{this.state.activityDetails.name}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: this.state.activityDetails.description
          }}
          align="left"
        />
      </div>
      </div>
    );
  }
}
