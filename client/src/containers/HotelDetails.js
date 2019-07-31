import React, { Component } from "react";
import { getHotelDetails } from "../services/Api";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../components/hero/hero";

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
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getHotelData();
  }

  render() {
    return (
      <div align="center" style={{ width: "100%" }}>
        <Hero videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4" />

        {Object.entries(this.state.hotelDetails).length > 0 && (
          <div style={{ width: "95%",backgroundColor: "white", padding:"10px", textAlign: "left"}}>
            <h2>
              {this.state.hotelDetails.hotel.name.content}
              <img
                src={`http://cdn4.hotelopia.com/freya/img/stars/${
                  this.state.hotelDetails.hotel.category.code
                }.gif`}
                alt="Hotel Stars"
              />
            </h2>
            <p>{this.state.hotelDetails.hotel.description.content}</p>

            <Carousel>
              {this.state.hotelDetails.hotel.images.map(image => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`http://photos.hotelbeds.com/giata/bigger/${
                        image.path
                      }`}
                      alt=" "
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    );
  }
}
