import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/client/startup/route'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
