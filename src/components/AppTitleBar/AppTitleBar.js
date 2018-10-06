import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import { MdSettings, MdFlight } from 'react-icons/md';
import Icon from '../UI/Icon/Icon';
import Text from '../UI/Text/Text';
import { Link } from 'react-router-dom';

import './AppTitleBar.css';
export default () => {
  return (
    <TitleBar
      className="AppTitleBar"
      style={{ borderBottom: '1px solid white' }}>
      <Link to="/" style={{ color: 'white' }}>
        <Text text={MdFlight} className="Left-Logo" />
      </Link>
      <Text text="Bucket List" />
      <Link to="/setting" style={{ color: 'white' }}>
        <Text text={MdSettings} className="Right-Logo" />
      </Link>
    </TitleBar>
  );
};
