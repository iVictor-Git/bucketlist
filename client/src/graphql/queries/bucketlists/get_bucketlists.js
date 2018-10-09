import gql from 'graphql-tag';

export const GET_BUCKETLISTS = gql`
  query {
    bucketlists {
      id
      title
      text
      hearts
    }
  }
`;
