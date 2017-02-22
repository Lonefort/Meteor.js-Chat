import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import NavigationBar from '../layouts/Nav.jsx'
import { Meteor } from 'meteor/meteor'
import './SCSS/Log.scss'
import '../../api/lists/User.js'
export default class Login extends Component{
  loginUser(e) {
    e.preventDefault();
    const
      email = $('#email').val(),
      password = $('#password').val().trim();
    Meteor.loginWithPassword(email,password, (error)=>{
      if(error){
        Materialize.toast(error.reason,5000);
      }
      else {
        browserHistory.push("/chat");
        Materialize.toast("Welcome back"+", "+Meteor.user().username+"!",5000);
      }
    });
    }
  render(){
    return(
      <div>
    <NavigationBar />
    <div className="row">
      <h2>Log In</h2>
      <form className="col s12" onSubmit={this.loginUser}>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"></input>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"></input>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="button_wrap">
        <button className="waves-effect waves-light btn">Submit</button>
        </div>
      </form>
    </div>
    </div>

    );
  }
}
