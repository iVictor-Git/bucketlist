import React from 'react';
import './List.css';

export default ({ children, className }) => {
  return (
    <section className={`${className} List`}>
      {children}
    </section>
  );
};
