import React, { Component } from "react";
import Hero from "../components/hero/hero";
import HomeForm from "../components/Home/HomeForm";
import HomeList from "../components/Home/HomeList";

export default class Home extends Component {
  state = {
    flightsDataInbound: [],
    flightsDataOutbound: [],
    hotelDetails: [],
    activitiesDetails: []
  };

  render() {
    return (
      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="ExperienceHub."
          h2="The world is yours.Explore it. Make the Experience."
        />

        <HomeForm refreshHotelsList={this.refreshHotelsList} />
        <HomeList inboundFlights={this.state.flightsDataInbound}
          outboundFlights={this.state.flightsDataOutbound}
          hotelDetails={this.state.hotelDetails} 
          activitiesDetails = {this.state.activitiesDetails} />
      </div>
    );
  }
}
