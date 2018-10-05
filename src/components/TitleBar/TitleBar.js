import React from 'react';
import Logo from '../UI/Logo/Logo';
import Title from '../UI/Title/Title';
import './TitleBar.css';

import globeIcon from '../../assets/global-resized.jpg';
import settingIcon from '../../assets/setting-100x100.jpg';
export default () => {
  return <header className="TitleBar">
      <Logo source={globeIcon} style={{ width: '35px', height: '35px', borderRadius: '15px' }} className="Left-Logo" />
      <Title text="Bucket List" />
      <Logo source={settingIcon} style={{ width: '35px', height: '35px', borderRadius: '5px' }} className="Right-Logo" />
    </header>;
};
