module.exports = {
  BucketList: {
    owner: ({ownerId}, _, { models: { User } }) => {
      const owner = User.findById(ownerId)
      if (!owner) {
        return Error('Owner not found');
      }
      return owner
    },
    users: ({ userIds }, _, { models: { User } }) => {
      const users = userIds.map(uid => {
        return User.findById(uid);
      });
      return users;
    },
  },
};
