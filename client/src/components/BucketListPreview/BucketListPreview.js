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

const BucketListPreview = ({title, hearts, text, max, className}) => {
  const transformedText = evalulateText(text, max);

  return (
    <section className={className}>
      <BucketListTitleBar title={title} hearts={hearts} />
      <Text text={transformedText} className='BucketListTextPreview Text'/>
    </section>
  );
};


export default BucketListPreview