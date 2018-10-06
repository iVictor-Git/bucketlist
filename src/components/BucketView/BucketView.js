import React from 'react';
import BucketListLoader from '../BucketListLoader/BucketListLoader';
import BucketDetails from '../BucketListPreview';

export default props => {
  const FullBucketDetails = BucketListLoader(BucketDetails);
};
