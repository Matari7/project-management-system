const express = require('express');
const { sendNotification, receiveNotification, getNotificationHistory } = require('../controllers/notificationController');

const router = express.Router();

router.post('/', sendNotification);
router.get('/', receiveNotification);
router.get('/history', getNotificationHistory);

module.exports = router;
