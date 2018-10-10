import React from 'react';

import { MdAdd } from 'react-icons/md';

import Text from '../UI/Text/Text';

import './AddBucketItemButton.css';

const AddBucketListItemButton = ({ onClick }) => (
  <Text
    text={MdAdd}
    alt="add bucketlist"
    className="Add-BucketList-Button"
    onClick={onClick}
    // divStyle={{ height: '30px' }}
  />
);

export default AddBucketListItemButton;
