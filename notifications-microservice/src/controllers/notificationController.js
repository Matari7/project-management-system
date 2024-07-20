const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = 'notifications';

exports.sendNotification = async (req, res) => {
  const { message, userId } = req.body;
  const params = {
    TableName: tableName,
    Item: { messageId: Date.now().toString(), message, userId }
  };
  try {
    await dynamodb.put(params).promise();
    res.status(201).json({ message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.receiveNotification = async (req, res) => {
  const params = {
    TableName: tableName,
  };
  try {
    const data = await dynamodb.scan(params).promise();
    res.status(200).json(data.Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNotificationHistory = async (req, res) => {
  const { userId } = req.query;
  const params = {
    TableName: tableName,
    FilterExpression: 'userId = :userId',
    ExpressionAttributeValues: { ':userId': userId }
  };
  try {
    const data = await dynamodb.scan(params).promise();
    res.status(200).json(data.Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
