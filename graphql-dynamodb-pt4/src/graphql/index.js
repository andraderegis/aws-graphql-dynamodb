const { readdirSync } = require('fs');

const {
  mergeSchemas
} = require('@graphql-tools/merge');

const {
  makeExecutableSchema
} = require('@graphql-tools/schema');

const {
  gql
} = require('apollo-server-lambda');

//Read directory
const schemas = readdirSync(__dirname)
  //Ignore current file (index.js)
  .filter(file => file !== 'index.js')
  //Require index.js file in all subdirectories
  .map(folder => require(`./${folder}`))
  //Create GraphQL schema, using schemas and resolvers
  .map(({ schema, resolvers }) => {
    return makeExecutableSchema({
      //gql run the validation schema. is not mandatory, but is recommended
      typeDefs: gql(schema),
      resolvers
    });
  });


/**
 * Heroes resolver
 * {
 *    Query: { getHero }
 * }
 * 
 * Skils resolver
 * {
 *    Query: { getSkill }
 * }
 * 
 * Heroes + Skills = it will replace the first query contend
 * 
 * with mergeSchemas, the schemas it will be merged:
 * 
 * {
 *    Query: {
 *      getHero,
 *      getSkill
 *    }
 * }
 */

module.exports = mergeSchemas({
  schemas
});