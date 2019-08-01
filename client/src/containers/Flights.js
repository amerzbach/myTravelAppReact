import React, { Component } from "react";
import Hero from "../components/hero/hero";
import FlightsForm from "../components/Flights/FlightsForm";
import FlightsList from "../components/Flights/FlightsList";

export default class Flights extends Component {
  state = {
    flightsDataInbound: [],
    flightsDataOutbound: []
  };

  refreshflightsList = (
    flightsDataInbound,
    flightsDataOutbound
  ) => {
    this.setState({
      flightsDataInbound: flightsDataInbound,
      flightsDataOutbound: flightsDataOutbound
    });
  };

  render() {
    return (
      <div>
        <center>
          <Hero
            videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
            h1="Flights"
            h2="First, Business or Economy. Fly your way"
          />
          <FlightsForm refreshflightsList={this.refreshflightsList} />
          <FlightsList
            inboundFlights={this.state.flightsDataInbound}
            outboundFlights={this.state.flightsDataOutbound}
          />
        </center>
      </div>
    );
  }
}
