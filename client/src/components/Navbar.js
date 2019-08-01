import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="nav fixed-top navbar-scroll-point" variant="dark">
      <Navbar.Brand href="/">myTravelApp</Navbar.Brand>
      <Nav.Link href="/Flights" className="navLink">
        Flights
      </Nav.Link>
      <Nav.Link href="/Hotels" className="navLink">
        Hotels
      </Nav.Link>
      <Nav.Link href="/Activities" className="navLink">
        Activities
      </Nav.Link>
    </Navbar>
  );
};

export default CustomNavbar;
