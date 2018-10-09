
module.exports = {
  Query: {
    user: (_, {id}, {models: {User}}, info) => {
      return User.findById(id)
    },
    users: (_, __, {models: {User}}, info) => {
      return User.find();
    }
  }
}