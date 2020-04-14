import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
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
    const { scenes } = this.props;
    console.log(this.props.scenes);
    let tv = this.directorInstance = new DirectorMode(this.refs.canvas);

    let data = scenes.data[scenes.selectedIndex];

    tv.runGame = function() {
      localStorage.setItem('stage', JSON.stringify(data));
      window.open('/runner.html', '_blank', 'height=650,width=850');
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

        <FlatButton label="Run" secondary={true} onClick={() => this.directorInstance.runGame()} />
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    scenes: state.scenes,
  };
}

export default connect(mapStateToProps)(Canvas);
