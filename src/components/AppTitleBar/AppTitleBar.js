import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import Icon from '../UI/Icon/Icon';
import Text from '../UI/Text/Text';
import globeIcon from '../../assets/global-resized.jpg';
import settingIcon from '../../assets/setting-100x100.jpg';

import './AppTitleBar.css';
export default () => {
  return (
  <TitleBar className='AppTitleBar' style={{ borderBottom: '1px solid white' }}>
    <Icon
      source={globeIcon}
      style={{ width: '35px', height: '35px', borderRadius: '15px' }}
      className="Left-Logo"
    />
    <Text text="Bucket List" />
    <Icon
      source={settingIcon}
      style={{ width: '35px', height: '35px', borderRadius: '5px' }}
      className="Right-Logo"
    />
  </TitleBar>
  );
};
