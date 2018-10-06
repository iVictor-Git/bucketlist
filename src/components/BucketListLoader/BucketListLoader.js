import React, { Component } from 'react';

export default WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      console.log('mounted');
    }

    render() {
      return <WrappedComponent {...this.state.data} />;
    }
  };
};
