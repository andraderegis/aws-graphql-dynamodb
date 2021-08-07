'use strict';

const { ApolloServer } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const setupDynamoDBClient = require('./src/core/utils/setup-dynamo-db');
setupDynamoDBClient();

const HeroesFactory = require('./src/core/factories/heroes-factory');
const SkillsFactory = require('./src/core/factories/skills-factory');

const IS_LOCAL = process.env.IS_LOCAL;

const schema = require('./src/graphql');

const server = new ApolloServer({
  schema,
  context: async () => ({
    Heroes: await HeroesFactory.createInstance(),
    Skills: await SkillsFactory.createInstance()
  }),
  //getting schema info
  introspection: IS_LOCAL,
  //frontend to test
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  formatError(error) {
    console.error('[Global error logger]', error);

    return error;
  },
  formatResponse(response) {
    console.log('[Global logger]', response);

    return response;
  }
})

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*'
    }
  },
});