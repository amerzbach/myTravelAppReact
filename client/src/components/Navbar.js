import React from "react";
import { Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="nav" variant="dark">
      <Navbar.Brand href="/">myTravelApp</Navbar.Brand>
      <Navbar.Brand href="/Flights">Flights</Navbar.Brand>
      <Navbar.Brand href="/Hotels">Hotels</Navbar.Brand>
      <Navbar.Brand href="/Activities">Activities</Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
