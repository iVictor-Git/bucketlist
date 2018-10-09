import React from 'react';

import { Query } from 'react-apollo';
import { GET_BUCKETLISTS, GET_BUCKETLIST } from '../../graphql/queries/';

import BucketListPreview from '../BucketListPreview/BucketListPreview';
import { Link } from 'react-router-dom';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import Loader from '../UI/Loader/Loader'

const QueryBucketLists = props => {
  const { id } = props;
  if (!id) {
    return (
      <Query query={GET_BUCKETLISTS}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error</h1>;
          if (loading || !data) return <FullPageLoader />;

          const { bucketlists: arrayOfData } = data;
          return arrayOfData.map(({ id, title, text, hearts }) => {
            const dataProps = { id, title, text, hearts };
            return (
              <Link className="Link" to={`/bucket/${id}`} key={id}>
                <BucketListPreview
                  className="BucketListPreview"
                  {...dataProps}
                />
              </Link>
            );
          });
        }}
      </Query>
    );
  }

  return (
    <Query query={GET_BUCKETLIST} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) return <h1>Error</h1>;
        if (loading || !data) return <Loader className='BucketListPreview Loading Detail' />

        const { bucketlist } = data;
        const dataProps = { ...bucketlist };

        return <BucketListPreview {...props} {...dataProps} />;
      }}
    </Query>
  );
};

export default QueryBucketLists;
