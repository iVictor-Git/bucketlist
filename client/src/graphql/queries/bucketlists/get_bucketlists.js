import gql from 'graphql-tag';

export const GET_BUCKETLISTS = gql`
  {
    bucketlists {
      id
      title
      text
      hearts
    }
  }
`;
