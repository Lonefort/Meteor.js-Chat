import React, { Component, PropTypes } from 'react';
import { Messages } from '../../api/lists/messages.js';
import { Meteor } from 'meteor/meteor'
import './SCSS/Chat.scss'
export default class Message extends Component {
  render() {
    cur = this.props.message.username;
return(
      <li className="msg">
        <p className="nick">{cur}:</p>
        <span>{this.props.message.text}</span>
        </li>
);
  }}
Message.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  message: PropTypes.object.isRequired,
};
