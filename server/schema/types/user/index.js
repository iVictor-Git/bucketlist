module.exports = {
  User: {
    bucketLists: ({id}, _, {model: {BucketList}}) => {
      return BucketList.find({ownerId: id})
    }
  }
}