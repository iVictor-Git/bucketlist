import React from 'react';

import { MdAdd } from 'react-icons/md';

import Text from '../UI/Text/Text';

import './AddBucketItemButton.css';

export default () => (
  <Text
    text={MdAdd}
    alt="add bucketlist"
    className="Add-BucketList-Button"
    // divStyle={{ height: '30px' }}
  />
);
