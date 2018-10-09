import React, { Component } from 'react';
import withBucketListWrapper from '../BucketList/BucketList';
import List from '../UI/List/List';

import './HomeView.css';
import ModalControl from '../ModalControl/ModalControl';

import QueryBucketLists from '../QueryBucketLists/QueryBucketLists'

class HomeView extends Component {
  render() {
    const BucketList = withBucketListWrapper(QueryBucketLists)(List);

    return (
      <section className="HomeView">
        <BucketList className="BucketList" />
        <ModalControl />
      </section>
    );
  }
}

export default HomeView;
