import React, { Component } from "react";
import Hero from "../components/hero/hero";
import ActivitiesForm from "../components/Activities/ActivitiesForm";
import ActivitiesList from "../components/Activities/ActivitiesList";

export default class Activities extends Component {
  state = {
    activitiesData: []
  };

  refreshActivitiesList = response => {
    this.setState({
      activitiesData: response
    });
  };

  render() {
    return (
      <div>
        <center>
          <Hero
            videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
            h1="Experience the new"
            h2="Guide yourself through the the most exciting Activities"
          />

          <ActivitiesForm refreshActivitiesList={this.refreshActivitiesList} />
          <ActivitiesList activitiesData={this.state.activitiesData} />
        </center>
      </div>
    );
  }
}
