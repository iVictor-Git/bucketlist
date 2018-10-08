import React from 'react';

import './Backdrop.css';

const backdrop = ({show, toggleModal}) => (
  show ? <div className='Backdrop' onClick={toggleModal}></div> : null
)

export default backdrop;