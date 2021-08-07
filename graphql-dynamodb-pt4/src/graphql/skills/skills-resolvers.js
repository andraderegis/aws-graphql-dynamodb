const resolvers = {
  //Query operations - GET
  Query: {
    async getSkill(root, args, context, info) {
      return context.Skills.findAll(args);
    }
  },
  //All change operations (create, update, delete) - POST (Only POST HTTP Method)
  Mutation: {
    async createSkill(root, args, context, info) {
      const { id } = await context.Skills.create(args);

      return id;
    }
  }
}

module.exports = resolvers;