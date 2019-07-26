import React, { Component } from 'react'
import "./hero.css"

import BackgroundVideo from 'react-background-video-player';

class Hero extends Component {



  render() {
    return (
      <div className="hero">
        <BackgroundVideo
        src={this.props.videosrc}
        />
        <div className="hero-text">
          <h1>{this.props.h1}</h1>
          <h2>{this.props.h2}</h2>
        </div>
      </div>
          )
        }
      }

      export default Hero;