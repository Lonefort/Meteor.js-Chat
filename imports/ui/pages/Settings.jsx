import React, {Component, PropTypes} from 'react'
import { browserHistory } from 'react-router'
import LoggedInNav from '../layouts/LoggedInNav.jsx'
import { check } from 'meteor/check'
import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base'
import './SCSS/Settings.scss'
export default class Settings extends Component{
  changeName(e){
    e.preventDefault();
    let new_username = document.getElementById('new_username').value;
  if(new_username != ""){
    Meteor.apply('changeUsername',[{
      new_username : new_username,
    }]);
    Materialize.toast("Your NickName has been changed!",5000)
  }
  else{
    Materialize.toast("Enter a valid NickName!",5000);
  }
}
changeMail(e){
  e.preventDefault();
  let new_email = document.getElementById('new_email').value;
  let conf_new_email = document.getElementById('conf_new_email').value;
  if (new_email === conf_new_email && new_email !== "" && conf_new_email !== ""){
    Meteor.apply('changeEmail',[{
      new_email : new_email,
      conf_new_email : conf_new_email,
    }]);
    Materialize.toast("Your Email has been changed!",5000)
  }
  else{
    Materialize.toast("Your emails don't match try again!",5000);
  }
}
changePwd(e){
  e.preventDefault();
  let new_password = document.getElementById('new_password').value;
  let conf_new_password = document.getElementById('conf_new_password').value;
  if(new_password === conf_new_password && new_password !== "" && conf_new_password !== ""){
    Meteor.apply('changePswd',[{
      new_password : new_password,
      conf_new_password : conf_new_password,
    }]);
    Materialize.toast("Your password has been changed!",5000)
    browserHistory.push("/")
    Materialize.toast("Sign In With your new password!",7000)
  }
  else{
    Materialize.toast("Passwords don't match! Try again!",5000)
  }
}
  render(){
    return(
      <div>
      <LoggedInNav />
      <div className="row">
        <h2>Change Info</h2>
          <form className="col s12" onSubmit={this.changeName}>
          <div className="row">
            <div className="input-field col s12">
              <input id="new_username" type="text" className="validate"></input>
              <label htmlFor="new_username">Enter New NickName</label>
            </div>
          </div>
          <div className="button_wrap">
          <button className="waves-effect waves-light btn">Change NickName</button>
          </div>
        </form>
        <form className="col s12" onSubmit={this.changeMail}>
          <div className="row">
            <div className="input-field col s12">
              <input id="new_email" type="text" className="validate"></input>
              <label htmlFor="new_email">Enter a New Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="conf_new_email" type="text" className="validate"></input>
              <label htmlFor="conf_new_email">Confirm a New Email</label>
            </div>
          </div>
          <div className="button_wrap">
          <button className="waves-effect waves-light btn">Change Email</button>
          </div>
          </form>
          <form className="col s12" onSubmit={this.changePwd}>
          <div className="row">
            <div className="input-field col s12">
              <input id="new_password" type="password" className="validate"></input>
              <label htmlFor="new_password">Enter New Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="conf_new_password" type="password" className="validate"></input>
              <label htmlFor="conf_new_password">Confirm New Password</label>
            </div>
          </div>
          <div className="button_wrap">
          <button className="waves-effect waves-light btn">Change Password</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
