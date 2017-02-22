import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import Home from '../../ui/pages/Home.jsx'
import RegisForm from '../../ui/pages/RegisForm.jsx'
import Login from '../../ui/pages/Login.jsx'
import HomeLI from '../../ui/pages/Home_LoggedIn.jsx'
import Settings from '../../ui/pages/Settings.jsx'
import Chat from '../../ui/pages/Chat.jsx'
import Rooms from '../../ui/pages/Rooms.jsx'
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="signup" component={RegisForm}/>
    <Route path="login" component={Login}/>
    <Route path="homeli" component={HomeLI}/>
    <Route path="settings" component={Settings}/>
    <Route path="chat" component={Chat}/>
    <Route path=":room" component={Chat}/>
  </Router>
);
