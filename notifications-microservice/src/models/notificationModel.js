const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = 'notifications';

const Notification = {
  create: async (data) => {
    const params = {
      TableName: tableName,
      Item: data
    };
    return await dynamodb.put(params).promise();
  },

  getAll: async () => {
    const params = {
      TableName: tableName,
    };
    return await dynamodb.scan(params).promise();
  },

  getByUserId: async (userId) => {
    const params = {
      TableName: tableName,
      FilterExpression: 'userId = :userId',
      ExpressionAttributeValues: { ':userId': userId }
    };
    return await dynamodb.scan(params).promise();
  }
};

module.exports = Notification;
