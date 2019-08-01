import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Flights from "./containers/Flights";
import Hotels from "./containers/Hotels";
import HotelDetails from "./containers/HotelDetails";
import Activities from "./containers/Activities";
import ActivityDetails from "./containers/ActivityDetails";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Flights" component={Flights} />
        <Route exact path="/Hotels" component={Hotels} />
        <Route exact path="/Hotels/:id" component={HotelDetails} />
        <Route exact path="/Activities" component={Activities} />
        <Route exact path="/Activities/:id" component={ActivityDetails} />
      </Switch>
    </>
  );
}

export default App;
