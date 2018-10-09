import React from 'react';
import BucketListLoader from '../BucketListLoader/BucketListLoader';
import QueryBucketLists from '../QueryBucketLists/QueryBucketLists'

const BucketView = ({match, location, history}) => {
  const path = location.pathname.split('/')
  const indexOfId = path.indexOf('bucket') + 1

  const id = path[indexOfId]

  const FullBucketListDetail = BucketListLoader(id)(QueryBucketLists)

  return <FullBucketListDetail max={1000} className='BucketListPreview BucketListTextPreview Detail' />;
};

export default BucketView;