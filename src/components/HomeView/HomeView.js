import React from 'react';
import AddBucketListItemButton from '../AddBucketListButton/AddBucketListItemButton';
import withBucketList from '../BucketList/BucketList';
import List from '../UI/List/List';

export default () => {
  const BucketList = withBucketList(List);

  return (
    <React.Fragment>
      <BucketList className="BucketList" />
      <AddBucketListItemButton />
    </React.Fragment>
  );
};
