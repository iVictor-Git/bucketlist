import React from 'react';

export default ({ className, style, text }) => {
  return (
    <h1 className={className} style={style}>
      {text}
    </h1>
  );
};
