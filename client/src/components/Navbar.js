import React from "react";
import { Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <Navbar.Brand href="/">ExperienceHub.</Navbar.Brand>
      <Navbar.Brand href="/Flights">FlyHigh</Navbar.Brand>
      <Navbar.Brand href="/Hotels">SleepDeep</Navbar.Brand>
      <Navbar.Brand href="/Activities">ExperienceGuide</Navbar.Brand>
      <Navbar.Brand href="/Signup">SignUp</Navbar.Brand>
      <Navbar.Brand href="/Login">LogIn</Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
