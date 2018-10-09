module.exports = {
  User: {
    bucketLists: ({id}, _, context) => {
      return context.BucketList.find({ownerId: id})
    }
  }
}