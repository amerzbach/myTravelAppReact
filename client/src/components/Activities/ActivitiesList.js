import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, CardDeck, Button } from "react-bootstrap";

const ActivitiesList = props => {
  return (
    <div
      align="center"
      style={{ position: "absolute", zIndex: 1, width: "95%" }}
    >
      <br />

      {props.activitiesData.length > 0 && (
        <div align="center">
          {props.activitiesData.map(activity => {
            return <div><h1>{activity.name}</h1></div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ActivitiesList;
