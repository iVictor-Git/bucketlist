import gql from 'graphql-tag';

const ADD_BUCKETLIST = gql`
  mutation AddBucketlist($title: String!, $text: String!, $ownerId: String!) {
    addBucketList(input: {
      $title,
      $text,
      $ownerId
    }) {
      id
      text
      title
      ownerId
    }
  }
`


