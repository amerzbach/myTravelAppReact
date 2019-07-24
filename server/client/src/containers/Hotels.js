import React, { Component } from 'react'
import Hero from "../components/hero/hero"

export default class Hotels extends Component {
  render() {
    return (
      <div>
         <Hero
          videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4"
          h1="Hotels"
          h2="Whether luxurious, comfortable or just exciting. You choose."
        />
      </div>
    )
  }
}
