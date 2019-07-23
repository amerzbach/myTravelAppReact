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
<<<<<<< HEAD
        <FlightsForm refreshflightList={this.state.flights}/>
=======
        <Hero
          videosrc="https://pixabay.com/videos/download/video-1917_small.mp4"
          h1="Flights"
          h2="Search for flights"
        />
        <FlightForm />
        <FlightsForm flights={this.state.flights}/>
>>>>>>> 341f57bbb0743a942974bd7b4676276c136abe0c
        <FlightsList flights={this.state.flights}/>
      </div>
    )
  }
}
