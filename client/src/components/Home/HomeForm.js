import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getAll } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";
import {
  getToday,
  getFormDate,
  getDateApi,
  getDatePlus
} from "../../services/DateTimeFormating";

export default class HomeForm extends Component {
  state = {
    flightFrom: "",
    flightTo: "",
    dateFlightFrom: getToday(1),
    dateFlightTo: getToday(4),
    flightsDataInbound: [],
    flightsDataOutbound: []
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log(name, value);
  };

  handleDateFlightFromChange = event => {
    let newDateFrom = new Date(event.target.value);
    let newDateTo = new Date(this.state.dateFlightTo);
    if (newDateFrom > newDateTo) {
      this.setState({
        dateFlightFrom: newDateFrom,
        dateFlightTo: getDatePlus(newDateFrom, 1)
      });
    } else {
      this.setState({
        dateFlightFrom: newDateFrom
      });
    }
  };

  handleDateFlightToChange = event => {
    let newDateFrom = new Date(this.state.dateFlightFrom);
    let newDateTo = new Date(event.target.value);
    if (newDateFrom > newDateTo) {
      this.setState({
        dateFlightFrom: getDatePlus(newDateTo, -1),
        dateFlightTo: newDateTo
      });
    } else {
      this.setState({
        dateFlightTo: newDateTo
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const { flightFrom, flightTo, dateFlightFrom, dateFlightTo } = this.state;

    trackPromise(
      getAll(
        flightFrom,
        flightTo,
        getDateApi(dateFlightFrom),
        getDateApi(dateFlightTo)
      ).then(response => {
        console.log(response[3].activities);
        this.props.refreshHomeList(response[0].ScheduleResource.Schedule,response[1].ScheduleResource.Schedule,response[2].hotels,response[3].activities);
        this.setState({
          flightsDataInbound: response[0].ScheduleResource.Schedule,
          flightsDataOutbound: response[1].ScheduleResource.Schedule,
          hotelDetails: response[2].hotels,
          activitiesDetails: response[3].activities
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
            <Col lg="3">
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

            <Col lg="3">
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

            <Col lg="3">
              <Form.Label htmlFor="dateFlightFrom">Depart</Form.Label>

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

            <Col lg="3">
              <Form.Label htmlFor="dateFlightTo">Return</Form.Label>

              <Form.Control
                type="date"
                onChange={this.handleDateFlightToChange}
                id="dateFlightTo"
                name="dateFlightTo"
                value={getFormDate(this.state.dateFlightTo)}
                min={getFormDate(getToday(0))}
                required
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <br />
              <Button type="submit" size="lg">Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
