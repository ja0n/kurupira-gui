import React, { Component } from 'react';
import { render } from 'react-dom';


//Components
import AppBar from 'material-ui/lib/app-bar';
import FloatingToolBox from './components/FloatingToolBox/';
import Canvas from './components/Canvas';

require('./app.styl');

const App = () => (
  <div className="app">
    <AppBar title="Kurupira" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <FloatingToolBox />
    <Canvas />
   
  </div>
);

render(<App />, document.getElementById('app'));
