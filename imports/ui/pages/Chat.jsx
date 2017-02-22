import React, { Component, PropTypes} from 'react'
import './SCSS/Chat.scss'
import LoggedInNav from '../layouts/LoggedInNav.jsx'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import Message from './Message.jsx'
import { Messages } from '../../api/lists/messages.js'
import Rooms from './Rooms.jsx'
class Chat extends Component{
  handleSubmit(e) {
    e.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const room = this.props.params.room;
     Meteor.apply('messages.insert',[{
      text:text,
      room:room,
    }],
       (error,result)=>{
       if (error){
         Materialize.toast(error.reason);
       }
   else{
      return result;
   }
     });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
    renderMessages() {
    return this.props.messages.map((message) => (
      <Message key={message._id} message={message} />
    ));
  }
  render(){
    return(
      <div>
       <LoggedInNav />
       <h2>To Start Chatting, choose on of the rooms beneath!</h2>
       <div className="container">
         <Rooms />
          <form className="messages" onSubmit={this.handleSubmit.bind(this)}>
          <input className="input" ref="textInput" type="text" className="validate" placeholder="Enter"></input>
      </form>
      <div id="messageBox">
      <ul>
        {this.renderMessages()}
      </ul>
      </div>
      </div>
      </div>
    );
  }
}
export default Container = createContainer(({params}) => {
  let room = params.room;
  Meteor.subscribe('messages');
  return {
    messages: Messages.find({"room":room}, { sort: { createdAt: -1 } }).fetch(),
  };
}, Chat);
Chat.propTypes = {
  messages: PropTypes.array.isRequired,
};