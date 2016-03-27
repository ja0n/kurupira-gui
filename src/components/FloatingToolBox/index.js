import React from 'react';
import ToolButton from './ToolButton';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

require('./style.styl');

const style = {
};

const FloatingToolBox = () => (
  <div className="toolbox">
    <ToolButton style={style} onClick={() => { alert('hey'); }}>
      <ContentAdd />
    </ToolButton>
  </div>
);

export default FloatingToolBox;
