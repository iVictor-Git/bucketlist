import React, { Component } from 'react';
import { getBucketList } from '../../data/api';


const BucketListLoader = (id) => (QueryComponent) => (props) => {
  return (
    <QueryComponent id={id} {...props} />
  )
}

export default BucketListLoader;