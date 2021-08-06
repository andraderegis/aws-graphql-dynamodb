const resolvers = {
  //Query operations - GET
  Query: {
    async getHero(root, args, context, info) {
      return 'Hello world!';
    }
  },
  //All change operations (create, update, delete) - POST (Only POST HTTP Method)
  Mutation: {
    async createHero(root, args, context, info) {
      return 'Hello world!';
    }
  }
}

module.exports = resolvers;