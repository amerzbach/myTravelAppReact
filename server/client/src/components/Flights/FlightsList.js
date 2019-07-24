import React, { Component } from "react";
import { Form, Button, Col, Table } from "react-bootstrap";

export default class FlightsList extends Component {
  
  
  render() {
  
    console.log({this.props.flights.flightsDataInbound})

    return (
      <div>
        
        
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Airline</th>
                <th>Flight</th>
                <th>Date</th>
                <th>Dep</th>
                <th>Arr</th>
              </tr>
            </thead>
          </Table>
        
        
      </div>
    );
  }
}
