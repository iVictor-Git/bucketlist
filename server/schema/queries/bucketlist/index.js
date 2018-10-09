module.exports = {
  Query: {
    bucketlist: (_, { id }, { models: { BucketList } }, info) => {
      return BucketList.findById(id)
    },
    bucketlists: (_, __, { models: { BucketList } }) => {
      return BucketList.find();
    },
  },
};
