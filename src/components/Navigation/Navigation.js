import React from 'react';
import Text from '../UI/Text/Text';
import './Navigation.css';

import { MdHome, MdPerson, MdList } from 'react-icons/md';

export default () => {
  // 3 icons, profile, home, bucket
  return (
    <div className="Navigation">
      <Text text={MdPerson} />
      <Text text={MdHome} />
      <Text text={MdList} />
    </div>
  );
};
