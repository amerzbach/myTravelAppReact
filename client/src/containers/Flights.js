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
        flightsDataInbound: response.flightsDataInbound,
        flightsDataOutbound: response.flightsDataOutbound
      }) 
  };

  render() {
    return (
      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="Flights"
          h2="Choose your flights. Fly high."
        />

        <FlightsForm refreshflightsList={this.refreshflightsList} />
        <FlightsList inboundFlights={this.state.flightsDataInbound} outboundFlights={this.state.flightsDataOutbound}/>
      </div>
    );
  }
}
