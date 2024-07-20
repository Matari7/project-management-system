const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const rolesTable = 'roles';
const permissionsTable = 'permissions';

exports.manageRoles = async (req, res) => {
  const { roleId, roleName } = req.body;
  const params = {
    TableName: rolesTable,
    Item: { roleId, roleName }
  };
  try {
    await dynamodb.put(params).promise();
    res.status(201).json({ message: 'Role managed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.managePermissions = async (req, res) => {
  const { permissionId, permissionName } = req.body;
  const params = {
    TableName: permissionsTable,
    Item: { permissionId, permissionName }
  };
  try {
    await dynamodb.put(params).promise();
    res.status(201).json({ message: 'Permission managed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
