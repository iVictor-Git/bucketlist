module.exports = {
  Mutation: {
    addBucketList: async (_, { input }, { models: { BucketList, User } }) => {
      const { ownerId } = input;
      const owner = User.findById(ownerId);
      if (owner) {
        const bucketlistModel = new BucketList({ ...input });
        const bucketlist = await bucketlistModel.save();
        return bucketlist;
      }
      return Error('Owner not found');
    },
  },
};
