import React, { Component } from 'react';
import './App.css';

import AppTitleBar from './components/AppTitleBar/AppTitleBar';

import Navigation from './components/Navigation/Navigation';
import View from './components/UI/View/View';
import HomeView from './components/HomeView/HomeView';
// mobile first approach

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppTitleBar />
        <View className="View">
          <HomeView />
        </View>
        <Navigation />
      </div>
    );
  }
}

export default App;
