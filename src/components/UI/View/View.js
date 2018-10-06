import React from 'react';
import './View.css';

export default ({ className, children }) => (
  <div className={className}>{children}</div>
);
