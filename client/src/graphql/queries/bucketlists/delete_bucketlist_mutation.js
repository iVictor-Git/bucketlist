import gql from 'graphql-tag';

export const DELETE_BUCKETLIST = gql`
  mutation DeleteBucketList($id: String!) {
    deleteBucketList(id: $id) {
      id
    }
  }
`