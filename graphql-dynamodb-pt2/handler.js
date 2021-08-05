'use strict';

const { v4: uuid } = require('uuid');

const { ApolloServer, gql } = require('apollo-server-lambda');

const HeroesFactory = require('./src/core/factories/heroes-factory');
const SkillsFactory = require('./src/core/factories/skills-factory');

const setupDynamoDBClient = require('./src/core/utils/setup-dynamo-db');
setupDynamoDBClient();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: true,
    }
  },
});

async function main() {
  console.log('creating factories...')

  const skillsFactory = await SkillsFactory.createInstance();
  const heroesFactory = await HeroesFactory.createInstance();

  console.log('inserting skill item');

  const skillId = `${uuid()}`;
  await skillsFactory.create({
    id: skillId,
    name: 'mage',
    value: 99
  });

  console.log('getting skill item');
  const skillItem = await skillsFactory.findOne(skillId);
  console.log({ skillItem });

  const allSkills = await skillsFactory.findAll();
  console.log({ allSkills });

  console.log('\n----------------\n');

  console.log('inserting hero item');
  const heroId = `${uuid()}`;
  await heroesFactory.create({
    id: heroId,
    name: 'Aerith Gainsborough',
    skills: [
      skillId
    ]
  });

  const hero = await heroesFactory.findOne(heroId);
  console.log({ hero });

  const allHeroes = await heroesFactory.findAll();
  console.log({ allHeroes });

  return {
    statusCode: 200,
    body: JSON.stringify({
      hero: {
        hero,
        allHeroes
      },
      skill: {
        skillItem,
        allSkills
      }
    })
  }
}

module.exports.test = main;