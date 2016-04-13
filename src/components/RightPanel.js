import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';

import SceneTab from './SceneTab';
import ActorsTab from './ActorsTab';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs: {
    top: 64,
    height: 'calc(100% - 64px)',
  },
};

class PanelTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabValue: 'scenes',
    };
  }

  handleChange = (tabValue) => {
    this.setState({
      tabValue,
    });
  };
  
  render() {
    return (
      <Tabs
        onChange={this.handleChange}
      >
        <Tab label="Scene" value="scenes">
          <SceneTab />
        </Tab>
        <Tab label="Actors" value={'actors'}>
          <ActorsTab />
        </Tab>
      </Tabs>
    );
  }
}

export default class RightPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle LeftNav"
          onTouchTap={this.handleToggle}
          onClick={this.handleToggle}
        />
        <div className={`right-panel ${this.state.open ? 'opened' : ''}`}>
          <PanelTabs />
        </div>
      </div>
    );
  }
}



// <LeftNav open={this.state.open} openRight={true}>
//   <PanelTabs style={styles.tabs} />
// </LeftNav>
