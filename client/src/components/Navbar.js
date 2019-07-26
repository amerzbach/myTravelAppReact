import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

const CustomNavbar = () => {
  return (
    <Navbar className="nav" bg="primary" variant="dark">
      <Navbar.Brand href="/">myTravelApp v1</Navbar.Brand>
      <Navbar.Brand href="/Flights">Flights</Navbar.Brand>
      <Navbar.Brand href="/Hotels">Hotels</Navbar.Brand>
      <Navbar.Brand href="/Bikes">Bikes</Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
