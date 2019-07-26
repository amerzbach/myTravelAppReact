import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Switch,Route } from "react-router-dom";
import Flights  from "./containers/Flights";
import Hotels from "./containers/Hotels";
import Bikes from "./containers/Bikes";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/Flights" component={Flights} />
        <Route exact path="/Hotels" component={Hotels} />
        <Route exact path="/Bikes" component={Bikes} />
      </Switch>
    </div>
  );
}

export default App;
