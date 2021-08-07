const resolvers = {
  Hero: {
    //Each hero found, this subquery will be triggered
    async skills(root, args, context) {
      const skills = root.skills.map(skill => context.Skills.findOne(skill));
      const results = await Promise.all(skills);
      const all = results.reduce((prev, next) => prev.concat(next), []);

      return all;
    }
  },
  //Query operations - GET
  Query: {
    async getHero(root, args, context, info) {
      return context.Heroes.findAll(args);
    }
  },
  //All change operations (create, update, delete) - POST (Only POST HTTP Method)
  Mutation: {
    async createHero(root, args, context, info) {
      const { id } = await context.Heroes.create(args);

      return id;
    }
  }
}

module.exports = resolvers;