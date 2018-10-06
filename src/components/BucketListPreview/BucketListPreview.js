import React from 'react';

import './BucketListPreview.css';
import BucketListTitleBar from '../BucketListTitleBar/BucketListTitleBar';
import Text from '../UI/Text/Text';

// this is going to obtain the heart count somehow

const transformText = (text = '', max) => {
  return text.slice(0, max).concat('...');
};

const evalulateText = (text = '', max) => {
  return text.length < max ? text : transformText(text, max);
};

export default ({
  title = 'Some title',
  hearts = 0,
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit,',
}) => {
  const transformedText = evalulateText(text, 160);

  return (
    <section className="BucketListPreview">
      <BucketListTitleBar title={title} hearts={hearts} />
      <Text text={transformedText} className="BucketListTextPreview" />
    </section>
  );
};
