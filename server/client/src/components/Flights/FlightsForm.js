import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getFlights } from "../../services/Api";
import { getToday, getFormDate } from "../../services/DateTimeFormating";

export default class FlightsForm extends Component {
  state = {
    flightFrom: "",
    flightTo: "",
    dateFlightFrom: getToday(0),
    dateFlightTo: getToday(0),
    flightsDataInbound: [],
    flightsDataOutbound: [],
    error: ""
  };

  handleChange = event => {

    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    })

    console.log(this.state.dateFlightFrom);
    console.log(this.state.dateFlightTo);

    /*

    const d1 = new Date(this.state.dateFlightFrom);
    const d2 = new Date(this.state.dateFlightTo);
    console.log(d1 >  d2)

    // This is NOT WORKING - Require Help
    if (Date(this.state.dateFlightFrom) > Date(this.state.dateFlightTo)) {
      console.log("paso por aqui");
      this.setState.dateFlightTo = this.state.dateFlightFrom;
    }
    */
  };

  handleSubmit = event => {
    const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = this.state;

    event.preventDefault();

    getFlights(flightFrom, flightTo, dateFlightFrom, dateFlightTo)
      .then(response => {
        this.props.refreshflightsList(response);
        this.setState({
          flightFrom: response.flightFrom,
          flightTo: response.flightTo,
          dateFlightFrom: response.fromDate,
          dateFlightTo: response.toDate,
          flightsDataInbound: response.flightsDataInbound,
          flightsDataOutbound: response.flightsDataOutbound
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <br />

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
                value={this.state.flightFrom || ""}
                placeholder="Origin airport IATA Code"
                required
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
                value={this.state.flightTo || ""}
                placeholder="Destination airport IATA Code"
                required
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
                value={getFormDate(this.state.dateFlightFrom)}
                min={getFormDate(getToday(0))}
                required
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
                value={getFormDate(this.state.dateFlightTo)}
                min={getFormDate(getToday(0))}
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
