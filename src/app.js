import React, { Component } from 'react';
import { render } from 'react-dom';

require('./sidePane.styl');

class Hello extends Component {
  
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div className="side-pane">  
        <div className="primary">
          <button className="item">
            <i className="" />
          </button> 
        </div>
      </div>
    );
  }
}

render(<Hello/>, document.getElementById('app'));
