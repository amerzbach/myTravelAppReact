import React, { Component } from 'react'
import Hero from "../components/hero/hero"
import ActivitiesForm from "../components/Activities/ActivitiesForm";
import ActivitiesList from "../components/Activities/ActivitiesList";

export default class Activities extends Component {
  state = {
    activitiesData: []
  };

  refreshActivitiesList = response => {
    this.setState ({
      activitiesData: response
    })}

  render() {
    return (
      <div>
                 <Hero
          videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4"
          h1="Activities"
          h2="Things to do. Excursions."
        />
        
        <ActivitiesForm refreshActivitiesList={this.refreshActivitiesList}/>
        <ActivitiesList activitiesData={this.state.activitiesData}/>
      </div>
    )
  }
}
