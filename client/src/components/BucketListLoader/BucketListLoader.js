import React, { Component } from 'react';
import { getBucketList } from '../../data/api';
import Loader from '../UI/Loader/Loader';

export default ({id, max}) => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount = async () => {
      const data = await getBucketList(id).catch(console.error);
      this.setState(() => ({ data }));
    };

    render() {
      return !this.state.data ? <Loader /> : <WrappedComponent {...this.state.data} {...this.props}/>
    }
  };
};
