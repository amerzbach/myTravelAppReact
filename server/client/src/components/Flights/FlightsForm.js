import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";

export default class FlightsForm extends Component {
  state = {
    flightFrom: "",
    flightTo: "",
    dateFlightFrom: "",
    dateFlightTo: "",
    flightsDataInbound: {},
    flightsDataOutbound: {},
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post("/api/Flights", {
      flightFrom: this.state.flightFrom,
      flightTo: this.state.flightTo,
      dateFlightFrom: this.state.dateFlightFrom,
      dateFlightTo: this.state.dateFlightTo
    })
    .then(response => {
      this.props.refreshflightsList(response);
      this.setState({
        flightFrom: response.data.flightFromflightFrom,
        flightTo: response.data.flightTo,
        dateFlightFrom: response.data.fromDate,
        dateFlightTo: response.data.toDate,
        flightsDataInbound: response.data.flightsDataInbound,
        flightsDataOutbound: response.data.flightsDataOutbound
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>

        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="flightFrom">From</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={this.handleChange}
                id="flightFrom"
                name="flightFrom"
                value={this.state.flightFrom}
                placeholder="Destination airport IATA Code"
              />
            </Col>

            <Col>
              <Form.Label htmlFor="flightTo">To</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={this.handleChange}
                id="flightTo"
                name="flightTo"
                value={this.state.flightTo}
                placeholder="Destination airport IATA Code"
              />
            </Col>

            <Col>
              <Form.Label htmlFor="dateFlightFrom">Date From</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                onChange={this.handleChange}
                id="dateFlightFrom"
                name="dateFlightFrom"
                value={this.state.dateFlightFrom}
              />
            </Col>

            <Col>
              <Form.Label htmlFor="dateFlightTo">Date To</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                onChange={this.handleChange}
                id="dateFlightTo"
                name="dateFlightTo"
                value={this.state.dateFlightTo}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <br />
              <Button type="submit">Flight Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
