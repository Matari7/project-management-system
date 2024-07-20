const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const rolesTable = 'roles';
const permissionsTable = 'permissions';

const Security = {
  manageRole: async (data) => {
    const params = {
      TableName: rolesTable,
      Item: data
    };
    return await dynamodb.put(params).promise();
  },

  managePermission: async (data) => {
    const params = {
      TableName: permissionsTable,
      Item: data
    };
    return await dynamodb.put(params).promise();
  },

  getRoles: async () => {
    const params = {
      TableName: rolesTable,
    };
    return await dynamodb.scan(params).promise();
  },

  getPermissions: async () => {
    const params = {
      TableName: permissionsTable,
    };
    return await dynamodb.scan(params).promise();
  }
};

module.exports = Security;
