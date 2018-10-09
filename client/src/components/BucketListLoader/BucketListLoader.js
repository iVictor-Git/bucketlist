import React from 'react';

const BucketListLoader = (id) => (QueryComponent) => (props) => {
  return (
    <QueryComponent id={id} {...props} />
  )
}

export default BucketListLoader;