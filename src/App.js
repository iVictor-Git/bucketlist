import React, { Component } from 'react';
import './App.css';

import TitleBar from './components/TitleBar/TitleBar';

// mobile first approach

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
      </div>
    );
  }
}

export default App;
