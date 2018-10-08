import React, { Component } from 'react';
import './Modal.css';

export default ({ children, title, className }) => {
  return (
    <section className={className}>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </section>
  );
};
