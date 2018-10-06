import React, { Component } from 'react';
import './App.css';

import AppTitleBar from './components/AppTitleBar/AppTitleBar';
import List from './components/UI/List/List';
import withBucketList from './components/BucketList/BucketList';

// mobile first approach

class App extends Component {
  render() {
    const BucketList = withBucketList(List);

    return (
      <div className="App">
        <AppTitleBar />
        <BucketList className='BucketList'/>
      </div>
    );
  }
}

export default App;
