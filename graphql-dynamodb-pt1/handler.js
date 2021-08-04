'use strict';

const AWS = require('aws-sdk');

function setupDynamoDB() {
  if (!process.env.IS_LOCAL) {
    return new AWS.DynamoDB.DocumentClient();
  }

  const LOCALSTACK_HOST = process.env.LOCALSTACK_HOST;
  const DYNAMODB_PORT = process.env.DYNAMODB_PORT;

  console.log('running dynamodb locally!', LOCALSTACK_HOST, DYNAMODB_PORT);

  return new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET',
    endpoint: new AWS.Endpoint(`http://${LOCALSTACK_HOST}:${DYNAMODB_PORT}`)
  });
}

module.exports.hello = async (event) => {
  const dynamodb = setupDynamoDB();

  const heroesTable = await dynamodb.scan({
    TableName: process.env.HEROES_TABLE
  }).promise();

  const skillsTable = await dynamodb.scan({
    TableName: process.env.SKILLS_TABLE
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        skillsTable,
        heroesTable
      }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
