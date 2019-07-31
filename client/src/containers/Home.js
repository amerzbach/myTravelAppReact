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

  refreshHomeList = (
    flightsDataInbound,
    flightsDataOutbound,
    hotelDetails,
    activitiesDetails
  ) => {
    this.setState({
      flightsDataInbound: flightsDataInbound,
      flightsDataOutbound: flightsDataOutbound,
      hotelDetails: hotelDetails,
      activitiesDetails: activitiesDetails
    });
  };

  render() {
    return (
      <div>
        <center>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="myTravelApp"
          h2="Flights + Hotels + Activities"
        />

        <HomeForm refreshHomeList={this.refreshHomeList} />
        <HomeList inboundFlights={this.state.flightsDataInbound}
          outboundFlights={this.state.flightsDataOutbound}
          hotelDetails={this.state.hotelDetails} 
          activitiesDetails = {this.state.activitiesDetails} />
        </center>
      </div>
    );
  }
}
