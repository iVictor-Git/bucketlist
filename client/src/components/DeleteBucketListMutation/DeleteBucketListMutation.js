import React from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_BUCKETLIST } from '../../graphql/queries/';
import Text from '../UI/Text/Text';
import DeleteModalControl from '../DeleteModalControl/DeleteModalControl'

const DeleteBucketListMutation = ({id}) => {

  const handleClick = (deleteBucketList) => {
    deleteBucketList({variables: {
      id: id
    }})
  }

  return (
    <Mutation mutation={DELETE_BUCKETLIST}>
      {(deleteBucketList, { data, loading, error }) => (
        <React.Fragment>
          <Text text={'Delete'} className="small delete button Detail" onClick={handleClick}/>
          {!loading && <DeleteModalControl show='true' />}
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default DeleteBucketListMutation;
