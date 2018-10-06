import React, { Component } from 'react';
import './App.css';

import AppTitleBar from './components/AppTitleBar/AppTitleBar';
import List from './components/UI/List/List';
import withBucketList from './components/BucketList/BucketList';

import AddBucketListItemButton from './components/AddBucketListButton/AddBucketListItemButton';
// mobile first approach

class App extends Component {
  render() {
    const BucketList = withBucketList(List);

    return (
      <div className="App">
        <AppTitleBar />
        <BucketList className="BucketList" />
        <AddBucketListItemButton />
      </div>
    );
  }
}

export default App;
