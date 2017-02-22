import React, { Component,PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import HomeLI from '../pages/Home_LoggedIn.jsx'
import Home from '../pages/Home.jsx'
import LoggedOutNav from './LoggedOutNav.jsx'
import LoggedInNav from './LoggedInNav.jsx'
import {browserHistory, Link} from '../../client/startup/route.jsx'
import '../../api/lists/User.js'
export default class NavigationBar extends Component{
  constructor () {
    super();
        this.state={
           isLoggedIn : User.isLoggedIn()
        };
    }
  logout() {
  Meteor.logout((er)=>{
    if(er) {
      Materialize.toast(er.reason, 4000);
    } else {
      this.setState({isLoggedIn: !this.state.isLoggedIn});
      browserHistory.push('/');
    }
  });
}
  render(){
    var navigationStyle = {
        backgroundColor: "#607d8b",
        paddingLeft: "16px"
      }
      var navOptions = User.isLoggedIn() ? <LoggedInNav logout={this.logout} /> : <LoggedOutNav />;
    return(
      <nav style={navigationStyle}>
        <div className="nav-wrapper">
            {navOptions}
          </div>
      </nav>
    );
  }
}
NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
};