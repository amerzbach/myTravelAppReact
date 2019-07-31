import React, { Component } from "react";
import { getHotelDetails } from "../services/Api";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../components/hero/hero";
import ReactMapGL from "react-map-gl";

export default class HotelDetails extends Component {
  state = {
    hotelDetails: [],
    viewport: {
      width: 400,
      height: 400,
      zoom: 8
    }
  };

  getHotelData = () => {
    const hotelId = this.props.match.params.id;

    return getHotelDetails(hotelId)
      .then(response => {
        this.setState({
          hotelDetails: response,
          viewportlatitude: response.hotel.coordinates.latitude,
          longitude: response.hotel.coordinates.longitude
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
          <div
            style={{
              width: "95%",
              backgroundColor: "white",
              padding: "10px",
              textAlign: "left"
            }}
          >
            <h2>
              {this.state.hotelDetails.hotel.name.content}
              <img
                src={`http://cdn4.hotelopia.com/freya/img/stars/${
                  this.state.hotelDetails.hotel.category.code
                }.gif`}
                alt="Hotel Stars"
              />
            </h2>
            <h5>Description</h5>
            <p>{this.state.hotelDetails.hotel.description.content}</p>

            <h5>Location</h5>
            <p>
              {this.state.hotelDetails.hotel.address.content}{" "}
              {this.state.hotelDetails.hotel.postalCode}{" "}
              {this.state.hotelDetails.hotel.city.content}{" "}
              {this.state.hotelDetails.hotel.country.description.content}
            </p>
            <p>{this.state.hotelDetails.hotel.coordinates.longitude}</p>
            <p>{this.state.hotelDetails.hotel.coordinates.latitude}</p>
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}
            />

            <h5>Photos</h5>
            <center>
              <Carousel className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12">
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
            </center>
          </div>
        )}
      </div>
    );
  }
}
