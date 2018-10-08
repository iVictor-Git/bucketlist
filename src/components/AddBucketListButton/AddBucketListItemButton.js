import React from 'react';

import { MdAdd } from 'react-icons/md';

import Text from '../UI/Text/Text';

import './AddBucketItemButton.css';

const AddBucketListItemButton = ({toggleModal}) => (
  <Text
    text={MdAdd}
    alt="add bucketlist"
    className="Add-BucketList-Button"
    toggleModal={toggleModal}
    // divStyle={{ height: '30px' }}
  />
);

export default AddBucketListItemButton