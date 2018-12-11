import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import '../App.css'

class UserProfile extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){

    return (

      <div className="profile-page">
        <h1>About: {this.props.currentUser.username}</h1>

        <hr></hr>
        <h4>{this.props.currentUser.bio}</h4>
      </div>
    )
  }
}
export default UserProfile;
