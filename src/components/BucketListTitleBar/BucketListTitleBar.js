import React from 'react';
import Heart from '../../assets/heart-192x144.png';
import Badge from '../Badge/Badge';
import Text from '../UI/Text/Text';
import TitleBar from '../TitleBar/TitleBar';
import Icon from '../UI/Icon/Icon';
import { MdAdd } from 'react-icons/md';
import Plus from '../../assets/plus-59x60.png';

export default ({ title, hearts }) => {
  const options = {
    imageStyle: {
      width: '10px',
      height: '10px',
      paddingLeft: '5px',
      marginBottom: '5px',
    },
    textStyle: {
      fontSize: '7px',
      marginTop: '5px',
      boxSizing: 'border-box',
    },
    icon2: {
      width: '9px',
      height: '9px',
      paddingRight: '7px',
      marginBottom: '10px',
    },
  };

  return (
    <TitleBar className="BucketListTitleBar">
      <Badge icon={Heart} options={options} number={hearts} />
      <Text text={title} />
      <Text text={MdAdd} style={options.icon2} />
    </TitleBar>
  );
};
