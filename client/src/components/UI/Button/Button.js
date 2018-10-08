import React from 'react';

const Button = (props, Component) => {
  return (
    <button>
      <Component {...props} />
    </button>
  );
};
