import React, { Component } from 'react'
import FlightForm from "../components/Flights/FlightForm"
import Hero from "../components/hero/hero"

export default class Flights extends Component {
  render() {
    return (

      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-1917_small.mp4"
          h1="Flights"
          h2="Search for flights"
        />
        <FlightForm />
      </div>
    )
  }
}
