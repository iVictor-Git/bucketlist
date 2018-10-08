import React, { Component } from 'react';
import withBucketList from '../BucketList/BucketList';
import List from '../UI/List/List';

import './HomeView.css';
import ModalControl from '../ModalControl/ModalControl';

class HomeView extends Component {
  
  render() {
    const BucketList = withBucketList(List);

    return (
      <section className='HomeView'>
        <BucketList className="BucketList" />
        <ModalControl />
      </section>
    );
  }
}

export default HomeView