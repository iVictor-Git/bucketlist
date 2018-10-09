import React, { Component } from 'react';
import { getBucketLists } from '../../data/api';
import BucketListPreview from '../BucketListPreview/BucketListPreview';
import { Link } from 'react-router-dom';

export default WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount = async () => {
      const data = await getBucketLists().catch(console.error);
      // shape data
      const shapedData = data
        ? data.map(({ id, title, text, hearts }) => {
            return (
              <Link key={id} to={`/bucket/${id}`} className="Link">
                <BucketListPreview
                  title={title}
                  text={text}
                  hearts={hearts}
                  max={160}
                  className="BucketListPreview"
                />
              </Link>
            );
          })
        : null;
      this.setState({ data: shapedData });

      /* struct of data
      [
        {
          id: number
          title: '',
          text: '',
          hearts: number
        }
      ]
      */
    };

    render() {
      return (
        <WrappedComponent {...this.props}>{this.state.data}</WrappedComponent>
      );
    }
  };
};
