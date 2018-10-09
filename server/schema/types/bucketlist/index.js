module.exports = {
  BucketList: {
    owner: (parent, _, context) => {
      return context.User.findById({id: parent.ownerId})
    }
  }
}