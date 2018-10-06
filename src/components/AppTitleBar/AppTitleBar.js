import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import { MdSettings, MdFlight } from 'react-icons/md';
import Icon from '../UI/Icon/Icon';
import Text from '../UI/Text/Text';

import './AppTitleBar.css';
export default () => {
  return (
    <TitleBar
      className="AppTitleBar"
      style={{ borderBottom: '1px solid white' }}>
      <Text text={MdFlight} className="Left-Logo" />
      <Text text="Bucket List" />
      <Text text={MdSettings} className="Right-Logo" />
    </TitleBar>
  );
};
