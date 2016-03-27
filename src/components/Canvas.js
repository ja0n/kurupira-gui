import React from 'react';
import Paper from 'material-ui/lib/paper';
import DirectorMode from '../../DirectorMode';

const style = {
  height: 400,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let tv = this.directorInstance = new DirectorMode(this.refs.canvas);

    let data = require('json!../model.json');

    tv.runGame = function() {
      localStorage.stage = JSON.stringify(data);
      window.open('/public/runner.html', '_blank', 'height=650,width=850');
    };

    //  tv.runCycle();

    tv.loadScene(data);
    tv.onSelect = (actor) => {
      console.log(actor);
    };

    tv.onDrag = () => {
    };
  }

  render() {
    return (
      <Paper style={style} zDepth={1}>
        <canvas width="600" height="400" ref="canvas">
          no support
        </canvas>

      </Paper>
    );
  }
}

export default Canvas;
