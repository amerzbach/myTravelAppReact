import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default class FlightForm extends Component {
  state = {
    flightFrom: "",
    flightTo: "",
    dateFlightFrom: "",
    dateFlightTo: "",
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={{align: "right"}}>
        <h3>Flights</h3>

        <Form>
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
