import React from 'react';
import BucketListLoader from '../BucketListLoader/BucketListLoader';
import BucketDetails from '../BucketListPreview/BucketListPreview';

export default props => {
  console.log(props);
  const FullBucketDetails = BucketListLoader(BucketDetails);

  return <FullBucketDetails />;
};
