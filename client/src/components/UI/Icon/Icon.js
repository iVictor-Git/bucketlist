import React from 'react';

export default ({ source, alt, className, style, divStyle }) => {
  return (
    <div className={`${className} Logo`} style={divStyle}>
      <img src={source} alt={alt} style={style} />
    </div>
  );
};
