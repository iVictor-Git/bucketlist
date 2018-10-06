import React from 'react';
import BucketListLoader from '../BucketListLoader/BucketListLoader';
import BucketDetails from '../BucketListPreview/BucketListPreview';

export default ({match, location, history}) => {
  const path = location.pathname.split('/')
  const indexOfId = path.indexOf('bucket') + 1

  const id = path[indexOfId]

  const ExtraProps = BucketListLoader({id: id, max: 1000})
  const FullBucketDetails = ExtraProps(BucketDetails)

  return <FullBucketDetails max={1000} textStyle='Detail' />;
};
