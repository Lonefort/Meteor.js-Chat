import React, { Component,PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import {browserHistory, Link} from 'react-router'
import HomeLI from '../pages/Home_LoggedIn.jsx'
import Home from '../pages/Home.jsx'
import NavigationBar from './Nav'
import LoggedOutNav from './LoggedOutNav.jsx'
import '../../client/startup/route.jsx'
import '../../api/lists/User.js'
export default class LoggedInNav extends Component{
  constructor () {
    super();
        this.state={
           isLoggedIn : User.isLoggedIn()
        }
    }
  logout() {
  Meteor.logout((er)=>{
    if(er) {
      Materialize.toast(er.reason, 4000);
    } else {
      this.setState({isLoggedIn: !this.state.isLoggedIn});
    }
  });
}
  render(){
  var navigationStyle = {
      backgroundColor: "#607d8b",
      paddingLeft: "16px"
    }
    return(
      <nav style={navigationStyle}>
        <div className="nav-wrapper">
          <Link to="homeli" className="brand-logo">ChatRo</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to='Red'>Chat</Link></li>
            <li><Link to='settings'>Settings</Link></li>
            <li><Link to='/' onClick={this.logout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
