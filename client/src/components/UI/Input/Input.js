import React from 'react';

export default props => {
  const { element } = props;
  switch (element) {
    case 'textarea':
      return <textarea {...props}>{props.children}</textarea>;
    case 'button':
      return <button {...props}>{props.children}</button>;
    default:
      return <input {...props} />;
  }
};
