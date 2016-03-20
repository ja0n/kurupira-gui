import React, { Component } from 'react';
import { render } from 'react-dom';


//Components
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';

require('./app.styl');

const App = () => (
  <div className="app">
    <AppBar title="Kurupira" iconClassNameRight="muidocs-icon-navigation-expand-more" />
  </div>
);

render(<App />, document.getElementById('app'));
