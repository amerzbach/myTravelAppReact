import React, { Component } from 'react'
import FlightsForm from "../components/Flights/FlightsForm"
import FlightsList from "../components/Flights/FlightsList"

export default class Flights extends Component {
  state = {
    flights: []
  };

  render() {
    return (
      <div>
        <FlightsForm flights={this.state.flights}/>
        <FlightsList flights={this.state.flights}/>
      </div>
    )
  }
}
