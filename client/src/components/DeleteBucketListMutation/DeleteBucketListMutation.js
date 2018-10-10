import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_BUCKETLIST } from '../../graphql/queries/';
import Text from '../UI/Text/Text';
import DeleteModalControl from '../DeleteModalControl/DeleteModalControl';

const DeleteBucketListMutation = ({ id }) => {
  const handleClick = deleteBucketList => {
    deleteBucketList({
      variables: {
        id: id,
      },
    });
  };

  return (
    <Mutation
      mutation={DELETE_BUCKETLIST}
      update={(cache, { deleteBucketList }) => {
        // TODO: need to fix cache to reflect changes made to server
        console.log(cache);
        cache.writeQuery({
          query: { DELETE_BUCKETLIST },
          data: { bucketlists: deleteBucketList },
        });
      }}>
      {(deleteBucketList, { data, loading, error, called }) => {
        return (
          <React.Fragment>
            <Text
              text={'Delete'}
              className="small delete button Detail"
              onClick={() => handleClick(deleteBucketList)}
            />
            {!loading && called && <DeleteModalControl show="true" />}
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

export default DeleteBucketListMutation;
