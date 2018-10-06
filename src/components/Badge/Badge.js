import React from 'react';
import './Badge.css';
import Icon from '../UI/Icon/Icon';

import Text from '../UI/Text/Text';

export default ({ number, icon, options: {imageStyle, textStyle} }) => {

  return (
    <div className='Badge'>
      <Icon source={icon} style={imageStyle}/>
      <Text text={number} style={textStyle}/>
    </div>
  );
};
