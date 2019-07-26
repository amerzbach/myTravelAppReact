import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
    <div
      style={{
        position: "absolute",
        zIndex: 2147483647,
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="Plane" color="#ffffff" height="100" width="100" />
</div>
};

ReactDOM.render(
  <BrowserRouter>
    <App />
    <LoadingIndicator/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
