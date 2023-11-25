const {User} = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({})
    }
  }
};

module.exports = resolvers;
