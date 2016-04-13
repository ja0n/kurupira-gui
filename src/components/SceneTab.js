import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import * as Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={Colors.grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const SceneListItem = (scene) => (
  <div> 
    <ListItem
      leftAvatar={<Avatar icon={<FileFolder />} />}
      rightIconButton={rightIconMenu}
      primaryText={scene.name}
      secondaryText={
        <p>
          {(new Date()).toString()} 
        </p>
      }
      secondaryTextLines={1}
      />
    <Divider inset={true} />
  </div>
);

class SceneTab extends Component {
  render() {
    const { scenes } = this.props;

    return (
      <div className={'scene-tab'}>
        <List>
          {scenes.data.map((scene, icx) => <SceneListItem key={icx} { ...scene } />)}
        </List>
        <div className={'content'}>
          <TextField
            hintText="Scene Name"
            defaultValue={scenes.data[scenes.selectedIndex].name}
          /><br/>
        </div>
      </div>
    );
  }
}

SceneTab.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scenes: PropTypes.object.isRequired, 
};

function mapStateToProps(state) {
  const { scenes } = state;

  return {
    scenes,
  };
}

export default connect(mapStateToProps)(SceneTab);
