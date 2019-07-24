import React, { Component } from 'react'
import FlightForm from "../components/Flights/FlightForm"
import Hero from "../components/hero/hero"
import FlightsForm from "../components/Flights/FlightsForm"
import FlightsList from "../components/Flights/FlightsList"

export default class Flights extends Component {
  state = {
    flights: []
  };

  render() {
    return (

      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="Flights"
          h2="Choose your flights. Fly high."
        />
        <FlightForm />
        <FlightsForm flights={this.state.flights}/>
        <FlightsList flights={this.state.flights}/>
      </div>
    )
  }
}
