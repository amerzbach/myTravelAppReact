import React, { Component } from 'react'
import { getActivityDetails } from "../services/Api";

export default class ActivityDetails extends Component {
  state = {
    activityDetails: {}
  };

  getActivityData = () => {
    const activityId = this.props.match.params.id;

    return getActivityDetails(activityId)
      .then(response => {
        this.setState({
          activityDetails: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getActivityData();
  }


  render() {
    return (
      <div>
        <h1>{this.state.activityDetails.name}</h1>

        <div dangerouslySetInnerHTML={{ __html: this.state.activityDetails.description }} align="left"/>
      </div>
    )
  }
}
