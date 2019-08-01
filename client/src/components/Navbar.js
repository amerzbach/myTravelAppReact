import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class CustomNavbar extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    background: "transparentNav"
  };

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      this.setState({
        prevScrollpos: currentScrollPos,
        background: "transparentNav"
      })
    } else {
      this.setState({
        prevScrollpos: currentScrollPos,
        background: "colorNav"
      })
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Navbar
        className={"nav fixed-top " + this.state.background}
        variant="dark"
      >
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
  }
}
