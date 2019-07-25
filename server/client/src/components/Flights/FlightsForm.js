import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getFlights } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";
import {
  getToday,
  getFormDate,
  getDateApi
} from "../../services/DateTimeFormating";

export default class FlightsForm extends Component {
  state = {
    flightFrom: "",
    flightTo: "",
    dateFlightFrom: getToday(0),
    dateFlightTo: getToday(0),
    flightsDataInbound: [],
    flightsDataOutbound: [],
    error: "",
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleDateFlightFromChange = event => {
    let newDate = new Date(event.target.value);
    let newDateTo = new Date(this.state.dateFlightTo);
    if (newDate > newDateTo) {
      this.setState({
        dateFlightFrom: newDate,
        dateFlightTo: newDate
      });
    } else {
      this.setState({
        dateFlightFrom: newDate
      });
    }
  };

  handleDateFlightToChange = event => {
    let newDate = new Date(event.target.value);
    console.log(newDate);
    this.setState({
      dateFlightTo: newDate
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = this.state;

    trackPromise(
      getFlights(
        flightFrom,
        flightTo,
        getDateApi(dateFlightFrom),
        getDateApi(dateFlightTo)
      ).then(response => {
        this.props.refreshflightsList(response);
        this.setState({
          flightFrom: response.flightFrom,
          flightTo: response.flightTo,
          dateFlightFrom: new Date(response.dateFlightFrom),
          dateFlightTo: new Date(response.dateFlightTo),
          flightsDataInbound: response.flightsDataInbound,
          flightsDataOutbound: response.flightsDataOutbound,
        });
      })
    ).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div align="center">
        <br />

        <Form onSubmit={this.handleSubmit} style={{ width: "95%" }}>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="flightFrom">From</Form.Label>

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

              <Form.Control
                type="date"
                onChange={this.handleDateFlightFromChange}
                id="dateFlightFrom"
                name="dateFlightFrom"
                value={getFormDate(this.state.dateFlightFrom)}
                min={getFormDate(getToday(0))}
                required
              />
            </Col>

            <Col>
              <Form.Label htmlFor="dateFlightTo">Date To</Form.Label>

              <Form.Control
                type="date"
                onChange={this.handleDateFlightToChange}
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
