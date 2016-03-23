import React, { Component } from 'react';
import { render } from 'react-dom';


//Components
import AppBar from 'material-ui/lib/app-bar';
import FloatingToolBox from './components/FloatingToolBox/';

require('./app.styl');

const App = () => (
  <div className="app">
    <AppBar title="Kurupira" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <FloatingToolBox />
   
  </div>
);

render(<App />, document.getElementById('app'));
