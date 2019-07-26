import React, { Component } from "react";
import { getHotelDetails } from "../services/Api";

export default class HotelDetails extends Component {
  state = {
    hotelDetails: []
  };

  getHotelData = () => {
    const hotelId = this.props.match.params.id;

    return getHotelDetails(hotelId)
      .then(response => {
        this.setState({
          hotelDetails: response
        });
        console.log("AAAAAAAAAAAAAAA",this.state.hotelDetails);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getHotelData();
  }

  render() {
    console.log(this.state.hotelDetails)
    console.log(Object.entries(this.state.hotelDetails).length > 0)
    return (
      <div>
      {Object.entries(this.state.hotelDetails).length > 0 && (
        <div>
          <h1>Bla bla</h1>
      <h1>{this.state.hotelDetails.hotel.name.content}</h1>
      <p>{this.state.hotelDetails.hotel.description.content}</p>
        </div>
      )}
      </div>
    );
  }
}
