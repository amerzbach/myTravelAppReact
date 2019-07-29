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
            // const url = {{activity.media.images.urls}}.find(({activity.media.images.urls.sizeType}==="XLARGE"))
            // console.log (url)

            return (
              <div>
                <Link to={`/Activities/${activity.code}`}>
                  <h1>{activity.content.name}</h1>
                </Link>
                <img
                  src={`${activity.content.media.images[0].urls[2].resource}`}
                  alt="Activity"
                  align="right"
                />
                
                <div dangerouslySetInnerHTML={{ __html: activity.content.description }} align="left"/>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ActivitiesList;
