import React from 'react';

export default ({ source, alt, className, style, clickHander }) => {
  return (
    <div className={`${className} Logo`}>
      <img src={source} alt={alt} style={style} />
    </div>
  );
};
