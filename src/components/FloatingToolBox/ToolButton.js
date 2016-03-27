import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

const defaultStyle = {
  display: 'inline-block',
  marginBottom: '10px'
};

const ToolButton  = ({ children, style, onClick }) => (
    <FloatingActionButton
      mini={true}
      style={{ ...defaultStyle, ...style }}
      onClick={onClick}
      >
      {children}
    </FloatingActionButton>
);

export default ToolButton;
