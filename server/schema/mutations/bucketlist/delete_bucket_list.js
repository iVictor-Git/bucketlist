module.exports = {
  Mutation: {
    deleteBucketList: (_, { id }, { models: { BucketList } }) => {
      return BucketList.findByIdAndRemove(id);
    },
  },
};
