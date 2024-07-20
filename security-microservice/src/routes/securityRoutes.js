const express = require('express');
const { manageRoles, managePermissions } = require('../controllers/securityController');

const router = express.Router();

router.post('/roles', manageRoles);
router.post('/permissions', managePermissions);

module.exports = router;
