module.exports = {
  BucketList: {
    owner: (parent, _, { models: { User } }) => {
      return User.findById({ id: parent.ownerId });
    },
    users: ({ userIds }, _, { models: { User } }) => {
      const users = userIds.map(uid => {
        return User.findById(uid);
      });
      return users;
    },
  },
};
