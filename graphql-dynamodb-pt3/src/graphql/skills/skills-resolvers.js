const resolvers = {
  //Query operations - GET
  Query: {
    async getSkill(root, args, context, info) {
      return 'Get Skill!';
    }
  },
  //All change operations (create, update, delete) - POST (Only POST HTTP Method)
  Mutation: {
    async createSkill(root, args, context, info) {
      return 'Create Skill!';
    }
  }
}

module.exports = resolvers;