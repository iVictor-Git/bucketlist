module.exports = {
  Mutation: {
    deleteBucketList: async (_, { id }, { models: { BucketList } }) => {
      const query = BucketList.findByIdAndDelete(id);
      query.exec((err, result) => {
        if (err) return Error('Something went wrong with deleting document');
      });

      const bucketlists = await BucketList.find();

      const newBucketlist = bucketlists.filter(bucketlist => {
        return bucketlist.id !== id;
      });
      return newBucketlist;
    },
  },
};
