import gql from 'graphql-tag';

export const GET_BUCKETLIST = gql`
  query bucketlist($id: String!){
    bucketlist(id: $id) {
      title
      text
      hearts
      owner{
        firstName
        lastName
      }
    }
  }
`;
