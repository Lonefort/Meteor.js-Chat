import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './SCSS/Home.scss'
export default class Home extends Component{
  constructor (props) {
        super(props);
        this.state = {
            videoURL: 'https://static.videezy.com/system/resources/previews/000/005/456/original/Earth_Eclipse_Rotate_Medium.mp4'
        }
    }
  render(){
    return(
      <div>
        <div className="signup_b">
        <Link to="/signup"><button className="waves-effect waves-light btn-large transparent">Sign Up</button></Link>
        </div>
        <div className="signin_b">
        <Link to="/login"><button className="waves-effect waves-light btn-large transparent">Sign In</button></Link>
        </div>
  <article>
    <h1>
    Welcome to Chat!
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
