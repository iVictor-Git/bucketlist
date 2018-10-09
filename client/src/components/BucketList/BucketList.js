import React from 'react';

const BucketListWrapper = (QueryComponent) => (WrappedComponent) => (props) => {
  return (
    <WrappedComponent {...props}>
      <QueryComponent />
    </WrappedComponent>
  )
}

export default BucketListWrapper;