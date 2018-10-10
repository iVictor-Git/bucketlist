import React from 'react';

import './BucketListPreview.css';
import BucketListTitleBar from '../BucketListTitleBar/BucketListTitleBar';
import Text from '../UI/Text/Text';
import {MdClose} from 'react-icons/md'

import DeleteBucketListMutation from '../DeleteBucketListMutation/DeleteBucketListMutation'

// this is going to obtain the heart count somehow

const transformText = (text = '', max) => {
  return text.slice(0, max).concat('...');
};

const evalulateText = (text = '', max) => {
  return text.length < max ? text : transformText(text, max);
};

const BucketListPreview = ({title, hearts, text, max = 160, className}) => {
  const transformedText = evalulateText(text, max);
  const doesIncludeDetail = className.includes('Detail')

  return (
    <section className={className}>
      <BucketListTitleBar title={title} hearts={hearts} />
      <Text text={transformedText} className={`BucketListTextPreview Text ${doesIncludeDetail ? 'Detail' : null}`}/>
      {doesIncludeDetail && <DeleteBucketListMutation />}
    </section>
  );
};


export default BucketListPreview