import React from 'react';

export default ({ source, alt, className, style }) => {
  return (
    <div className={`${className} Logo`}>
      <img src={source} alt={alt} style={style} />
    </div>
  );
};

