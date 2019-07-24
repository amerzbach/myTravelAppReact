import React, { Component } from "react";
import Hero from "../components/hero/hero";
import FlightsForm from "../components/Flights/FlightsForm";
import FlightsList from "../components/Flights/FlightsList";

export default class Flights extends Component {
  state = {
    flightsDataInbound: [],
    flightsDataOutbound: []
  };

  refreshflightsList = response => {
      this.setState ({
        flightsDataInbound: response.data.flightsDataInbound,
        flightsDataOutbound: response.data.flightsDataOutbound
      }) 
      console.log(this.state.flightsDataInbound);
  };

  render() {
    return (
      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-1917_small.mp4"
          h1="Flights"
          h2="Search for flights"
        />

        <FlightsForm refreshflightsList={this.refreshflightsList} />
        <FlightsList inboundFlights={this.state.flightsDataInbound} outboundFlights={this.state.flightsDataOutbound} />
      </div>
    );
  }
}
