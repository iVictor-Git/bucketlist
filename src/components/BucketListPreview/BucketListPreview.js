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

export default ({title, hearts, text, max, sectionStyle, textStyle}) => {
  console.log(max, sectionStyle);
  const transformedText = evalulateText(text, max);

  return (
    <section className={`BucketListPreview ${sectionStyle}`}>
      <BucketListTitleBar title={title} hearts={hearts} />
      <Text text={transformedText} className={`BucketListTextPreview ${textStyle}`}/>
    </section>
  );
};
