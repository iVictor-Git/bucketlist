import React, { Component } from 'react';
import './App.css';

import AppTitleBar from './components/AppTitleBar/AppTitleBar';

import Navigation from './components/Navigation/Navigation';
import View from './components/UI/View/View';
import HomeView from './components/HomeView/HomeView';
// mobile first approach

import { Route, Switch } from 'react-router-dom';
import BucketView from './components/BucketView/BucketView';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AppTitleBar />
          <View className="View">
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/bucket" component={BucketView} />
              <Route component={() => <h1>Not Found</h1>} />
            </Switch>
          </View>
          <Navigation />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
