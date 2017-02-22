  import React, { Component, PropTypes} from 'react'
import './SCSS/Chat.scss'
import LoggedInNav from '../layouts/LoggedInNav.jsx'
import ReactDOM from 'react-dom'
import {browserHistory, Link} from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import Message from './Message.jsx'
import { Messages } from '../../api/lists/messages.js'
import {Container, Chat} from './Chat.jsx'
export default class Rooms extends Component{
// Task component - represents a single todo item

 constructor(props) {
    super(props);
    this.state = {value: 'Red'};

    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event) {
  	 
     this.setState({value: event.target.value});
        browserHistory.push(event.target.value);

  }
  render() {
    return (
    <form>
            <button id="b" className="waves-effect waves-light btn-large red" value="/Red" onClick={this.handleChange}>Red Room</button>
            <button id="b" className="waves-effect waves-light btn-large black" value="/Black" onClick={this.handleChange}>Black Room</button>
            <button id="b" className="waves-effect waves-light btn-large purple" value="/Purple" onClick={this.handleChange}>Purple Room</button>
            <button id="b" className="waves-effect waves-light btn-large blue" value="/Blue" onClick={this.handleChange}>Blue Room</button>
      </form>
    );
  }
}