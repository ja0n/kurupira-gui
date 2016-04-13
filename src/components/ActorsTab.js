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

const ActorListItem = (actor) => (
  <div> 
    <ListItem
      leftAvatar={<Avatar src={actor.render.sprite.texture} />}
      rightIconButton={rightIconMenu}
      primaryText={'actor'}
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

class ActorsTab extends Component {
  render() {
    const { scenes } = this.props;

    const { actors } = scenes.data[scenes.selectedIndex];
    console.log(actors);

    return (
      <div className={'actors-tab'}>
        <List>
          {actors.map((actor, icx) => <ActorListItem key={icx} { ...actor } />)}
        </List>
        <div className={'content'}>
          <TextField
            hintText="actor Name"
            defaultValue={scenes.data[scenes.selectedIndex].name}
          /><br/>
        </div>
      </div>
    );
  }
}

ActorsTab.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scenes: PropTypes.object.isRequired, 
};

function mapStateToProps(state) {
  const { scenes } = state;

  return {
    scenes,
  };
}

export default connect(mapStateToProps)(ActorsTab);
