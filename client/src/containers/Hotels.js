import React, { Component } from "react";
import Hero from "../components/hero/hero";
import HotelsForm from "../components/Hotels/HotelsForm";
import HotelsList from "../components/Hotels/HotelsList";

export default class Hotels extends Component {
  state = {
    hotelsData: [],
    hotelId: 0
  };

  refreshHotelsList = response => {
    this.setState({
      hotelsData: response.hotelsData,
    });
  };

  refreshHotelDetails = response => {
    this.setState({
      hotelId: response
    });
  };

  render() {
    return (
      <div>
        <center>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="Hotels"
          h2="Whether luxurious, comfortable or just exciting. You choose"
        />

        <HotelsForm refreshHotelsList={this.refreshHotelsList} />
        <HotelsList hotelsData={this.state.hotelsData} refreshHotelDetails={this.refreshHotelDetails}/>
        </center>
      </div>
    );
  }
}
