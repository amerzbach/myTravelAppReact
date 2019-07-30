import React, { Component } from 'react'
import Hero from "../components/hero/hero"
import HotelsForm from "../components/Hotels/HotelsForm";
import HotelsList from "../components/Hotels/HotelsList";

export default class Hotels extends Component {
  state = {
    hotelsData: []
  };

  refreshHotelsList = response => {
    this.setState ({
      hotelsData: response.hotelsData
    })}

  
  render() {
    return (
      <div align="centre">
         <Hero
          videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4"
          h1="Hotels"
          h2="Whether luxurious, comfortable or just exciting. You choose."
        />

        <HotelsForm refreshHotelsList={this.refreshHotelsList}/>
        <HotelsList hotelsData={this.state.hotelsData}/>
      </div>
    )
  }
}
