import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import './SCSS/Home.scss'
import '../../client/startup/route.jsx'
import '../../api/lists/User.js'
export default class HomeLI extends Component{
  constructor (props) {
        super(props);
        this.state = {
            videoURL: 'https://static.videezy.com/system/resources/previews/000/003/492/original/typing.mp4'
        }
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
    return(
      <div>
        <div className="logout_b">
        <Link to="/"><button onClick={this.logout} className="waves-effect waves-light btn-large transparent">Sign out</button></Link>
        </div>
  <article>
    <h1>
    Welcome to ChatRo!
    <br />
    <span>Made by Stadnik Yuri, for KeenEthics</span>
    </h1>
  </article>
      <video className="video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
      </video>
    </div>
    );
  }
}
