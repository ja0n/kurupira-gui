import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import FloatingToolBox from './FloatingToolBox/';
import Canvas from './Canvas';
import RightPanel from './RightPanel';

require('../styles/app.styl');

const App = () => (
  <div className="app">
    <AppBar title="Kurupira" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <div className="content">
      <FloatingToolBox />
      <Canvas />
      <RightPanel />
    </div>
  </div>
);

export default App;
