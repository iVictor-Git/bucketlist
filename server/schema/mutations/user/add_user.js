module.exports = {
  Mutation: {
    addUser: (_, {input}, {models: {User}}) => {
      const userModel = new User({...input});
      return userModel.save().then(user => user).catch(err => console.log(err))
    },
  },
};
