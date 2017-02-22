import React, { Component,PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import HomeLI from '../pages/Home_LoggedIn.jsx'
import Home from '../pages/Home.jsx'
import NavigationBar from './Nav'
import LoggedInNav from './LoggedInNav.jsx'
export default class LoggedOutNav extends Component{
  render(){
  var navigationStyle = {
      backgroundColor: "#607d8b",
      paddingLeft: "16px"
    }
    return(
      <nav style={navigationStyle}>
        <div className="nav-wrapper">
          <div className="brand-logo">ChatRo</div>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='login'>Sign In</Link></li>
            <li><Link to='signup'>Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
