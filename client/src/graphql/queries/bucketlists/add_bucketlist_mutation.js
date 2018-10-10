import gql from 'graphql-tag'

export const ADD_BUCKETLIST = gql`
mutation AddBucketList($input: BucketListInput!)
  {
  addBucketList(input: $input) {
    hearts
    title
    text
    id
    owner {
      id
      firstName
      lastName
    }
  }
}
`