import React, { Component } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { getHotels } from "../../services/Api";
import { trackPromise } from "react-promise-tracker";
import {
  getToday,
  getFormDate,
  getDateApi,
  getDatePlus
} from "../../services/DateTimeFormating";

export default class HotelsForm extends Component {
  state = {
    flightTo: "",
    dateFlightFrom: getToday(0),
    dateFlightTo: getToday(1),
    hotelsData: [],
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleDateFlightFromChange = event => {
    let newDateFrom = new Date(event.target.value);
    let newDateTo = new Date(this.state.dateFlightTo);

    if (newDateFrom >= newDateTo) {
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
    if (newDateFrom >= newDateTo) {
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

    const { flightTo, dateFlightFrom, dateFlightTo } = this.state;

    trackPromise(
      getHotels(
        flightTo,
        getDateApi(dateFlightFrom),
        getDateApi(dateFlightTo)
      ).then(response => {
        this.props.refreshHotelsList(response);
        this.setState({
          hotelsData: response.hotelsData
        });
      })
    ).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div align="center">
        <Container>
          <Row>
            <Col lg={true}>
              <Form onSubmit={this.handleSubmit} style={{ width: "95%" }}>
                <Form.Row>
                  <Col lg="4">
                    <Form.Label htmlFor="flightTo">
                      <h5>Hotel Location</h5>
                    </Form.Label>

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

                  <Col lg="4">
                    <Form.Label htmlFor="dateFlightFrom">
                      <h5>Date From</h5>
                    </Form.Label>

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

                  <Col lg="4">
                    <Form.Label htmlFor="dateFlightTo">
                      <h5>Date To</h5>
                    </Form.Label>

                    <Form.Control
                      type="date"
                      onChange={this.handleDateFlightToChange}
                      id="dateFlightTo"
                      name="dateFlightTo"
                      value={getFormDate(this.state.dateFlightTo)}
                      min={getFormDate(getToday(1))}
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <br />
                    <Button type="submit" size="lg">Hotel Search</Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
