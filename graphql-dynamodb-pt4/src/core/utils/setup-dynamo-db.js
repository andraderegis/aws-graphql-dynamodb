const dynamoose = require('dynamoose');

function setupDynamoDBClient() {
  if (!process.env.IS_LOCAL) {
    return;
  }

  const host = process.env.LOCALSTACK_HOST;
  const port = process.env.LOCALSTACK_PORT;
  const endpoint = `http://${host}:${port}`;

  console.log('running locally', host, port);

  dynamoose.aws.sdk.config.update({
    region: 'localhost',
    accessKeyId: "DEFAULT_ACCESS_KEY",
    secretAccessKey: "DEFAULT_SECRET_ACCESS_KEY"
  });

  dynamoose.aws.ddb.local(endpoint);
}

module.exports = setupDynamoDBClient;