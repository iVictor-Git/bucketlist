import React, { Component } from 'react';
import { getBucketLists } from '../../data/api';


const BucketListWrapper = (QueryComponent) => (WrappedComponent) => (props) => {
  return (
    <WrappedComponent {...props}>
      <QueryComponent />
    </WrappedComponent>
  )
}

export default BucketListWrapper;