import React from 'react';
import './TitleBar.css';

export default ({ children, style, className }) => {
  return (
    <header className={`TitleBar ${className}`} style={style}>
      {children}
    </header>
  );
};
