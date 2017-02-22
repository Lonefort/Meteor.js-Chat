import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import NavigationBar from '../layouts/Nav.jsx'
import './SCSS/Reg.scss'
import '../../api/lists/User.js'
export default class RegisForm extends Component{
  createUser(e) {
    e.preventDefault();
    const
      username = $('#username').val().trim(),
      email = $('#email').val(),
      password = $('#password').val().trim(),
      confirm_password = $('#confirm_password').val().trim();
      if(password === confirm_password && password !== "" && confirm_password !== ""){
    Accounts.createUser(
      {
        username: username,
        email: email,
        password: password
      },
      function(error) {
        if (error) {
          Materialize.toast(error.reason,5000);
        } else {
          Materialize.toast("You've sucsessfully signed up!",5000)
          browserHistory.push('/chat');
        };
      }
    );
}
else {
  Materialize.toast("Your passwords don't match!",5000)
}
}
  render(){
    return(
      <div>
    <NavigationBar />
    <div className="row">
      <h2>Sign Up</h2>
      <form className="col s12" onSubmit={this.createUser}>
        <div className="row">
          <div className="input-field col s12">
            <input id="username" type="text"className="validate"></input>
            <label htmlFor="username">Choose a nickname</label>
          </div>
        </div>
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
        <div className="row">
          <div className="input-field col s12">
            <input id="confirm_password" type="password" className="validate"></input>
            <label htmlFor="password">Confirm Password</label>
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
